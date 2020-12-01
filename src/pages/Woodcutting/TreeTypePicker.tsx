import ReactDropdown, { Option } from "react-dropdown";

export const xpPerTreeType = {
  Normal: 10,
  Oak: 15,
  Willow: 22,
  Teak: 30,
  Maple: 40,
  Mahogany: 60,
  Yew: 80,
  Magic: 100,
  Redwood: 180,
};

const cutTimePerTreeType = {
  Normal: 3,
  Oak: 4,
  Willow: 5,
  Teak: 6,
  Maple: 8,
  Mahogany: 10,
  Yew: 12,
  Magic: 20,
  Redwood: 15,
};

interface TreePickerProps {
  speedReduction: number;
  onChange: (option: Option) => void;
}
const TreeTypePicker: React.FC<TreePickerProps> = ({
  speedReduction,
  onChange,
}) => {
  const getXpsPerTree = (treeName: keyof typeof xpPerTreeType) =>
    xpPerTreeType[treeName] /
    (cutTimePerTreeType[treeName] * (100 / (100 - speedReduction)));
  const treeTypesAsDropdownOptions: Option[] = Object.keys(xpPerTreeType).map(
    (key) => ({
      value: getXpsPerTree(key as keyof typeof xpPerTreeType).toString(),
      label: key,
    })
  );

  return (
    <>
      <ReactDropdown options={treeTypesAsDropdownOptions} onChange={onChange} />
    </>
  );
};

export default TreeTypePicker;
