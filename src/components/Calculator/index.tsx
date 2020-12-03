import experienceTable, { getCurrentLvlByXp } from "data/experienceTable";
import { FC, useEffect, useState } from "react";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";

type Props = {
  xpa?: number;
  xps: number;
  maxMastery: number;
  items: { name: string; spa: number }[];
};

const Calculator: FC<Props> = ({ xpa, xps, maxMastery, items }) => {
  const [currentExp, setCurrentExp] = useState<string>("0");
  const [currentLvl, setCurrentLvl] = useState<number>(Number(currentExp));
  const onChangeCurrentExp = (value: string) => setCurrentExp(value);

  useEffect(() => {
    if (Number(currentExp) < 0) setCurrentExp("0");
    if (Number(currentExp) > experienceTable[98])
      setCurrentExp(experienceTable[98].toString());
    if (currentExp.length && !Number.isNaN(Number(currentExp))) {
      setCurrentLvl(getCurrentLvlByXp(Number(currentExp)));
    }
  }, [currentExp]);
  return (
    <>
      <ExperienceCalculator
        xpa={xpa}
        xps={xps}
        currentExp={currentExp}
        onCurrentExpChange={onChangeCurrentExp}
      />
      {items.map((i) => (
        <MasteryCalculator
          lvl={currentLvl}
          maxMastery={maxMastery}
          spa={i.spa}
          name={i.name}
        />
      ))}
    </>
  );
};

export default Calculator;
