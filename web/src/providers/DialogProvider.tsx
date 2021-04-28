import {
  createContext,
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';

import { FormDialog as Dialog, DialogProps } from 'components/Dialog';

interface IStateContextProps {
  state: { dialogs: Array<DialogProps> };
}

interface IDispatchContextProps {
  dispatch: (state: { dialogs: Array<DialogProps> }) => void;
}

const StateContext = createContext({} as IStateContextProps);
const DispatchContext = createContext({} as IDispatchContextProps);

interface Props {
  /**
   * Children
   */
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}

/**
 * Provides Dialog control
 */
const DialogProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useState({ dialogs: [] });

  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StateContext.Provider value={{ state }}>
        {children}
        {state.dialogs.map((dialog) => (
          <Dialog key={dialog.title} {...dialog} />
        ))}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { DialogProvider, DispatchContext, StateContext };
