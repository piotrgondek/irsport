import React from 'react';
import { RefsContext } from '../contexts/RefsContext';

const useRefs = () => React.useContext(RefsContext);

export default useRefs;
