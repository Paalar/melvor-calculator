import React, { FC, useContext, useState } from "react";
import Row from "common/Row";
import { Card } from "common/Card";
import {
  getNumberOfUnlockables,
  getNumberOfUnlockedByLvl,
} from "pages/Woodcutting/data";
import NumberInputField from "components/NumberInputField";
import { calculateMasteryXp, getCurrentLvlByXp } from "data/experienceTable";
import { CalculatorContext, setPlayerMastery } from "./Context";

type Props = {
  maxMastery: number;
  spa: number;
  name: string;
};

const MasteryCalculator: FC<Props> = ({ maxMastery, spa, name }) => {
  const { calculatorState, calculatorDispatch } = useContext(CalculatorContext);
  const [currentMastery, setCurrentMastery] = useState<string>("1");

  const onTotalMasteryChange = (value: string) =>
    calculatorDispatch(setPlayerMastery(value));
  const masteryXpPerAction = calculateMasteryXp(
    getNumberOfUnlockedByLvl(
      getCurrentLvlByXp(Number(calculatorState.currentExp))
    ),
    Number(calculatorState.playerMastery),
    maxMastery,
    Number(currentMastery),
    getNumberOfUnlockables(),
    spa
  );
  return (
    <>
      <Card>
        <h2>Mastery Calculator - {name}</h2>
        <Row>
          <p>
            The mastery calculator is dependent on the skill's current lvl. You
            will need to update your lvl to get the correct mastery XP per
            action.
          </p>
        </Row>
        <Row>
          <p>Current item's mastery lvl</p>
          <NumberInputField
            value={currentMastery}
            onValueChange={(value) => setCurrentMastery(value)}
            min={1}
            max={99}
          />
        </Row>
        <Row>
          <p>Current skill's total mastery lvl</p>
          <NumberInputField
            value={calculatorState.playerMastery}
            onValueChange={onTotalMasteryChange}
            min={1}
            max={maxMastery}
          />
        </Row>
        <Row>
          <p>Mastery XP per action</p>
          <p>{masteryXpPerAction.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Skill's mastery XP per action</p>
          <p>{(masteryXpPerAction / 4).toFixed(2)}</p>
        </Row>
      </Card>
    </>
  );
};

export default MasteryCalculator;
