import { FC, useContext, useEffect, useState } from "react";
import Row from "common/Row";
import styled from "styled-components";
import { Card } from "common/Card";
import Calculations from "./Calculations";
import CurrentInputField from "./CurrentInputField";
import NumberInputField from "components/NumberInputField";
import Checkbox from "components/Checkbox";
import { CalculatorContext } from "state/Calculator/Context";
import { setSecondsToTarget, setXp } from "state/Calculator/actions";
import { experienceDifference } from "calculations/experience";
import { calculateSecondsToTargetLvl } from "calculations/common";

type Props = {
  xps: number;
};

const CalculatorCard = styled(Card)``;

const ExperienceCalculator: FC<Props> = ({ xps, children }) => {
  const { calculatorDispatch, calculatorState } = useContext(CalculatorContext);
  const { currentExp } = calculatorState;
  const [targetLvl, setTargetLvl] = useState<string>("99");
  const [useLvls, setUseLvls] = useState<boolean>(false);

  const expToTarget = experienceDifference(
    Number(currentExp),
    Number(targetLvl) - 1
  );

  const secondsToTarget = calculateSecondsToTargetLvl(expToTarget, xps);
  useEffect(() => {
    calculatorDispatch(setSecondsToTarget(secondsToTarget));
  }, [secondsToTarget, calculatorDispatch]);

  return (
    <CalculatorCard>
      <h2>Experience Calculator</h2>
      <Row>
        <Checkbox
          label="Calculate with levels"
          onChecked={(checked) => setUseLvls(checked)}
        />
      </Row>
      <CurrentInputField
        useLvls={useLvls}
        currentExp={calculatorState.currentExp}
        onCurrentExpChange={(value) => calculatorDispatch(setXp(value))}
      />
      <Row>
        <p>Target level</p>
        <NumberInputField
          value={targetLvl}
          onValueChange={(value) => setTargetLvl(value)}
          max={99}
          min={2}
        />
      </Row>
      <Calculations
        targetLvl={targetLvl}
        secondsToTarget={secondsToTarget}
        expToTarget={expToTarget}
      />
      {children}
    </CalculatorCard>
  );
};

export default ExperienceCalculator;
