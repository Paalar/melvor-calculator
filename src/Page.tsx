import React from "react";
import styled from "styled-components";
import { SkillNamesType } from "./common/skillNames";
import Header from "./components/Header";

interface Props {
    pageName: SkillNamesType;
}

const Content = styled.section`
    grid-area: content;
`;
const Page: React.FC<Props> = ({ pageName, children }) => {
    return (
        <>
            <Header pageName={pageName} />
            <Content>
                {children}
            </Content>
        </>
    );
};

export default Page;
