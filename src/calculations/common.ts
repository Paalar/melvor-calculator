export const calculateSecondsToTargetLvl = (xpDiff: number, xps: number) =>
  Math.ceil(xpDiff / xps);

export const calculateNumberOfActions = (xpDiff: number, xpa: number) =>
  Math.ceil(xpDiff / xpa);
