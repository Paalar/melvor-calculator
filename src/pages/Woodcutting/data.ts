import { Unlockables } from "data/experienceTable";

export const xpPerTreeType = {
  Normal: 10,
  Oak: 15,
  Willow: 22,
  Teak: 30,
  Maple: 40,
  Mahogany: 60,
  Yew: 80,
  Magic: 100,
  Redwood: 180,
};

export const cutTimePerTreeType: Record<TreeName, number> = {
  Normal: 3,
  Oak: 4,
  Willow: 5,
  Teak: 6,
  Maple: 8,
  Mahogany: 10,
  Yew: 12,
  Magic: 20,
  Redwood: 15,
};

export const unlockables: Unlockables = {
  0: 1,
  10: 1,
  25: 1,
  35: 1,
  45: 1,
  55: 1,
  60: 1,
  75: 1,
  90: 1,
};

export const maxMastery = 891;
export const axeCutTimes = [1, 0.95, 0.85, 0.8, 0.7, 0.65, 0.6, 0.5];
export const getSecondsPerTree = (
  treeName: TreeName,
  timeReduction: number,
  skillCape: boolean,
  masterOfNature: boolean,
  masteryLvl: number
): number => {
  let seconds = cutTimePerTreeType[treeName] * timeReduction;
  if (skillCape) {
    seconds *= 0.5;
  }
  if (masteryLvl === 99) {
    seconds -= 0.2;
  }
  if (masterOfNature) {
    seconds *= 0.8;
  }
  return seconds;
};
export const getXpsPerTree = (treeName: TreeName, secPerTree: number): number =>
  xpPerTreeType[treeName] / secPerTree;

export type TreeName = keyof typeof xpPerTreeType;
