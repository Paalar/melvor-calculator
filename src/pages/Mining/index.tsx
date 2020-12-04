import Card from "common/Card";
import Row from "common/Row";
import Calculator from "components/Calculator";
import QualityPicker from "components/QualityPicker";
import { FC, useEffect, useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import { OreNames, xpPerOre, respawnPerOre, pickaxeTimes } from "./data";

const potionSpeeds = [1, 1.1, 1.2, 1.4, 1.8];

const Mining: FC = () => {
    const [potionLevel, setPotionLevel] = useState<number>(1);
    const [timeReduction, setTimeReduction] = useState(1);
    const [ore, setOre] = useState<OreNames>("Tin");
    const [xps, setXps] = useState(0);

    useEffect(() => {
        setXps(calculateXPperSecond(ore, 3 * timeReduction, 1, potionLevel));
    }, [potionLevel, timeReduction, ore]);

    return (
        <>
            <Card>
                <h2>Extras</h2>
                <Row>
                    <p>Potion Level</p>
                    <ReactDropdown options={["0", "1", "2", "3", "4"]} onChange={(opt: Option) => setPotionLevel(potionSpeeds[Number(opt.value) - 1])} />
                </Row>
                <Row>
                    <p>Pickaxe</p>
                    <QualityPicker onChange={(option: Option) => setTimeReduction(pickaxeTimes[Number(option.value)])} />
                </Row>
            </Card>
            <Card>
                <h2>Ore Type</h2>
                <Row>
                    <p>Ore</p>
                    <ReactDropdown options={Object.keys(xpPerOre)} onChange={(option: Option) => setOre(option.value as OreNames)} />
                </Row>
            </Card>
            <Calculator xps={xps} />
        </>
    );
}

const calculateXPperSecond = (oreType: OreNames, miningTime: number, oreMasteryLevel: number, potion: number) => {
    const xpsGivenInfiniteMining = (xpPerOre[oreType] / miningTime);
    const oreHealth = oreMasteryLevel + 5;
    const respawnTime = respawnPerOre[oreType];
    const percentOfTimeActuallyMining = (oreHealth * potion) / (respawnTime + oreHealth * potion);
    return xpsGivenInfiniteMining * percentOfTimeActuallyMining;
}

// xpsGivenInfiniteMining = (xpPerOre / miningTime)
// percentOfTimeActuallyMining = ((oreMastery + 5) * potionBoost) / (respawnPerOre + ((oreMastery + 5) * potionBoost))
// realXps = xpsGivenInfiniteMining * percentOfTimeActuallyMining

export default Mining;

