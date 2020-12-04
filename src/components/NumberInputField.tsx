import { ChangeEvent, FC } from "react";
import styled from "styled-components";

type Props = {
  onValueChange: (value: string) => void;
  value: number | string;
  label?: string;
  max?: number;
  min?: number;
};

const NumberInputField: FC<Props> = ({ value, onValueChange, max, min }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    // Value may be an empty string, and converting it to a number makes it 0
    // which is an unwanted effect
    const numberValue = Number(value);
    if (!value.length) {
      onValueChange(value);
    } else if (max && numberValue > max) {
      onValueChange(max.toString());
    } else if (min && numberValue < min) {
      onValueChange(min.toString());
    } else {
      onValueChange(value);
    }
  };
  return <InputContainer type="number" value={value} onChange={onChange} />;
};

const InputContainer = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  &:focus {
    outline: none;
  }
`;

export default NumberInputField;
