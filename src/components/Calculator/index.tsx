import { getNumberOfUnlockables } from "calculations/mastery";
import { Unlockables } from "pages/Woodcutting/data";
import { FC, useContext } from "react";
import { setItemMastery } from "state/Calculator/actions";
import { CalculatorContext } from "state/Calculator/Context";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";
import MasteryProgressBar from "./MasteryProgressBar";

type Props = {
  xps: number;
  maxMastery: number;
  items: { name: string; spa: number }[];
  unlockables: Unlockables;
};

const Calculator: FC<Props> = ({
  maxMastery,
  items,
  unlockables,
  xps,
  children,
}) => {
  const { calculatorDispatch, calculatorState } = useContext(CalculatorContext);
  const setMastery = (index: number, mastery: string) => {
    const newMastery = [...calculatorState.itemMastery];
    newMastery[index] = mastery;
    calculatorDispatch(setItemMastery(newMastery));
  };
  const maxMasteryPool = getNumberOfUnlockables(unlockables) * 500000;
  return (
    <>
      <ExperienceCalculator xps={xps}>{children}</ExperienceCalculator>
      {items.length ? (
        <MasteryProgressBar
          spa={items.map((item) => item.spa)}
          itemMasteries={calculatorState.itemMastery}
          maxMastery={maxMastery}
          unlockables={unlockables}
          maxMasteryPool={maxMasteryPool}
        />
      ) : null}
      {items.map((item, index) => (
        <MasteryCalculator
          key={item.name}
          maxMasteryPool={maxMasteryPool}
          unlockables={unlockables}
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
