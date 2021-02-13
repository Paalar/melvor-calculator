import { useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";

export enum QualitiesEnum {
  Default,
  Iron,
  Steel,
  Black,
  Mithril,
  Adamant,
  Rune,
  Dragon,
}

export const qualityStrings = Object.keys(QualitiesEnum).filter((key) =>
  Number.isNaN(Number(key))
);
const qualityOptions: Option[] = (qualityStrings as (keyof typeof QualitiesEnum)[]).map(
  (quality) => ({ value: QualitiesEnum[quality].toString(), label: quality })
);

interface Props {
  onChange: (chosenQuality: Option) => void;
}
const QualityPicker: React.FC<Props> = ({ onChange }) => {
  const [selected, setSelected] = useState(QualitiesEnum.Default);
  const onSelectChange = (option: Option) => {
    setSelected(option.label as QualitiesEnum);
    onChange(option);
  };
  return (
    <ReactDropdown
      value={selected.toString()}
      options={qualityOptions}
      onChange={onSelectChange}
    />
  );
};

export default QualityPicker;
