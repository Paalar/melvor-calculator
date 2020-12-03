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
  numberOfUnlocks: number;
  spa: number[];
  itemMasteries: string[];
  maxMastery: number;
  unlockables: Unlockables;
};

const calculateCompletion = (masteryExp: string, numberOfUnlocks: number) =>
  (Number(masteryExp) / (numberOfUnlocks * 500000)) * 100;
const calculateExpToMax = (masteryExp: string, unlockables: Unlockables) =>
  getNumberOfUnlockables(unlockables) * 500000 - Number(masteryExp);

const MasteryProgressBar: FC<Props> = ({
  numberOfUnlocks,
  maxMastery,
  itemMasteries,
  spa,
  unlockables,
}) => {
  const { calculatorState, calculatorDispatch } = useContext(CalculatorContext);
  const { currentExp, currentMasteryExp, playerMastery } = calculatorState;
  const onMasteryXpChange = (value: string) =>
    calculatorDispatch(setMasteryXp(value));
  const completion = calculateCompletion(currentMasteryExp, numberOfUnlocks);
  const expToTarget = calculateExpToMax(currentMasteryExp, unlockables);

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
        spa[index]
      ) + prev,
    0
  );
  const xps = spa.reduce(
    (prev, current, index) => masteryXpPerAction / 4 / spa[index] + prev,
    0
  );
  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);
  return (
    <Card>
      <Row>
        <p>Mastery pool XP</p>
        <NumberInputField
          value={calculatorState.currentMasteryExp}
          onValueChange={onMasteryXpChange}
          min={0}
          max={getNumberOfUnlockables(unlockables) * 500000}
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
