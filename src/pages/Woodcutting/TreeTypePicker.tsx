import ReactDropdown, { Option } from "react-dropdown";
import styled from "styled-components";
import { TreeName, xpPerTreeType } from "./data";

interface TreePickerProps {
  onChange: (option: Option) => void;
  excludeTree: TreeName;
}

const TreeTypePicker: React.FC<TreePickerProps> = ({
  onChange,
  excludeTree,
}) => {
  const treeTypeDropdownOptions: Option[] = Object.keys(xpPerTreeType)
    .filter((treeName) => treeName !== excludeTree)
    .map((key) => ({
      value: key.toString(),
      label: key,
    }));

  return (
    <ReactDropdown options={treeTypeDropdownOptions} onChange={onChange} />
  );
};

export default TreeTypePicker;
