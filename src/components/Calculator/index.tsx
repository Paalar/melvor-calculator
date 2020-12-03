import { FC, useContext } from "react";
import { setItemMastery } from "state/Calculator/actions";
import { CalculatorContext } from "state/Calculator/Context";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";

type Props = {
  xpa?: number;
  xps: number;
  maxMastery: number;
  items: { name: string; spa: number }[];
};

const Calculator: FC<Props> = ({ xpa, xps, maxMastery, items }) => {
  const { calculatorDispatch, calculatorState } = useContext(CalculatorContext);
  const setMastery = (index: number, mastery: string) => {
    const newMastery = [...calculatorState.itemMastery];
    newMastery[index] = mastery;
    calculatorDispatch(setItemMastery(newMastery));
  };
  return (
    <>
      <ExperienceCalculator xpa={xpa} xps={xps} />
      {items.map((item, index) => (
        <MasteryCalculator
          key={item.name}
          maxMastery={maxMastery}
          spa={item.spa}
          name={item.name}
          setItemMastery={(mastery) => setMastery(index, mastery)}
          itemMastery={calculatorState.itemMastery[index]}
        />
      ))}
    </>
  );
};

export default Calculator;
