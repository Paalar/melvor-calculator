import Card from "common/Card";
import Row from "common/Row";
import Calculator from "components/Calculator";
import QualityPicker from "components/QualityPicker";
import { FC, useContext, useEffect, useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import { CalculatorContext } from "state/Calculator/Context";
import {
  OreNames,
  xpPerOre,
  respawnPerOre,
  pickaxeTimes,
  unlockables,
} from "./data";

const potionSpeeds = [1, 1.1, 1.2, 1.4, 1.8];

const Mining: FC = () => {
  const {
    calculatorState: { itemMastery, masteryPool },
  } = useContext(CalculatorContext);

  const [potionLevel, setPotionLevel] = useState<number>(1);
  const [timeReduction, setTimeReduction] = useState(1);
  const [ore, setOre] = useState<OreNames>("Tin");
  const [xps, setXps] = useState(0);

  useEffect(() => {
    setXps(
      calculateXPperSecond(
        ore,
        3 * timeReduction,
        Number(itemMastery[0]),
        potionLevel,
        Number(masteryPool)
      )
    );
  }, [potionLevel, timeReduction, ore, itemMastery, masteryPool]);

  return (
    <>
      <Card>
        <h2>Extras</h2>
        <Row>
          <p>Potion Level</p>
          <ReactDropdown
            options={["0", "1", "2", "3", "4"]}
            onChange={(opt: Option) =>
              setPotionLevel(potionSpeeds[Number(opt.value)])
            }
          />
        </Row>
        <Row>
          <p>Pickaxe</p>
          <QualityPicker
            onChange={(option: Option) =>
              setTimeReduction(pickaxeTimes[Number(option.value)])
            }
          />
        </Row>
      </Card>
      <Card>
        <h2>Ore Type</h2>
        <Row>
          <p>Ore</p>
          <ReactDropdown
            options={Object.keys(xpPerOre)}
            onChange={(option: Option) => setOre(option.value as OreNames)}
          />
        </Row>
      </Card>
      <Calculator
        xps={xps}
        maxMastery={1089}
        items={[{ spa: 3 * timeReduction, name: ore }]}
        unlockables={unlockables}
      />
    </>
  );
};

const calculateXPperSecond = (
  oreType: OreNames,
  miningTime: number,
  oreMasteryLevel: number,
  potion: number,
  masteryLevel: number
) => {
  const mastery50 = Number(masteryLevel) >= 2750000 ? 0.2 : 0;
  const mastery25 = Number(masteryLevel) >= 1375000 ? 0.9 : 1;
  const xpsGivenInfiniteMining = xpPerOre[oreType] / (miningTime - mastery50);
  const oreHealth = oreMasteryLevel + 5;
  const respawnTime = respawnPerOre[oreType];
  const percentOfTimeActuallyMining =
    (oreHealth * potion) / (respawnTime * mastery25 + oreHealth * potion);
  return xpsGivenInfiniteMining * percentOfTimeActuallyMining;
};

export default Mining;
