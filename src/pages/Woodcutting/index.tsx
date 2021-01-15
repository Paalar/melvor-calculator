import QualityPicker from "components/QualityPicker";
import { FC, useContext, useEffect, useState } from "react";
import { Option } from "react-dropdown";
import Row from "common/Row";
import TreeTypePicker from "./TreeTypePicker";
import _ from "lodash";
import Card from "common/Card";
import styled from "styled-components";
import Checkbox from "components/Checkbox";
import Calculator from "components/Calculator";
import {
  axeCutTimes,
  extraMasteryOfNature,
  extraSkillCape,
  getSecondsPerTree,
  getXpsPerTree,
  maxMastery,
  TreeName,
  unlockables,
} from "./data";
import { CalculatorContext } from "state/Calculator/Context";
import { Extra, removeExtra } from "data/extras";

const Woodcutting: FC = () => {
  const { calculatorState } = useContext(CalculatorContext);
  const { itemMastery, secondsToTarget } = calculatorState;
  const [speedExtras, setSpeedExtras] = useState<Extra[]>([]);
  const [multiTree, setMultiTree] = useState<boolean>(false);
  const [timeReduction, setTimeReduction] = useState<number>(axeCutTimes[0]);
  const [trees, setTrees] = useState<TreeName[]>([]);
  const [xps, setXps] = useState<number[]>([]);
  const [spa, setSpa] = useState<number[]>([]);

  const setTree = (treeIndex: number, option: Option) => {
    const oldTrees = [...trees];
    oldTrees[treeIndex] = option.value as TreeName;
    setTrees(oldTrees);
  };

  const onCheck = () => {
    setMultiTree(!multiTree);
    if (trees.length > 1) trees.pop();
  };

  const onCheckedExtra = (extra: Extra) => (checked: boolean) => {
    if (checked) setSpeedExtras([...speedExtras, extra]);
    else setSpeedExtras(removeExtra(speedExtras, extra));
  };

  useEffect(() => {
    const calculateSeconds = (index: number) =>
      getSecondsPerTree(
        trees[index],
        timeReduction,
        itemMastery[index],
        speedExtras
      );
    const secPerTree1 = calculateSeconds(0);
    const secPerTree2 = calculateSeconds(1);
    const xps1 = getXpsPerTree(trees[0], secPerTree1);
    const xps2 = trees[1] ? getXpsPerTree(trees[1], secPerTree2) : 0;
    setXps([xps1, xps2]);
    setSpa([secPerTree1, secPerTree2]);
  }, [trees, timeReduction, speedExtras, itemMastery]);

  return (
    <>
      <LocalExtras>
        <Card>
          <h2>Woodcutting Extras</h2>
          <Row>
            <Checkbox label="Multi-tree" onChecked={onCheck} />
          </Row>
          <Row>
            <Checkbox
              label="Woodcutting skillcape"
              onChecked={onCheckedExtra(extraSkillCape)}
            />
          </Row>
          <Row>
            <Checkbox
              label="Master of Nature"
              onChecked={onCheckedExtra(extraMasteryOfNature)}
            />
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
              onChange={(option) => setTree(0, option)}
              excludeTree={trees[1]}
            />
          </Row>
          {multiTree && (
            <Row>
              <p>Tree 2</p>
              <TreeTypePicker
                onChange={(option) => setTree(1, option)}
                excludeTree={trees[0]}
              />
            </Row>
          )}
        </Card>
      </LocalExtras>
      <Calculator
        xps={_.sum(xps)}
        maxMastery={maxMastery}
        items={trees.map((value, index) => ({
          name: value,
          spa: spa[index],
        }))}
        unlockables={unlockables}
      >
        <AcquiredLogs
          trees={trees}
          spa={spa}
          secondsToTarget={secondsToTarget}
          multiTree={multiTree}
        />
      </Calculator>
    </>
  );
};

type AcquiredLogsProps = {
  trees: TreeName[];
  spa: number[];
  secondsToTarget: number;
  multiTree: boolean;
};

const AcquiredLogs: FC<AcquiredLogsProps> = ({
  trees,
  spa,
  secondsToTarget,
  multiTree,
}) =>
  Number.isNaN(secondsToTarget) ? null : (
    <Row>
      <p>
        {trees[0]} logs cut when target reached:{" "}
        {Math.ceil(secondsToTarget / spa[0])}
      </p>
      {multiTree ? (
        <p>
          {trees[1]} logs cut when target reached:{" "}
          {Math.ceil(secondsToTarget / spa[1])}
        </p>
      ) : null}
    </Row>
  );

const LocalExtras = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > * {
    height: auto;
  }
`;

export default Woodcutting;
