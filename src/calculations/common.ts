import { Extra } from "data/extras";
import funcByOperator from "utils/funcByOperator";

export const calculateSecondsToTargetLvl = (xpDiff: number, xps: number) =>
  Math.ceil(xpDiff / xps);

export const calculateNumberOfActions = (xpDiff: number, xpa: number) =>
  Math.ceil(xpDiff / xpa);


export const getSecondsPerActionWithExtras = (
  originalSpeed: number,
  itemMastery: number,
  extras: Extra[],
): number => {
  const masteryReducedSeconds = itemMastery === 99 ? originalSpeed - 0.2 : originalSpeed;
  const calculatedSeconds = extras.reduce(
    (sec, extra) => funcByOperator[extra.operator](sec, extra.value), masteryReducedSeconds
  );
  return calculatedSeconds;
};
