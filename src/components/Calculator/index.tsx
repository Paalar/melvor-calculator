import { FC, useContext } from "react";
import { getNumberOfUnlockables, Unlockables } from "data/experienceTable";
import { setItemMastery } from "state/Calculator/actions";
import { CalculatorContext } from "state/Calculator/Context";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";
import MasteryProgressBar from "./MasteryProgressBar";

type Props = {
  xpa?: number;
  xps: number;
  maxMastery: number;
  items: { name: string; spa: number }[];
  unlockables: Unlockables;
};

const Calculator: FC<Props> = ({
  xpa,
  xps,
  maxMastery,
  items,
  unlockables,
}) => {
  const { calculatorDispatch, calculatorState } = useContext(CalculatorContext);
  const setMastery = (index: number, mastery: string) => {
    const newMastery = [...calculatorState.itemMastery];
    newMastery[index] = mastery;
    calculatorDispatch(setItemMastery(newMastery));
  };
  return (
    <>
      <ExperienceCalculator xpa={xpa} xps={xps} />
      {items.length ? (
        <MasteryProgressBar
          numberOfUnlocks={getNumberOfUnlockables(unlockables)}
          spa={items.map((item) => item.spa)}
          itemMasteries={calculatorState.itemMastery}
          maxMastery={maxMastery}
          unlockables={unlockables}
        />
      ) : null}
      {items.map((item, index) => (
        <MasteryCalculator
          key={item.name}
          maxMastery={maxMastery}
          item={item}
          setItemMastery={(mastery) => setMastery(index, mastery)}
          itemMastery={calculatorState.itemMastery[index]}
        />
      ))}
    </>
  );
};

export default Calculator;
