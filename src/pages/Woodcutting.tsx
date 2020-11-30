import Calculator from "components/Calculator"
import QualityPicker from "components/QualityPicker";
import { useState } from "react";
import ReactDropdown from "react-dropdown";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction:row;
    & > h2 {
        margin: 0;
    }
`;

const Card = styled.article`
    background-color: #4a5568;
    color: #f5f5f5;
    box-shadow: 0 1px 2px rgb(33 34 35/50%), 0 1px 2px rgb(26 26 27/50%);
    border-radius: .5rem;
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
        'top-left top-right'
        'bottom bottom';
`;

const Woodcutting: React.FC = () => {
    const [multi, setMulti] = useState<boolean>(false);
    return (
        <WoodcuttingPage>
            <Card>
                <h2>Extras</h2>
                <Row>
                    <input type="checkbox" onChange={() => setMulti(!multi)} />
                    <p>Multi-tree</p>
                </Row>
                <Row>
                    <p>Axe</p>
                    <QualityPicker />
                </Row>
            </Card>
            <Card>
                <h2>Tree type(s)</h2>
                <Row>
                    <p>Tree</p>
                    <TreeTypePicker />
                </Row>
                {multi && (<Row><p>Tree 2</p><TreeTypePicker /></Row>)}
            </Card>
            <CalculatorCard>
                <h2>Calculator</h2>
                <Calculator />
            </CalculatorCard>
        </WoodcuttingPage>
    );
}

export default Woodcutting;

const treeTypes = {
    Normal: 10,
    Oak: 15,
    Willow: 22,
    Teak: 30,
    Maple: 40,
    Mahogany: 60,
    Yew: 80,
    Magic: 100,
}

const TreeTypePicker: React.FC = () => <ReactDropdown options={Object.keys(treeTypes)} />;
