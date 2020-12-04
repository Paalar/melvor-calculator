import styled from "styled-components";
import { SkillNamesType } from "common/skillNames";
import Icon from "components/Icon";
import { FC } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
`;

const WhiteBackground = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin: 0.66em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  name: SkillNamesType;
}

const HeaderSvg: FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <WhiteBackground>
        <Icon pageName={name} />
      </WhiteBackground>
    </Wrapper>
  );
};

export default HeaderSvg;
