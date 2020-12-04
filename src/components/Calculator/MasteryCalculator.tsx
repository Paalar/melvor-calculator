import { FC, useContext, useEffect, useState } from "react";
import Row from "common/Row";
import { Card } from "common/Card";
import NumberInputField from "components/NumberInputField";
import { CalculatorContext } from "state/Calculator/Context";
import { setPlayerMastery } from "state/Calculator/actions";
import usePrevious from "hooks/usePrevious";
import { Extra, extraMasteryPool5, removeExtra } from "data/extras";
import funcByOperator from "utils/funcByOperator";
import { getCurrentLvlByXp } from "calculations/experience";
import {
  calculateMasteryXp,
  getNumberOfUnlockedByLvl,
  getNumberOfUnlockables,
} from "calculations/mastery";
import { Unlockables } from "pages/Woodcutting/data";

type Props = {
  maxMastery: number;
  itemMastery: string;
  item: { name: string; spa: number };
  setItemMastery: (mastery: string) => void;
  maxMasteryPool: number;
  unlockables: Unlockables;
};

const MasteryCalculator: FC<Props> = ({
  maxMastery,
  itemMastery,
  item,
  setItemMastery,
  maxMasteryPool,
  unlockables,
}) => {
  const [xpExtras, setXpExtras] = useState<Extra[]>([]);
  const { calculatorState, calculatorDispatch } = useContext(CalculatorContext);
  const { currentExp, playerMastery, masteryPool } = calculatorState;
  const prevMasteryPool = usePrevious(masteryPool);
  let mxpa = calculateMasteryXp(
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

  xpExtras.forEach(
    (extra) => (mxpa = funcByOperator[extra.operator](mxpa, extra.value))
  );

  useEffect(() => {
    if (prevMasteryPool !== masteryPool) {
      if (
        Number(masteryPool) >= maxMasteryPool * 0.05 &&
        !xpExtras.includes(extraMasteryPool5)
      )
        setXpExtras([...xpExtras, extraMasteryPool5]);
      if (Number(masteryPool) < maxMasteryPool * 0.05)
        setXpExtras(removeExtra(xpExtras, extraMasteryPool5));
    }
  }, [masteryPool, prevMasteryPool, xpExtras, maxMasteryPool]);
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
          <p>{mxpa.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Skill mastery pool XP per action</p>
          <p>{(mxpa / 4).toFixed(2)}</p>
        </Row>
      </Card>
    </>
  );
};

export default MasteryCalculator;
