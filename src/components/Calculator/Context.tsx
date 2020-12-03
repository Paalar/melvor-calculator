import experienceTable, { getCurrentLvlByXp } from "data/experienceTable";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

enum ActionTypes {
  SET_XP = "SET_XP",
}
type State = {
  currentExp: string;
};
type SetXPAction = { type: ActionTypes.SET_XP; payload: string };
type Action = SetXPAction;
type CalculatorContextProps = {
  calculatorState: State;
  calculatorDispatch: Dispatch<Action>;
};
type CalculatorProviderProps = {
  children: ReactNode;
};

const initialState: State = {
  currentExp: "0",
};

const CalculatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_XP: {
      const { payload } = action;
      if (Number(payload) < 0) return { ...state, currentExp: "0" };
      if (Number(payload) > experienceTable[98])
        return { ...state, currentExp: experienceTable[98].toString() };
      return { ...state, currentExp: payload };
    }
    default:
      return { ...state };
  }
};

const initialContext: CalculatorContextProps = {
  calculatorState: initialState,
  calculatorDispatch: () => null,
};

export const CalculatorContext = createContext<CalculatorContextProps>(
  initialContext
);

export const CalculatorProvider = (
  props: CalculatorProviderProps
): JSX.Element => {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);
  const { children } = props;

  return (
    <CalculatorContext.Provider
      value={{ calculatorState: state, calculatorDispatch: dispatch }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const setXp = (xp: string): SetXPAction => ({
  type: ActionTypes.SET_XP,
  payload: xp,
});
