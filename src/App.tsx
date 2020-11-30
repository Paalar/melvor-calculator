import React, { useState } from "react";
import Page from "./Page";
import "./App.css";
import Calculator from "components/Calculator";
import styled from "styled-components";
import Menu from "components/Menu";
import { SkillNamesType } from "common/skillNames";

const PageDivider = styled.div`
  display: grid;
  grid-template-areas: 
    'header header'
    'menu content';
  grid-template-columns: 1fr 3fr;
`;


function App() {
  const [currentPage, setCurrentPage] = useState<SkillNamesType>("Attack");
  return (
    <PageDivider className="App">
      <Page pageName={currentPage}>
        <Calculator />
      </Page>
      <Menu setPage={setCurrentPage} />
    </PageDivider>
  );
}

export default App;
