import { calculateNumberOfActions, experienceDifference } from "data/experienceTable";
import React, { FC, useEffect, useState } from "react";
import NumberInputField from "components/NumberInputField";
import Row from "common/Row";

const Calculator: FC = () => {
  const [currentLvl, setCurrentLvl] = useState<string>("1");
  const [targetLvl, setTargetLvl] = useState<string>("99")
  const [expPerAction, setExpPerAction] = useState<string>("1");
  const onChangeCurrentLvl = (value: string) => setCurrentLvl(value);
  const onChangeTargetLvl = (value: string) => setTargetLvl(value);
  const onChangeExpPerAction = (value: string) => setExpPerAction(value);

  const actionsToTarget = calculateNumberOfActions(experienceDifference(Number(currentLvl) - 1, Number(targetLvl) - 1), Number(expPerAction));

  useEffect(() => {
    const numberCurrent = Number(currentLvl);
    const numberTarget = Number(targetLvl);
    if (numberCurrent >= numberTarget) {
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
        <p>XP per action</p>
        <NumberInputField value={expPerAction} onValueChange={onChangeExpPerAction} min={1} />
        {currentLvl.length && targetLvl.length && expPerAction.length  ? actionsToTarget : null}
      </Row>
    </>)
};

export default Calculator;
