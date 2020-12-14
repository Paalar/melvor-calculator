import { Extra } from "data/extras";
import funcByOperator from "utils/funcByOperator";

export const calculateSecondsToTargetLvl = (xpDiff: number, xps: number) =>
  Math.ceil(xpDiff / xps);

export const calculateNumberOfActions = (xpDiff: number, xpa: number) =>
  Math.ceil(xpDiff / xpa);

export const getSecondsPerActionWithExtras = (
  originalSpeed: number,
  extras: Extra[]
): number => {
  const calculatedSeconds = extras.reduce(
    (sec, extra) => funcByOperator[extra.operator](sec, extra.value),
    originalSpeed
  );
  return calculatedSeconds;
};
