import { useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import styled from "styled-components";
import ExperienceCalculator from "components/Calculator/ExperienceCalculator"
import QualityPicker from "components/QualityPicker";
import Row from "common/Row";

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
    const [multitree, setMultitree] = useState<boolean>(false);
    const [speedReduction, setSpeedReduction] = useState<number>(0);


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
                    <QualityPicker onChange={(option) => setSpeedReduction(axeSpeeds[Number(option.value)])} />
                </Row>
            </Card>
            <Card>
                <h2>Tree type(s)</h2>
                <Row>
                    <p>Tree</p>
                    <TreeTypePicker speedReduction={speedReduction} />
                </Row>
                {multitree && (<Row><p>Tree 2</p><TreeTypePicker speedReduction={speedReduction} /></Row>)}
            </Card>
            <CalculatorCard>
                <h2>Calculator</h2>
                <ExperienceCalculator xpa={xpPerTreeType.Magic} xps={21} />
            </CalculatorCard>
        </WoodcuttingPage>
    );
}

export default Woodcutting;

const axeSpeeds = [5, 15, 20, 30, 35, 40, 50];

const xpPerTreeType = {
    Normal: 10,
    Oak: 15,
    Willow: 22,
    Teak: 30,
    Maple: 40,
    Mahogany: 60,
    Yew: 80,
    Magic: 100,
    Redwood: 180
}

const cutTimePerTreeType = {
    Normal: 3,
    Oak: 4,
    Willow: 5,
    Teak: 6,
    Maple: 8,
    Mahogany: 10,
    Yew: 12,
    Magic: 20,
    Redwood: 15
}


const TreeTypePicker: React.FC<{ speedReduction: number }> = ({ speedReduction }) => {

    const getXpsPerTree = (treeName: keyof typeof xpPerTreeType) => xpPerTreeType[treeName] / (cutTimePerTreeType[treeName] * speedReduction)
    const treeTypesAsDropdownOptions: Option[] = Object.keys(xpPerTreeType).map(key => ({ value: getXpsPerTree((key as keyof typeof xpPerTreeType)).toString(), label: key }));

    return (
        <>
            <ReactDropdown options={treeTypesAsDropdownOptions} />
        </>
    )
};
