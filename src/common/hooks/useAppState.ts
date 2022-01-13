import React from 'react';
import { AppStateContext } from '../contexts/AppStateContext';

const useAppState = () => React.useContext(AppStateContext);

export default useAppState;
