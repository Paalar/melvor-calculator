import React, { useState } from "react";
import styled from "styled-components";
import Menu from "components/Menu";
import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import Woodcutting from "pages/Woodcutting";
import Page from "./Page";
import "./App.css";
import { Card } from "common/Card";

const PageDivider = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "menu content";
  grid-template-columns: 1fr 3fr;
`;

const pageSelector = (pageName: SkillNamesType) => {
  switch (pageName) {
    case SkillNamesEnum[SkillNamesEnum.Woodcutting]:
      return <Woodcutting />;
    default:
      return (
        <Card>
          <h2>TBA</h2>
        </Card>
      );
  }
};

function App() {
  const [currentPageName, setCurrentPageName] = useState<SkillNamesType>(
    "Woodcutting"
  );

  const CurrentComponent = pageSelector(currentPageName);
  return (
    <PageDivider className="App">
      <Page pageName={currentPageName}>{CurrentComponent}</Page>
      <Menu setPage={setCurrentPageName} />
    </PageDivider>
  );
}

export default App;
