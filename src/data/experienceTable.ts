export type Unlockables = Record<number, number>;

export const experienceTable: number[] = [
  0,
  83,
  174,
  276,
  388,
  512,
  650,
  801,
  969,
  1154,
  1358,
  1584,
  1833,
  2107,
  2411,
  2746,
  3115,
  3523,
  3973,
  4470,
  5018,
  5624,
  6291,
  7028,
  7842,
  8740,
  9730,
  10824,
  12031,
  13363,
  14833,
  16456,
  18247,
  20224,
  22406,
  24815,
  27473,
  30408,
  33648,
  37224,
  41171,
  45529,
  50339,
  55649,
  61512,
  67983,
  75127,
  83014,
  91721,
  101333,
  111945,
  123660,
  136594,
  150872,
  166636,
  184040,
  203254,
  224466,
  247886,
  273742,
  302288,
  333804,
  368599,
  407015,
  449428,
  496254,
  547953,
  605032,
  668051,
  737627,
  814445,
  899257,
  992895,
  1096278,
  1210421,
  1336443,
  1475581,
  1629200,
  1798808,
  1986068,
  2192818,
  2421087,
  2673114,
  2951373,
  3258594,
  3597792,
  3972294,
  4385776,
  4842295,
  5346332,
  5902831,
  6517253,
  7195629,
  7944614,
  8771558,
  9684577,
  10692629,
  11805606,
  13034431,
];

export const getNumberOfUnlockables = (unlockables: Unlockables): number =>
  Object.values(unlockables).reduce((prev, current) => prev + current, 0);
export const getNumberOfUnlockedByLvl = (
  lvl: number,
  unlockables: Unlockables
) =>
  Object.entries(unlockables).reduce((prev, current) => {
    const unlockAtLvl = Number(current[0]);
    if (unlockAtLvl <= lvl) return prev + current[1];
    return prev;
  }, 0);

export const getCurrentLvlByXp = (xp: number): number => {
  for (let i = 0; i < experienceTable.length; i++) {
    if (xp === experienceTable[i]) return i + 1;
    if (xp < experienceTable[i]) {
      return i;
    }
  }
  return NaN;
};
export const expTableToString = () =>
  experienceTable.map((row) => row.toString());
export const expTableAsLvls = () =>
  experienceTable.map((row, index) => (index + 1).toString());
export const experienceDifference = (currentExp: number, targetLvl: number) =>
  experienceTable[targetLvl] - currentExp;
export const calculateNumberOfActions = (xpDiff: number, xpa: number) =>
  Math.ceil(xpDiff / xpa);
export const calculateSecondsToTargetLvl = (xpDiff: number, xps: number) =>
  Math.ceil(xpDiff / xps);
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
export default experienceTable;
