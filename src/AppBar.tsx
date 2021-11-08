/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, SvgIcon, Button, IconButton } from '@mui/material';
import { Facebook, YouTube } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as IrsIcon } from './assets/IRS.svg';
import resources from './i18n/config';
import AppMenu from './AppMenu';

interface AppBarProps {
  coach: React.MutableRefObject<HTMLElement | null>;
  timetable: React.MutableRefObject<HTMLElement | null>;
  movies: React.MutableRefObject<HTMLElement | null>;
  footer: React.MutableRefObject<HTMLElement | null>;
  pricing: React.MutableRefObject<HTMLElement | null>;
  map: React.MutableRefObject<HTMLElement | null>;
}

export type Section = keyof AppBarProps;

const AppBar: React.FC<AppBarProps> = (props) => {
  const { t, i18n } = useTranslation();

  const otherLanguage = () => Object.keys(resources).find((lang) => lang !== i18n.language);

  const changeLanguage = () => {
    const newLanguage = otherLanguage();
    i18n.changeLanguage(newLanguage);
  };

  return (
    <MuiAppBar>
      <Toolbar>
        <AppMenu sections={{ ...props }} />
        <SvgIcon fontSize="large" component={IrsIcon} viewBox="0 0 1786 1586" sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('appbar.irsport')}
        </Typography>
        <IconButton
          edge="end"
          href="//youtube.com/channel/UCu0dFoZJMJmgubPZqP0Q6Qw/videos"
          target="_blank"
          rel="noopener"
        >
          <YouTube />
        </IconButton>
        <IconButton edge="end" href="//facebook.com/IRSsportywalki" target="_blank" rel="noopener">
          <Facebook />
        </IconButton>
        <Button onClick={changeLanguage}>{otherLanguage()}</Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
