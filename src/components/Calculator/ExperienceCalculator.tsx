import { calculateNumberOfActions, calculateSecondsToTargetLvl, experienceDifference } from "data/experienceTable";
import React, { FC, useEffect, useState } from "react";
import NumberInputField from "components/NumberInputField";
import Row from "common/Row";
import { getTimeText } from "utils/getTime";

type Props = {
  xpa: number;
  xps: number;
}

const ExperienceCalculator: FC<Props> = ({ xpa, xps }) => {
  const [currentLvl, setCurrentLvl] = useState<string>("1");
  const [targetLvl, setTargetLvl] = useState<string>("99")
  const onChangeCurrentLvl = (value: string) => setCurrentLvl(value);
  const onChangeTargetLvl = (value: string) => setTargetLvl(value);

  const expToTarget = experienceDifference(Number(currentLvl) - 1, Number(targetLvl) - 1);
  const actionsToTarget = calculateNumberOfActions(expToTarget, Number(xpa));
  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);
  const timeToTarget = getTimeText(secondsToTarget);

  useEffect(() => {
    const numberCurrent = Number(currentLvl);
    const numberTarget = Number(targetLvl);
    if (numberCurrent >= numberTarget && numberTarget) {
      setCurrentLvl((numberCurrent - 1).toString())
    }
  }, [currentLvl, targetLvl])
  return (
    <>
      <Row>
        <p>Current level</p>
        <NumberInputField value={currentLvl} onValueChange={onChangeCurrentLvl} max={99} min={1} />
      </Row>
      <Row>
        <p>Target level</p>
        <NumberInputField value={targetLvl} onValueChange={onChangeTargetLvl} max={99} min={1} />
      </Row>
      <Row>
        <p>Experience to target</p>
        <p>{currentLvl.length && targetLvl.length ? expToTarget : null}</p>
      </Row>
      <Row>
        <p>Number of actions</p>
        <p>{currentLvl.length && targetLvl.length ? actionsToTarget : null}</p>
      </Row>
      <Row>
        <p>Seconds to completion (if constant)</p>
        <p>{currentLvl.length && targetLvl.length ? timeToTarget : null}</p>
      </Row>
    </>)
};

export default ExperienceCalculator;
