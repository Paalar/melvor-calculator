import Row from "common/Row";
import { expTableAsLvls, calculateNumberOfActions, experienceDifference } from "data/experienceTable";
import React, { ChangeEvent, FC, useState } from "react";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

const Calculator: FC = () => {
  const [currentLvl, setCurrentLvl] = useState<string | number>(1);
  const [targetLvl, setTargetLvl] = useState<number>(99)
  const [expPerAction, setExpPerAction] = useState<string | number>(1);
  const onChangeCurrentLvl = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const numberValue = Number(value);
    if (!value.length) {
      setCurrentLvl(value)
    }
    else if (numberValue <= 0) {
      setCurrentLvl(1);
    }
    else if (numberValue >= targetLvl - 1) {
      setCurrentLvl(targetLvl - 1);
    }
    else {
      setCurrentLvl(numberValue)
    }
  }
  const onChangeTargetLvl = (option: Option) => {
    const newTargetLvl = Number(option.value);
    setTargetLvl(newTargetLvl)
    if (newTargetLvl <= currentLvl) {
      setCurrentLvl(newTargetLvl - 1);
    }
  }
  const onChangeExpPerAction = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!value.length) {
      setExpPerAction(value);
    }
    else {
      setExpPerAction(Number(value));
    }
  }
  return (
    <>
      <Row>
        <p>Current level</p>
        <input type="number" value={currentLvl} onChange={onChangeCurrentLvl} />
      </Row>
      <Row>
        <p>Target level</p>
        <Dropdown options={expTableAsLvls()} value={targetLvl.toString()} onChange={onChangeTargetLvl} />
      </Row>
      <Row>
        <p>XP per action</p>
        <input type="number" value={expPerAction} onChange={onChangeExpPerAction} />
        {typeof currentLvl === "number" && typeof expPerAction === "number" ? calculateNumberOfActions(experienceDifference(currentLvl - 1, targetLvl - 1), expPerAction) : null}
      </Row>
    </>)
};

export default Calculator;
