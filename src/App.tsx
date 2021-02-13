import { FC, useState } from "react";
import styled from "styled-components";
import Menu from "components/Menu";
import { SkillNamesEnum, SkillNamesType } from "common/skillNames";
import Woodcutting from "pages/Woodcutting";
import Mining from "pages/Mining";
import Page from "./Page";
import "./App.css";
import { CalculatorProvider } from "state/Calculator/Context";
import GenericPage from "pages/Generic";

const PageDivider = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "menu content";
  grid-template-columns: 1fr 3fr;
`;

type CurrentComponentProps = {
  pageName: SkillNamesType;
};

const CurrentComponent: FC<CurrentComponentProps> = ({ pageName }) => {
  switch (pageName) {
    case SkillNamesEnum[SkillNamesEnum.Woodcutting]:
      return <Woodcutting />;
    case SkillNamesEnum[SkillNamesEnum.Mining]:
      return <Mining />;
    default:
      return <GenericPage pageName={pageName} />;
  }
};

function App() {
  const [currentPageName, setCurrentPageName] = useState<SkillNamesType>(
    "Woodcutting"
  );
  return (
    <PageDivider className="App">
      <CalculatorProvider>
        <Page pageName={currentPageName}>
          <CurrentComponent pageName={currentPageName} />
        </Page>
      </CalculatorProvider>
      <Menu setPage={setCurrentPageName} />
    </PageDivider>
  );
}

export default App;
