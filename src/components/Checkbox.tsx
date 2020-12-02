import { ChangeEvent, FC } from "react";
import styled from "styled-components";

type Props = {
  label: string;
  onChecked: (checked: boolean) => void;
  checked?: boolean;
};

const Checkbox: FC<Props> = ({ label, onChecked, checked }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChecked(event.currentTarget.checked);
  return (
    <Container>
      <input type="checkbox" onChange={onChange} />
      {label}
    </Container>
  );
};

const Container = styled.label`
  cursor: pointer;
  text-align: left;
  input {
    margin-right: 1rem;
  }
`;

export default Checkbox;
