import Card from "common/Card";
import Calculator from "components/Calculator";
import React, { FC, useState } from "react";
import AbstractAction from "./classes/Action";
import ActionPicker from "./components/ActionPicker";
import Mining from "./skills/mining";

interface Props {
    pageName: string;
}

const skills = [Mining];

const skillSelector = (name: string) => skills.find(skill => skill);

const GenericPage: FC<Props> = ({ pageName }) => {
    const skill = skillSelector("Mining");
    const [action, setAction] = useState<AbstractAction>(skill!.actions[0]);
    if (!skill) {
        return (<Card title="TBA"><h2>TBA</h2></Card>);
    }


    return (
        <>
            <Card title="Action">
                <ActionPicker actions={skill.actions} onChange={setAction} />
            </Card>
            <Calculator
                xps={action.getXPS()}
                maxMastery={skill.maxMastery}
                unlockables={skill.unlockables}
                items={[{ name: action.name, spa: action.getTime() }]}
            />
        </>
    );
};

export default GenericPage;
