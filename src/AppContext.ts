import React from 'react';
import { Actions, AppState } from './reducer';

type Context = {
  state: AppState;
  dispatch: React.Dispatch<{
    type: Actions;
  }>;
};

const AppContext = React.createContext<Context>({} as Context);

export default AppContext;
