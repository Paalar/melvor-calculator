export enum SkillNamesEnum {
    'Combat',
    'Attack',
    'Strength',
    'Defence',
    'Hitpoints',
    'Ranged',
    'Prayer',
    'Slayer',
    'Woodcutting',
    'Fishing',
    'Firemaking',
    'Cooking',
    'Mining',
    'Smithing',
    'Thieving',
    'Farming',
    'Fletching',
    'Crafting',
    'Runecrafting',
    'Herblore',
    'Magic'
}

export type SkillNamesType = keyof typeof SkillNamesEnum;