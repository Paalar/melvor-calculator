import { expTableAsLvls, calculateNumberOfActions, experienceDifference } from "data/experienceTable";
import React, { ChangeEvent, FC, useState } from "react";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from "styled-components";

const CalculatorCard = styled.section`

`;

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
    <CalculatorCard>
      <input type="number" value={currentLvl} onChange={onChangeCurrentLvl} />
      <Dropdown options={expTableAsLvls()} value={targetLvl.toString()} onChange={onChangeTargetLvl} />
      <input type="number" value={expPerAction} onChange={onChangeExpPerAction} />
      {typeof currentLvl === "number" && typeof expPerAction === "number" ? calculateNumberOfActions(experienceDifference(currentLvl - 1, targetLvl - 1), expPerAction) : null}
    </CalculatorCard>)
};

export default Calculator;
