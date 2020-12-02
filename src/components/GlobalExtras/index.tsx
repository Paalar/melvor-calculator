import { FC } from "react";
import styled from "styled-components";
import Equipment from "./Equipment";
import Pets from "./Pets";

const GlobalExtras: FC = () => (
  <Container>
    <Pets />
    <Equipment />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default GlobalExtras;
