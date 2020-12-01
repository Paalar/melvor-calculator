import ExperienceCalculator from "components/Calculator/ExperienceCalculator";
import QualityPicker from "components/QualityPicker";
import { useState } from "react";
import { Option } from "react-dropdown";
import Row from "common/Row";
import TreeTypePicker, { xpPerTreeType } from "./TreeTypePicker";
import _ from "lodash";
import { Card } from "common/Card";



const Woodcutting: React.FC = () => {
  const [multitree, setMultitree] = useState<boolean>(false);
  const [speedReduction, setSpeedReduction] = useState<number>(0);
  const [xps, setXps] = useState<number[]>([]);
  const [selectedTrees, setSelectedTrees] = useState<
    (keyof typeof xpPerTreeType)[] | []
  >([]);

  const setXpPerTree = (treeNumber: number, option: Option) => {
    const oldXps = [...xps];
    oldXps[treeNumber] = Number(option.value);
    setXps(oldXps);
    const prevTrees = [...selectedTrees];
    prevTrees[treeNumber] = option.label
      ? (option.label.toString() as keyof typeof xpPerTreeType)
      : "Normal";
    setSelectedTrees(prevTrees);
  };

  return (
    <>
      <Card>
        <h2>Extras</h2>
        <Row>
          <input type="checkbox" onChange={() => setMultitree(!multitree)} />
          <p>Multi-tree</p>
        </Row>
        <Row>
          <p>Axe</p>
          <QualityPicker
            onChange={(option) =>
              setSpeedReduction(axeSpeeds[Number(option.value)])
            }
          />
        </Row>
      </Card>
      <Card>
        <h2>Tree type(s)</h2>
        <Row>
          <p>Tree</p>
          <TreeTypePicker
            speedReduction={speedReduction}
            onChange={(option) => setXpPerTree(0, option)}
          />
        </Row>
        {multitree && (
          <Row>
            <p>Tree 2</p>
            <TreeTypePicker
              speedReduction={speedReduction}
              onChange={(option) => setXpPerTree(1, option)}
            />
          </Row>
        )}
      </Card>
      <ExperienceCalculator
        xpa={xpPerTreeType[selectedTrees[0]]}
        xps={_.sum(xps)}
      />
    </>
  );
};

export default Woodcutting;

const axeSpeeds = [0, 5, 15, 20, 30, 35, 40, 50];
