import React from 'react';

export type RefsContextProps = {
  coachRef: React.RefObject<HTMLElement>;
  timetableRef: React.RefObject<HTMLDivElement>;
  moviesRef: React.RefObject<HTMLElement>;
  footerRef: React.RefObject<HTMLDivElement>;
  pricingRef: React.RefObject<HTMLElement>;
  mapRef: React.RefObject<HTMLElement>;
};

export const RefsContext = React.createContext({} as RefsContextProps);

const RefsProvider: React.FC = ({ children }) => {
  const coachRef = React.useRef<HTMLElement>(null);
  const timetableRef = React.useRef<HTMLDivElement>(null);
  const moviesRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);
  const pricingRef = React.useRef<HTMLElement>(null);
  const mapRef = React.useRef<HTMLElement>(null);

  const value: RefsContextProps = {
    coachRef,
    timetableRef,
    moviesRef,
    footerRef,
    pricingRef,
    mapRef,
  };

  return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>;
};

export default RefsProvider;
