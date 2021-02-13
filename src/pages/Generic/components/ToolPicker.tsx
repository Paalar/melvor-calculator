import { useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import { Tool } from "../classes/types";

interface Props {
    tools: Tool[];
    onChange: (tool: Tool) => void;
    initial?: Tool;
}

const ToolPicker: React.FC<Props> = ({ tools, onChange, initial }) => {
    const [selected, setSelected] = useState<string>(initial?.name || "Pick an option");
    const toolNames = tools.map(tool => tool.name);
    const selectTool = (name: string) => tools.find(tool => tool.name === name);

    const select = (option: Option) => {
        setSelected(option.value);
        const selectedTool = selectTool(option.value);
        if (!selectedTool) throw new Error("Could not find selected option")
        else onChange(selectedTool);
    }
    return <ReactDropdown options={toolNames} value={selected} onChange={select} />
}

export default ToolPicker;
