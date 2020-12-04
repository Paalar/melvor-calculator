import { useContext, useEffect } from "react";
import GlobalExtras from "components/GlobalExtras";
import styled from "styled-components";
import { SkillNamesType } from "./common/skillNames";
import Header from "./components/Header";
import { CalculatorContext } from "state/Calculator/Context";
import { reset } from "state/Calculator/actions";
import usePrevious from "hooks/usePrevious";

interface Props {
  pageName: SkillNamesType;
}

const Content = styled.section`
  grid-area: content;
  overflow-y: scroll;
  height: 90vh;
`;

const Page: React.FC<Props> = ({ pageName, children }) => {
  const { calculatorDispatch } = useContext(CalculatorContext);
  const previousPageName = usePrevious(pageName);

  useEffect(() => {
    if (previousPageName && previousPageName !== pageName) {
      calculatorDispatch(reset());
    }
  }, [calculatorDispatch, previousPageName, pageName]);
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
