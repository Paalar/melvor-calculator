import Card from "common/Card";
import Calculator from "components/Calculator";
import React, { FC, useContext, useEffect, useState } from "react";
import { CalculatorContext } from "state/Calculator/Context";
import AbstractAction from "./classes/Action";
import { Tool } from "./classes/types";
import ActionPicker from "./components/ActionPicker";
import ToolPicker from "./components/ToolPicker";
import Mining from "./skills/mining";

interface Props {
    pageName: string;
}

const skills = [Mining];

const skillSelector = (name: string) => skills.find(skill => skill);

const GenericPage: FC<Props> = ({ pageName }) => {
    const skill = skillSelector("Mining");
    const { calculatorState: { itemMastery } } = useContext(CalculatorContext);
    const [action, setAction] = useState<AbstractAction | null>(skill ? skill.actions[0] : null);
    const [tool, setTool] = useState<Tool | null>(skill ? skill.tools[0] : null);

    useEffect(() => {
        if (action) {
            action.mastery = Number(itemMastery[0]);
        }
        // Don't want to trigger on action, because if the action changes, the mastery should be set for that new action.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemMastery])

    if (!skill || !action || !tool) {
        return (<Card title="TBA"><h2>TBA</h2></Card>);
    }

    return (
        <>
            <Card title="Tool">
                <ToolPicker tools={skill.tools} onChange={setTool} initial={tool} />
            </Card>
            <Card title="Action">
                <ActionPicker actions={skill.actions} onChange={setAction} initial={action} />
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
