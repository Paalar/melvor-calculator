import { useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import AbstractAction from "../classes/Action";

interface Props {
    actions: AbstractAction[];
    onChange: (action: AbstractAction) => void;
}

const ActionPicker: React.FC<Props> = ({ actions, onChange }) => {
    const [selected, setSelected] = useState<string>("Pick an option");
    const actionNames = actions.map(action => action.name);
    const selectAction = (name: string) => actions.find(action => action.name === name);

    const select = (option: Option) => {
        setSelected(option.value);
        const selectedAction = selectAction(option.value);
        if (!selectedAction) throw new Error("Could not find selected option")
        else onChange(selectedAction);
    }
    return <ReactDropdown options={actionNames} value={selected} onChange={select} />
}

export default ActionPicker;
