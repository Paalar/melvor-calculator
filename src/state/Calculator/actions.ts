export enum CalculatorActionTypes {
  SET_XP = "SET_XP",
  SET_PLAYER_MASTERY = "SET_PLAYER_MASTERY",
  SET_ITEM_MASTERY = "SET_ITEM_MASTERY",
  SET_MASTERY_XP = "SET_MASTERY_XP",
}
type SetXpAction = { type: CalculatorActionTypes.SET_XP; payload: string };
type SetPlayerMasteryAction = {
  type: CalculatorActionTypes.SET_PLAYER_MASTERY;
  payload: string;
};
type SetItemMasteryAction = {
  type: CalculatorActionTypes.SET_ITEM_MASTERY;
  payload: string[];
};
type SetMasteryXp = {
  type: CalculatorActionTypes.SET_MASTERY_XP;
  payload: string;
};
export type CalculatorAction =
  | SetXpAction
  | SetPlayerMasteryAction
  | SetItemMasteryAction
  | SetMasteryXp;

export const setXp = (xp: string): SetXpAction => ({
  type: CalculatorActionTypes.SET_XP,
  payload: xp,
});
export const setPlayerMastery = (mastery: string): SetPlayerMasteryAction => ({
  type: CalculatorActionTypes.SET_PLAYER_MASTERY,
  payload: mastery,
});
export const setItemMastery = (
  itemMastery: string[]
): SetItemMasteryAction => ({
  type: CalculatorActionTypes.SET_ITEM_MASTERY,
  payload: itemMastery,
});
export const setMasteryXp = (xp: string): SetMasteryXp => ({
  type: CalculatorActionTypes.SET_MASTERY_XP,
  payload: xp,
});
