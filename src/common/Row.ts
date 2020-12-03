import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > :first-child {
    margin-right: 1rem;
  }
`;

export default Row;
