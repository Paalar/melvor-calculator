import { FC } from "react";
import DropdownCard from "common/Card";
import Row from "common/Row";
import Checkbox from "components/Checkbox";

const Pets: FC = () => {
  return (
    <DropdownCard title="Global Pets">
      <Row>
        <Checkbox
          label="Ty (3% Global Mastery XP increase)"
          onChecked={(checked) => console.log(checked)}
        />
      </Row>
      <Row>
        <Checkbox
          label="Pyro (1% Global XP increase)"
          onChecked={(checked) => console.log(checked)}
        />
      </Row>
    </DropdownCard>
  );
};

export default Pets;
