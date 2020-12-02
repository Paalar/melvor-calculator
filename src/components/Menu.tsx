import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: menu;
  height: 90vh;
  overflow-y: scroll;
`;

const MenuItem = styled.button`
  padding: 10px 0 10px 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;

  & > img {
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
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
