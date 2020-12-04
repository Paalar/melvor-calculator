import styled from "styled-components";
import { SkillNamesType } from "common/skillNames";
import { FC } from "react";

const Img = styled.img<{ size?: string }>`
  width: ${(props) => (props.size ? props.size : "32px")};
  height: ${(props) => (props.size ? props.size : "32px")};
  border-style: none;
  vertical-align: middle;
`;

const svgRoot =
  "https://melvorcdn.fra1.cdn.digitaloceanspaces.com/current/assets/media/";
const headerIconMain = `${svgRoot}/main`;
const combatIconMain = `${svgRoot}/skills/combat`;
const iconMain = `${svgRoot}/skills`;

const specialSources = {
  Combat: `${headerIconMain}/combat_header.svg`,
  Attack: `${combatIconMain}/attack.svg`,
  Strength: `${combatIconMain}/strength.svg`,
  Defence: `${combatIconMain}/defence.svg`,
  Hitpoints: `${combatIconMain}/hitpoints.svg`,
};

export const getSvgSrcFromPageName = (name: SkillNamesType) => {
  if (name in specialSources) {
    return specialSources[name as keyof typeof specialSources];
  }
  const pathName = name.toLowerCase();
  return `${iconMain}/${pathName}/${pathName}.svg`;
};

const Icon: FC<{ pageName: SkillNamesType; size?: string }> = ({
  pageName,
  size,
}) => {
  return <Img src={getSvgSrcFromPageName(pageName)} size={size} />;
};

export default Icon;
