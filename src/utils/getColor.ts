import { SkillNamesType } from "../common/skillNames";

const SkillColors = {
    'Attack': '#a4a4a9',
    'Strength': '#a4a4a9',
    'Defence': '#a4a4a9',
    'Woodcutting': '#358f12',
    'Fishing': '#92d0f1',
    'Firemaking': '#b46624',
    'Cooking': '#c2b6b8',
    'Mining': '#95857a',
    'Smithing': '#69686f',
    'Thieving': '#837f73',
    'Farming': '#ab921a',
    'Fletching': '#e87575',
    'Crafting': '#947650',
    'Runecrafting': '#d2b2a6',
    'Herblore': '#45c094',
    'Magic': '#8d7bca'
}

export const getColor = (name: SkillNamesType ): string => {
    if (SkillColors.hasOwnProperty(name)){
        return SkillColors[(name as keyof typeof SkillColors)]
    } 
    return '#a4a4a9'
};