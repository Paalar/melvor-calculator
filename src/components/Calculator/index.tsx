import { FC, useState } from "react";
import ExperienceCalculator from "./ExperienceCalculator";

type Props = {
  xpa?: number;
  xps: number;
};

const Calculator: FC<Props> = ({ xpa, xps }) => {
  const [currentExp, setCurrentExp] = useState<string>("0");
  const onChangeCurrentExp = (value: string) => setCurrentExp(value);
  return (
    <>
      <ExperienceCalculator
        xpa={xpa}
        xps={xps}
        currentExp={currentExp}
        onCurrentExpChange={onChangeCurrentExp}
      />
    </>
  );
};

export default Calculator;
