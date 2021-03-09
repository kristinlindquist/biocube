import {
  createContext,
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';

interface IStateContextProps {
  state: { start: Date; end: Date };
}
interface IDispatchContextProps {
  dispatch: (state: { start: Date; end: Date }) => void;
}

const StateContext = createContext({} as IStateContextProps);
const DispatchContext = createContext({} as IDispatchContextProps);

interface Props {
  /**
   * Children
   */
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  /**
   * Initial values
   */
  initial: { start: Date; end: Date };
}

/**
 * Provides a Date Range ({ start, end })
 */
const DateRangeProvider = ({ children, initial }: Props): ReactElement => {
  const [state, dispatch] = useState(initial);

  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StateContext.Provider value={{ state }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { DateRangeProvider, DispatchContext, StateContext };
