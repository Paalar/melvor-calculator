export const getTimeText = (seconds: number) => {
    if (seconds < 60) return `${seconds} seconds left`;
    if (seconds/60 < 60) return `${Math.round(seconds/60)} minutes left`;
    return `${Math.round(seconds/60/60)} hours left`;
}
