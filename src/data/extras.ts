export type Extra = {
  name: string;
  operator: string;
  value: number;
};

export const extraMasteryPool5: Extra = {
  name: "masteryPool5",
  operator: "*",
  value: 1.05,
};

export const removeExtra = (extras: Extra[], extra: Extra) =>
  extras.filter((other) => other.name !== extra.name);
