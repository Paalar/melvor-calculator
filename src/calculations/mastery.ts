import { Unlockables } from "pages/Woodcutting/data";

export const calculateMasteryXp = (
  unlockedMilestones: number,
  playerMastery: number,
  totalMastery: number,
  itemMastery: number,
  totalMilestones: number,
  secPerAction: number
) =>
  ((unlockedMilestones * playerMastery) / totalMastery +
    itemMastery * (totalMilestones / 10)) *
  secPerAction *
  0.5;

export const getNumberOfUnlockables = (unlockables: Unlockables): number =>
  Object.values(unlockables).reduce((prev, current) => prev + current, 0);

export const getNumberOfUnlockedByLvl = (
  playerLvl: number,
  unlockables: Unlockables
) =>
  Object.entries(unlockables).reduce((prev, [lvl, unlocks]) => {
    const unlockAtLvl = Number(lvl);
    if (unlockAtLvl <= playerLvl) return prev + unlocks;
    return prev;
  }, 0);
