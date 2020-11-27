
const SkillColors = {
    'Woodcutting': '#358f12',
    'Fishing': '#92d0f1',
    'Firemaking': '#b46624',
    'Fletching': '#e87575',
    'Combat': '#a4a4a9'
}

export const getColor = (name: keyof typeof SkillColors): string => SkillColors[name];