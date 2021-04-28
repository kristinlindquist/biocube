import { useContext } from 'react';
import { DispatchContext, StateContext } from 'providers/DialogProvider';

const useDispatchContext = () => {
  const { dispatch } = useContext(DispatchContext);
  const { state } = useContext(StateContext);

  if (dispatch === undefined) {
    throw new Error('Oh noes, where is my dispatch?');
  }

  const open = (option) => {
    const dialog = { ...option, open: true };
    dispatch({ dialogs: [...state.dialogs, dialog] });
  };

  const close = () => {
    const latestDialog = state.dialogs.pop();

    if (latestDialog.onClose) {
      latestDialog.onClose();
    }

    dispatch({
      dialogs: !latestDialog
        ? state.dialogs
        : [...state.dialogs].concat({ ...latestDialog, open: false }),
    });
  };

  return { open, close };
};

const useStateContext = (): { dialogs: Array<any> } => {
  const { state } = useContext(StateContext);

  if (state === undefined) {
    throw new Error('Oh noes, where is my state?');
  }

  return state;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDialog = (): Array<any> => {
  return [useStateContext(), useDispatchContext()];
};

export default useDialog;
