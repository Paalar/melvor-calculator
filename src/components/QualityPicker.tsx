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

const qualityStrings = Object.keys(QualitiesEnum).filter((key) =>
  Number.isNaN(Number(key))
);
const qualityOptions: Option[] = (qualityStrings as (keyof typeof QualitiesEnum)[]).map(
  (quality) => ({ value: QualitiesEnum[quality].toString(), label: quality })
);

interface Props {
  onChange: (chosenQuality: Option) => void;
}
const QualityPicker: React.FC<Props> = ({ onChange }) => (
  <ReactDropdown options={qualityOptions} onChange={onChange} />
);

export default QualityPicker;
