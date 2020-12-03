import { FC, useContext } from "react";
import {
  experienceDifference,
  calculateNumberOfActions,
  calculateSecondsToTargetLvl,
} from "data/experienceTable";
import { getCommaNumbers } from "utils/getCommaNumbers";
import { getTimeText } from "utils/getTime";
import Row from "common/Row";
import { CalculatorContext } from "./Context";

type Props = {
  targetLvl: string;
  xpa?: number;
  xps: number;
};

const Calculations: FC<Props> = ({ targetLvl, xpa, xps }) => {
  const { calculatorState } = useContext(CalculatorContext);
  const { currentExp } = calculatorState;
  const expToTarget = experienceDifference(
    Number(currentExp),
    Number(targetLvl) - 1
  );
  const actionsToTarget = calculateNumberOfActions(expToTarget, Number(xpa));
  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);
  if (expToTarget <= 0) return null;
  return (
    <>
      {currentExp.length && targetLvl.length ? (
        <Row>
          <p>Experience to reach target:</p>
          <p>{getCommaNumbers(expToTarget)}</p>
        </Row>
      ) : null}
      {xpa ? (
        <Row>
          <p>Number of actions:</p>
          <p>
            {currentExp.length && targetLvl.length
              ? getCommaNumbers(actionsToTarget)
              : null}
          </p>
        </Row>
      ) : null}
      <Row>
        <p>Time to completion (if constant):</p>
        <p>
          {Number.isNaN(secondsToTarget)
            ? "Fill in the necessary fields to see time"
            : getTimeText(secondsToTarget)}
        </p>
      </Row>
    </>
  );
};

export default Calculations;
