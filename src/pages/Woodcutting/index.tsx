import QualityPicker from "components/QualityPicker";
import { useEffect, useState } from "react";
import { Option } from "react-dropdown";
import Row from "common/Row";
import TreeTypePicker from "./TreeTypePicker";
import _ from "lodash";
import { Card } from "common/Card";
import Calculator from "components/Calculator";
import { axeCutTimes, getXpsPerTree, TreeName } from "./data";

const Woodcutting: React.FC = () => {
  const [multitree, setMultitree] = useState<boolean>(false);
  const [timeReduction, setTimeReduction] = useState<number>(axeCutTimes[0]);
  const [xpa, setXpa] = useState<TreeName[]>([]);
  const [xps, setXps] = useState<number[]>([]);
  const [selectedTrees, setSelectedTrees] = useState<TreeName[]>([]);

  const setXpPerTree = (treeIndex: number, option: Option) => {
    const oldXpa = [...xpa];
    oldXpa[treeIndex] = option.value as TreeName;
    setXpa(oldXpa);
    setSelectedTrees([...selectedTrees]);
  };

  const onCheck = () => {
    setMultitree(!multitree);
    if (xpa.length > 1) xpa.pop();
  };

  useEffect(() => {
    const xps1 = getXpsPerTree(xpa[0], timeReduction);
    const xps2 = xpa[1] ? getXpsPerTree(xpa[1], timeReduction) : 0;
    setXps([xps1, xps2]);
  }, [xpa, timeReduction]);

  return (
    <>
      <Card>
        <h2>Extras</h2>
        <Row>
          <input type="checkbox" onChange={onCheck} />
          <p>Multi-tree</p>
        </Row>
        <Row>
          <p>Axe</p>
          <QualityPicker
            onChange={(option) =>
              setTimeReduction(axeCutTimes[Number(option.value)])
            }
          />
        </Row>
      </Card>
      <Card>
        <h2>Tree type(s)</h2>
        <Row>
          <p>Tree</p>
          <TreeTypePicker
            onChange={(option) => setXpPerTree(0, option)}
            excludeTree={xpa[1]}
          />
        </Row>
        {multitree && (
          <Row>
            <p>Tree 2</p>
            <TreeTypePicker
              onChange={(option) => setXpPerTree(1, option)}
              excludeTree={xpa[0]}
            />
          </Row>
        )}
      </Card>
      <Calculator xps={_.sum(xps)} />
    </>
  );
};

export default Woodcutting;
