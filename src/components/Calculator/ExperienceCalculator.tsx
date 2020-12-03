import React, { FC, useState } from "react";
import Row from "common/Row";
import styled from "styled-components";
import { Card } from "common/Card";
import Calculations from "./Calculations";
import CurrentInputField from "./CurrentInputField";
import NumberInputField from "components/NumberInputField";

type Props = {
  currentExp: string;
  onCurrentExpChange: (exp: string) => void;
  xpa?: number;
  xps: number;
};

const CalculatorCard = styled(Card)``;

const ExperienceCalculator: FC<Props> = ({
  xpa,
  xps,
  currentExp,
  onCurrentExpChange,
}) => {
  const [targetLvl, setTargetLvl] = useState<string>("99");
  const [useLvls, setUseLvls] = useState<boolean>(false);
  const onChangeTargetLvl = (value: string) => setTargetLvl(value);

  return (
    <CalculatorCard>
      <h2>Calculator</h2>
      <Row>
        <input
          type="checkbox"
          checked={useLvls}
          onChange={(event) => setUseLvls(event.currentTarget.checked)}
        />
        <p>Calculate with levels</p>
      </Row>
      <CurrentInputField
        useLvls={useLvls}
        currentExp={currentExp}
        onCurrentExpChange={onCurrentExpChange}
      />
      <Row>
        <p>Target level</p>
        <NumberInputField
          value={targetLvl}
          onValueChange={onChangeTargetLvl}
          max={99}
          min={2}
        />
      </Row>
      <Calculations
        currentExp={currentExp}
        targetLvl={targetLvl}
        xpa={xpa}
        xps={xps}
      />
    </CalculatorCard>
  );
};

export default ExperienceCalculator;
