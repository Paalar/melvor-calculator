import React from "react";
import styled from "styled-components";
import { SkillNamesType } from "../../common/skillNames";
import Icon from "../Icon";


const Wrapper = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 8px;
    margin: .66em;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface Props {
    name: SkillNamesType;
}

const HeaderSvg: React.FC<Props> = ({ name }) => {
    return (
        <Wrapper>
            <Icon pageName={name} />
        </Wrapper>
    );
}

export default HeaderSvg;