import { FC, useState } from "react";
import NumberInputField from "components/NumberInputField";
import Row from "common/Row";
import experienceTable from "calculations/experience";

type Props = {
  useLvls: boolean;
  currentExp: string;
  onCurrentExpChange: (exp: string) => void;
};

const CurrentInputField: FC<Props> = ({
  useLvls,
  currentExp,
  onCurrentExpChange,
}) => {
  const [currentLvl, setCurrentLvl] = useState<string>("1");
  if (useLvls) {
    const onCurrentLvLChange = (lvl: string) => {
      const numberLvl = Number(lvl);
      setCurrentLvl(lvl);
      if (lvl.length)
        onCurrentExpChange(experienceTable[numberLvl - 1].toString());
    };
    return (
      <Row>
        <p>Current level</p>
        <NumberInputField
          value={currentLvl}
          onValueChange={onCurrentLvLChange}
          max={99}
          min={1}
        />
      </Row>
    );
  }
  return (
    <Row>
      <p>Current experience</p>
      <NumberInputField
        value={currentExp}
        onValueChange={onCurrentExpChange}
        min={0}
      />
    </Row>
  );
};

export default CurrentInputField;
