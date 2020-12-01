export const getTimeText = (seconds: number) => {
  if (seconds < 60) return `${seconds} seconds`;
  if (seconds / 60 < 60) return `${Math.round(seconds / 60)} minutes`;
  return `${Math.round(seconds / 60 / 60)} hours`;
};
