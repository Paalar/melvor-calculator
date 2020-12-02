import {
  calculateNumberOfActions,
  calculateSecondsToTargetLvl,
  experienceDifference,
} from "data/experienceTable";
import React, { FC, useEffect, useState } from "react";
import NumberInputField from "components/NumberInputField";
import Row from "common/Row";
import { getTimeText } from "utils/getTime";
import { getCommaNumbers } from "utils/getCommaNumbers";
import styled from "styled-components";
import { Card } from "common/Card";

type Props = {
  xpa: number;
  xps: number;
};

const CalculatorCard = styled(Card)``;

const ExperienceCalculator: FC<Props> = ({ xpa, xps }) => {
  const [currentLvl, setCurrentLvl] = useState<string>("1");
  const [targetLvl, setTargetLvl] = useState<string>("99");
  const onChangeCurrentLvl = (value: string) => setCurrentLvl(value);
  const onChangeTargetLvl = (value: string) => setTargetLvl(value);

  const expToTarget = experienceDifference(
    Number(currentLvl) - 1,
    Number(targetLvl) - 1
  );
  const actionsToTarget = calculateNumberOfActions(expToTarget, Number(xpa));
  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);

  useEffect(() => {
    const numberCurrent = Number(currentLvl);
    const numberTarget = Number(targetLvl);
    if (numberCurrent >= numberTarget && numberTarget) {
      setCurrentLvl((numberTarget - 1).toString());
    }
  }, [currentLvl, targetLvl]);
  return (
    <CalculatorCard>
      <h2>Calculator</h2>
      <Row>
        <p>Current level</p>
        <NumberInputField
          value={currentLvl}
          onValueChange={onChangeCurrentLvl}
          max={99}
          min={1}
        />
      </Row>
      <Row>
        <p>Target level</p>
        <NumberInputField
          value={targetLvl}
          onValueChange={onChangeTargetLvl}
          max={99}
          min={2}
        />
      </Row>
      <Row>
        <p>Experience to reach target:</p>
        <p>
          {currentLvl.length && targetLvl.length
            ? getCommaNumbers(expToTarget)
            : null}
        </p>
      </Row>
      <Row>
        <p>Number of actions:</p>
        <p>
          {currentLvl.length && targetLvl.length
            ? getCommaNumbers(actionsToTarget)
            : null}
        </p>
      </Row>
      <Row>
        <p>Time to completion (if constant):</p>
        <p>
          {currentLvl.length && targetLvl.length
            ? getTimeText(secondsToTarget)
            : null}
        </p>
      </Row>
    </CalculatorCard>
  );
};

export default ExperienceCalculator;
