import React from 'react';
import reducer, { Actions, AppState, initState } from '../reducer';

type AppStateContextProps = {
  state: AppState;
  dispatch: React.Dispatch<{
    type: Actions;
  }>;
};

export const AppStateContext = React.createContext({} as AppStateContextProps);

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};

export default AppStateProvider;
