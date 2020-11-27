import React from "react";
import styled from "styled-components";
import { SkillNamesType } from "../../common/skillNames";
import { getColor } from "../../utils/getColor";
import HeaderSvg from "./HeaderSvg";

interface Props {
    pageName: SkillNamesType;
}

const HeaderWrapper = styled.header<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
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
            <HeaderSvg name={pageName} />
            <HeaderText>
                {pageName}
            </HeaderText>
        </HeaderWrapper>
    );
}


export default Header;