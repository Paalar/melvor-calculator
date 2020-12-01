import ExperienceCalculator from "components/Calculator/ExperienceCalculator";
import QualityPicker from "components/QualityPicker";
import { useState } from "react";
import { Option } from "react-dropdown";
import styled from "styled-components";
import Row from "common/Row";
import TreeTypePicker, { xpPerTreeType } from "./TreeTypePicker";
import _ from "lodash";

const Card = styled.article`
  background-color: #4a5568;
  color: #f5f5f5;
  box-shadow: 0 1px 2px rgb(33 34 35/50%), 0 1px 2px rgb(26 26 27/50%);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.25rem;

  & > h2 {
    margin: 0;
  }
`;

const CalculatorCard = styled(Card)`
  grid-area: bottom;
`;

const WoodcuttingPage = styled.div`
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom bottom";
`;

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
    <WoodcuttingPage>
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
      <CalculatorCard>
        <h2>Calculator</h2>
        <ExperienceCalculator
          xpa={xpPerTreeType[selectedTrees[0]]}
          xps={_.sum(xps)}
        />
      </CalculatorCard>
    </WoodcuttingPage>
  );
};

export default Woodcutting;

const axeSpeeds = [0, 5, 15, 20, 30, 35, 40, 50];
