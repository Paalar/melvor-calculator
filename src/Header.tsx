import React from "react";
import styled from "styled-components";
import { SkillNames } from "./common/skillNames";
import { getColor } from "./utils/getColor";

interface Props {
    pageName: keyof typeof SkillNames;
}

const HeaderWrapper = styled.header<Props>`
    background-color: ${(props) => getColor(props.pageName)};
`;

const HeaderText = styled.h1`
    box-sizing: border-box;
    margin: 0;
    padding: 2rem 0;
    font-family: 'Roboto';
    color: white;
`;

const Header: React.FC<Props> = ({ pageName }) => {
    return (
        <HeaderWrapper pageName={pageName}>
            <HeaderText>
                {pageName}
            </HeaderText>
        </HeaderWrapper>
    );
}


export default Header;