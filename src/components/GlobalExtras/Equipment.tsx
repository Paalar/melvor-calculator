import { FC } from "react";
import DropdownCard from "common/Card";
import Row from "common/Row";
import Checkbox from "components/Checkbox";
import styled from "styled-components";

const Equipment: FC = () => {
  return (
    <DropdownCard title="Global Equipment">
      <EquipmentWrapper>
        <h3>Rings</h3>
        <Row>
          <Checkbox
            label="Ancient Ring of Skills (8% Skill XP increase)"
            onChecked={(checked) => console.log(checked)}
          />
        </Row>
        <Row>
          <Checkbox
            label="Ancient Ring of Mastery (7% Global Mastery XP increase)"
            onChecked={(checked) => console.log(checked)}
          />
        </Row>
      </EquipmentWrapper>
    </DropdownCard>
  );
};

const EquipmentWrapper = styled.div`
  h3 {
    text-align: left;
  }
  div {
    margin-left: 2rem;
  }
`;

export default Equipment;
