import AbstractAction from "./Action";

/*
    An action is one action you can select in a skill to do.
    It has a baseTime and a getTime, where getTime has to be implemented for the actual skill.
    The signature of getTime allows for any parameters, as I am yet uncertain of whether they can be equal.
*/
export interface ActionProps {
    name: string;
    baseTime: number;
    amount: number;
    xp: number;
};

/*
 A tool is a skill upgrade, intended to be picked from a dropdown.
 Most tools provide a speed increase, except for cooking fire which gives an exp bonus.
*/

type Affect = "EXP" | "Mastery" | "Global" | "Speed";

type Operator = "*" | "+" | "/" | "-";

export interface Tool {
    name: string;
    affect: Affect;
    operator: Operator;
    value: number;
}

export interface Skill {
    name: string,
    tools: Tool[],
    actions: AbstractAction[],
    maxMastery: number,
    unlockables: Record<number, number>,
}
