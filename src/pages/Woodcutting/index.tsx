import ExperienceCalculator from "components/Calculator/ExperienceCalculator";
import QualityPicker from "components/QualityPicker";
import { useState } from "react";
import { Option } from "react-dropdown";
import Row from "common/Row";
import TreeTypePicker, { xpPerTreeType } from "./TreeTypePicker";
import _ from "lodash";
import { Card } from "common/Card";
import styled from "styled-components";
import Checkbox from "components/Checkbox";

const Woodcutting: React.FC = () => {
  const [multitree, setMultitree] = useState<boolean>(false);
  const [speedIncrease, setspeedIncrease] = useState<number>(0);
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
      <LocalExtras>
        <Card>
          <h2>Woodcutting Extras</h2>
          <Row>
            <Checkbox
              label="Multi-tree"
              onChecked={() => setMultitree(!multitree)}
            />
          </Row>
          <Row>
            <p>Axe</p>
            <QualityPicker
              onChange={(option) =>
                setspeedIncrease(axeSpeeds[Number(option.value)])
              }
            />
          </Row>
        </Card>
        <Card>
          <h2>Tree type(s)</h2>
          <Row>
            <p>Tree</p>
            <TreeTypePicker
              speedIncrease={speedIncrease}
              onChange={(option) => setXpPerTree(0, option)}
            />
          </Row>
          {multitree && (
            <Row>
              <p>Tree 2</p>
              <TreeTypePicker
                speedIncrease={speedIncrease}
                onChange={(option) => setXpPerTree(1, option)}
              />
            </Row>
          )}
        </Card>
      </LocalExtras>
      <ExperienceCalculator
        xpa={xpPerTreeType[selectedTrees[0]]}
        xps={_.sum(xps)}
      />
    </>
  );
};

const LocalExtras = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > * {
    height: auto;
  }
`;

export default Woodcutting;

const axeSpeeds = [1, 1.05, 1.15, 1.2, 1.3, 1.35, 1.4, 1.5];
