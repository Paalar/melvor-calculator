import { FC, useContext } from "react";
import { getCommaNumbers } from "utils/getCommaNumbers";
import { getTimeText } from "utils/getTime";
import Row from "common/Row";
import { CalculatorContext } from "state/Calculator/Context";

type Props = {
  targetLvl: string;
  secondsToTarget: number;
  expToTarget: number;
};

const Calculations: FC<Props> = ({
  targetLvl,
  secondsToTarget,
  expToTarget,
}) => {
  const { calculatorState } = useContext(CalculatorContext);
  const { currentExp } = calculatorState;

  if (expToTarget <= 0) return null;
  return (
    <>
      {currentExp.length && targetLvl.length ? (
        <Row>
          <p>Experience to reach target:</p>
          <p>{getCommaNumbers(expToTarget)}</p>
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
