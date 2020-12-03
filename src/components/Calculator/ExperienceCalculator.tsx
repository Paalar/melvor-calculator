import React, { FC, useContext, useState } from "react";
import Row from "common/Row";
import styled from "styled-components";
import { Card } from "common/Card";
import Calculations from "./Calculations";
import CurrentInputField from "./CurrentInputField";
import NumberInputField from "components/NumberInputField";
import Checkbox from "components/Checkbox";
import { CalculatorContext, setXp } from "./Context";

type Props = {
  currentExp: string;
  xpa?: number;
  xps: number;
};

const CalculatorCard = styled(Card)``;

const ExperienceCalculator: FC<Props> = ({ xpa, xps, currentExp }) => {
  const { calculatorDispatch } = useContext(CalculatorContext);
  const [targetLvl, setTargetLvl] = useState<string>("99");
  const [useLvls, setUseLvls] = useState<boolean>(false);

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
        currentExp={currentExp}
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
      <Calculations targetLvl={targetLvl} xpa={xpa} xps={xps} />
    </CalculatorCard>
  );
};

export default ExperienceCalculator;
