import React from "react";
import styled from "styled-components";
import { SkillNamesType } from "../../common/skillNames";
import Icon from "../Icon";


const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-column-start:2;
`;

const WhiteBackground = styled.div`
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
            <WhiteBackground>
                <Icon pageName={name} />
            </WhiteBackground>
        </Wrapper>
    );
}

export default HeaderSvg;