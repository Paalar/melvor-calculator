import React, { FC, useContext } from "react";
import Row from "common/Row";
import { Card } from "common/Card";
import NumberInputField from "components/NumberInputField";
import { CalculatorContext } from "../../state/Calculator/Context";
import { setPlayerMastery } from "state/Calculator/actions";
import {
  calculateMasteryXp,
  getNumberOfUnlockedByLvl,
  getCurrentLvlByXp,
  getNumberOfUnlockables,
} from "data/experienceTable";
import { unlockables } from "pages/Woodcutting/data";

type Props = {
  maxMastery: number;
  itemMastery: string;
  item: { name: string; spa: number };
  setItemMastery: (mastery: string) => void;
};

const MasteryCalculator: FC<Props> = ({
  maxMastery,
  itemMastery,
  item,
  setItemMastery,
}) => {
  const { calculatorState, calculatorDispatch } = useContext(CalculatorContext);
  const { currentExp, playerMastery } = calculatorState;
  const masteryXpPerAction = calculateMasteryXp(
    getNumberOfUnlockedByLvl(
      getCurrentLvlByXp(Number(currentExp)),
      unlockables
    ),
    Number(playerMastery),
    maxMastery,
    Number(itemMastery),
    getNumberOfUnlockables(unlockables),
    item.spa
  );
  return (
    <>
      <Card>
        <h2>Mastery Calculator - {item.name}</h2>
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
            value={itemMastery}
            onValueChange={(value) => setItemMastery(value)}
            min={1}
            max={99}
          />
        </Row>
        <Row>
          <p>Current skill's total mastery lvl</p>
          <NumberInputField
            value={calculatorState.playerMastery}
            onValueChange={(value) =>
              calculatorDispatch(setPlayerMastery(value))
            }
            min={1}
            max={maxMastery}
          />
        </Row>
        <Row>
          <p>{item.name} Mastery XP per action</p>
          <p>{masteryXpPerAction.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Skill mastery pool XP per action</p>
          <p>{(masteryXpPerAction / 4).toFixed(2)}</p>
        </Row>
      </Card>
    </>
  );
};

export default MasteryCalculator;
