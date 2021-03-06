import { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

export const Card = styled.article`
  background-color: #4a5568;
  color: #f5f5f5;
  box-shadow: 0 1px 2px rgb(33 34 35/50%), 0 1px 2px rgb(26 26 27/50%);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.25rem;
  height: min-content;

  & > h2 {
    margin: 0;
  }
`;

type DropdownCardProps = {
  title: string;
  children: ReactNode;
};

export const DropdownCard: FC<DropdownCardProps> = ({ children, title }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <DropDownCardContainer>
      <h2>{title}</h2>
      <DropdownContent style={{ display: showCard ? "block" : "none" }}>
        {children}
      </DropdownContent>
      <div onClick={() => setShowCard(!showCard)}>
        {showCard ? <BiUpArrow /> : <BiDownArrow />}
      </div>
    </DropDownCardContainer>
  );
};

const DropDownCardContainer = styled(Card)`
  svg {
    padding-top: 1rem;
  }
`;

const DropdownContent = styled.div`
  animation: growDown 100ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  } ;
`;

export default Card;
