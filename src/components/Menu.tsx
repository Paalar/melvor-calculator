import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    grid-area: menu;
    & > a {
        margin-top: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;

    }
`;

const Menu: React.FC = () => {
    const sectionsWithoutIntIndices = Object.keys(SkillNamesEnum).filter(key => Number.isNaN(Number(key)));
    const sections = sectionsWithoutIntIndices.map(pageName =>
        <a href={`/${pageName}`}>
            <Icon pageName={(pageName as SkillNamesType)} />
            <p>{pageName}</p>
        </a>
    );

    return (
        <MenuWrapper>
            {sections}
        </MenuWrapper>
    )
}

export default Menu;