export enum CalculatorActionTypes {
  SET_XP = "SET_XP",
  SET_PLAYER_MASTERY = "SET_PLAYER_MASTERY",
}
type SetXPAction = { type: CalculatorActionTypes.SET_XP; payload: string };
type SetPlayerMasteryAction = {
  type: CalculatorActionTypes.SET_PLAYER_MASTERY;
  payload: string;
};
export type CalculatorAction = SetXPAction | SetPlayerMasteryAction;

export const setXp = (xp: string): SetXPAction => ({
  type: CalculatorActionTypes.SET_XP,
  payload: xp,
});
export const setPlayerMastery = (mastery: string): SetPlayerMasteryAction => ({
  type: CalculatorActionTypes.SET_PLAYER_MASTERY,
  payload: mastery,
});
