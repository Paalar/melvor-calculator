import { FC, useContext } from "react";
import styled from "styled-components";
import Row from "common/Row";
import { Card } from "common/Card";
import NumberInputField from "components/NumberInputField";
import {
  calculateMasteryXp,
  calculateSecondsToTargetLvl,
  getCurrentLvlByXp,
  getNumberOfUnlockables,
  getNumberOfUnlockedByLvl,
  Unlockables,
} from "data/experienceTable";
import { setMasteryXp } from "state/Calculator/actions";
import { CalculatorContext } from "state/Calculator/Context";
import { getTimeText } from "utils/getTime";

type Props = {
  spa: number[];
  itemMasteries: string[];
  maxMastery: number;
  unlockables: Unlockables;
  maxMasteryPool: number;
};

const calculateCompletion = (masteryExp: string, maxMasteryPool: number) =>
  (Number(masteryExp) / maxMasteryPool) * 100;
const calculateExpToMax = (masteryExp: string, maxMasteryPool: number) =>
  maxMasteryPool - Number(masteryExp);

const MasteryProgressBar: FC<Props> = ({
  maxMastery,
  itemMasteries,
  spa,
  unlockables,
  maxMasteryPool,
}) => {
  const { calculatorState, calculatorDispatch } = useContext(CalculatorContext);
  const { currentExp, masteryPool, playerMastery } = calculatorState;
  const onMasteryXpChange = (value: string) =>
    calculatorDispatch(setMasteryXp(value));
  const completion = calculateCompletion(masteryPool, maxMasteryPool);
  const expToTarget = calculateExpToMax(masteryPool, maxMasteryPool);

  const masteryXpPerAction = spa.reduce(
    (prev, current, index) =>
      calculateMasteryXp(
        getNumberOfUnlockedByLvl(
          getCurrentLvlByXp(Number(currentExp)),
          unlockables
        ),
        Number(playerMastery),
        maxMastery,
        Number(itemMasteries[index]),
        getNumberOfUnlockables(unlockables),
        current
      ) + prev,
    0
  );
  const xps = spa.reduce(
    (prev, current) => masteryXpPerAction / 4 / current + prev,
    0
  );
  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);
  return (
    <Card>
      <Row>
        <p>Mastery pool XP</p>
        <NumberInputField
          value={calculatorState.masteryPool}
          onValueChange={onMasteryXpChange}
          min={0}
          max={maxMasteryPool}
        />
      </Row>
      <Container width={completion}>
        <div />
        <p>{`${completion === 100 ? 100 : completion.toFixed(1)}/100%`}</p>
      </Container>
      <Row>
        <p>Time to 100% (if constant):</p>
        <p>
          {Number.isNaN(secondsToTarget)
            ? "Fill in the necessary fields to see time"
            : getTimeText(secondsToTarget)}
        </p>
      </Row>
    </Card>
  );
};

const Container = styled.div<{ width: number }>`
  background-color: #222831;
  font-weight: bold;
  position: relative;
  div {
    position: absolute;
    height: 100%;
    width: ${(props) => props.width}%;
    background-color: #e5ae67;
    transition: width 0.5s ease-in-out;
  }
  p {
    position: relative;
  }
`;

export default MasteryProgressBar;
