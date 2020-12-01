import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: menu;
`;

const MenuItem = styled.button`
  margin-top: 10px;
  padding: 5px 0 5px 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: white;
  border: none;

  & > img {
    margin-right: 1rem;
  }

  &:hover {
    background-color: #f6f6f6;
  }
`;

interface Props {
  setPage: (page: SkillNamesType) => void;
}

const Menu: React.FC<Props> = ({ setPage }) => {
  const sectionsWithoutIntIndices = Object.keys(SkillNamesEnum).filter((key) =>
    Number.isNaN(Number(key))
  );
  const sections = (sectionsWithoutIntIndices as SkillNamesType[]).map(
    (pageName) => (
      <MenuItem onClick={() => setPage(pageName)} key={pageName}>
        <Icon pageName={pageName} size="24px" />
        {pageName}
      </MenuItem>
    )
  );

  return <MenuWrapper>{sections}</MenuWrapper>;
};

export default Menu;
