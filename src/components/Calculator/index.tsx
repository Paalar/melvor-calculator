import { FC, useContext } from "react";
import { CalculatorContext } from "./Context";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";

type Props = {
  xpa?: number;
  xps: number;
  maxMastery: number;
  items: { name: string; spa: number }[];
};

const Calculator: FC<Props> = ({ xpa, xps, maxMastery, items }) => {
  const { calculatorState } = useContext(CalculatorContext);
  const { currentExp } = calculatorState;
  return (
    <>
      <ExperienceCalculator xpa={xpa} xps={xps} currentExp={currentExp} />
      {items.map((i) => (
        <MasteryCalculator maxMastery={maxMastery} spa={i.spa} name={i.name} />
      ))}
    </>
  );
};

export default Calculator;
