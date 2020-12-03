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

export const axeCutTimes = [1, 0.95, 0.85, 0.8, 0.7, 0.65, 0.6, 0.5];

export const getXpsPerTree = (
  treeName: TreeName,
  timeReduction: number
): number =>
  xpPerTreeType[treeName] / (cutTimePerTreeType[treeName] * timeReduction);

export type TreeName = keyof typeof xpPerTreeType;
