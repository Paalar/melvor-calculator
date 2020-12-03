import experienceTable, { getCurrentLvlByXp } from "data/experienceTable";
import { FC, useEffect, useState } from "react";
import ExperienceCalculator from "./ExperienceCalculator";
import MasteryCalculator from "./MasteryCalculator";

type Props = {
  xpa?: number;
  xps: number;
  maxMastery: number;
};

const Calculator: FC<Props> = ({ xpa, xps, maxMastery }) => {
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
  }, [currentExp, currentLvl]);
  return (
    <>
      <ExperienceCalculator
        xpa={xpa}
        xps={xps}
        currentExp={currentExp}
        onCurrentExpChange={onChangeCurrentExp}
      />
      <MasteryCalculator lvl={currentLvl} maxMastery={maxMastery} spa={5.72} />
    </>
  );
};

export default Calculator;
