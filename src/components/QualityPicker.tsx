import ReactDropdown from "react-dropdown";

export enum QualitiesEnum {
    Bronze,
    Iron,
    Steel,
    Black,
    Mithril,
    Adamant,
    Rune,
    Dragon
}

const qualityStrings = Object.keys(QualitiesEnum).filter(key => Number.isNaN(Number(key)));

const QualityPicker: React.FC = () => <ReactDropdown options={qualityStrings} />

export default QualityPicker;
