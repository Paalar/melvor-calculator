import React from "react";
import GlobalExtras from "components/GlobalExtras";
import styled from "styled-components";
import { SkillNamesType } from "./common/skillNames";
import Header from "./components/Header";

interface Props {
  pageName: SkillNamesType;
}

const Content = styled.section`
  grid-area: content;
  overflow-y: scroll;
  height: 90vh;
`;

const Page: React.FC<Props> = ({ pageName, children }) => {
  return (
    <>
      <Header pageName={pageName} />
      <Content>
        <GlobalExtras />
        {children}
      </Content>
    </>
  );
};

export default Page;
