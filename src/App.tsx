import React, { useState } from "react";
import styled from "styled-components";
import Calculator from "components/Calculator";
import Menu from "components/Menu";
import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import Woodcutting from "pages/Woodcutting";
import Page from "./Page";
import "./App.css";

const PageDivider = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "menu content";
  grid-template-columns: 1fr 3fr;
`;

const pageSelector = (pageName: SkillNamesType) => {
  switch (pageName) {
    case SkillNamesEnum[SkillNamesEnum.Attack]:
      return Calculator
    case SkillNamesEnum[SkillNamesEnum.Woodcutting]:
      return Woodcutting;
    default:
      return Calculator
  }
};

function App() {
  const [currentPageName, setCurrentPageName] = useState<SkillNamesType>(
    "Attack"
  );

  const CurrentComponent = pageSelector(currentPageName);
  return (
    <PageDivider className="App">
      <Page pageName={currentPageName}>
        <CurrentComponent />
      </Page>
      <Menu setPage={setCurrentPageName} />
    </PageDivider>
  );
}

export default App;
