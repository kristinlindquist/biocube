import { useContext } from 'react';
import { DispatchContext, StateContext } from 'providers/DateRangeProvider';
import moment from 'moment';

const getDateFromStr = (str: string) => moment(str, moment.ISO_8601);

const useDispatchContext = () => {
  const { dispatch } = useContext(DispatchContext);
  const { state } = useContext(StateContext);

  if (dispatch === undefined) {
    throw new Error('Oh noes, where is my dispatch?');
  }

  const set = ({ start, end }: { start: string; end: string }) =>
    dispatch({
      start: getDateFromStr(start).toDate(),
      end: getDateFromStr(end).toDate(),
    });

  const setDay = (date: string) =>
    dispatch({
      start: getDateFromStr(date).toDate(),
      end: getDateFromStr(date).add(1, 'd').toDate(),
    });

  const setEnd = (end: string) =>
    dispatch({
      start: state.start,
      end: getDateFromStr(end).toDate(),
    });

  const setStart = (start: string) =>
    dispatch({
      end: state.end,
      start: getDateFromStr(start).toDate(),
    });

  return { set, setDay, setEnd, setStart };
};

const useStateContext = (): { start: Date; end: Date } => {
  const { state } = useContext(StateContext);

  if (state === undefined) {
    throw new Error('Oh noes, where is my state?');
  }

  return state;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDateRange = (): Array<any> => {
  return [useStateContext(), useDispatchContext()];
};

export { useDateRange };
