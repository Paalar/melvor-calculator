import experienceTable from "data/experienceTable";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { CalculatorAction, CalculatorActionTypes } from "./actions";

type State = {
  currentExp: string;
  masteryPool: string;
  playerMastery: string;
  itemMastery: string[];
};

type CalculatorContextProps = {
  calculatorState: State;
  calculatorDispatch: Dispatch<CalculatorAction>;
};
type CalculatorProviderProps = {
  children: ReactNode;
};

const initialState: State = {
  currentExp: "0",
  masteryPool: "0",
  playerMastery: "1",
  itemMastery: ["1", "1"], // The second element is used for woodcutting with multiple axes
};

const CalculatorReducer = (state: State, action: CalculatorAction): State => {
  switch (action.type) {
    case CalculatorActionTypes.SET_XP: {
      const { payload } = action;
      if (Number(payload) < 0) return { ...state, currentExp: "0" };
      if (Number(payload) > experienceTable[98])
        return { ...state, currentExp: experienceTable[98].toString() };
      return { ...state, currentExp: payload };
    }
    case CalculatorActionTypes.SET_PLAYER_MASTERY:
      return { ...state, playerMastery: action.payload };
    case CalculatorActionTypes.SET_ITEM_MASTERY:
      return { ...state, itemMastery: [...action.payload] };
    case CalculatorActionTypes.SET_MASTERY_XP:
      return { ...state, masteryPool: action.payload };
    case CalculatorActionTypes.RESET:
      return { ...initialState };
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
