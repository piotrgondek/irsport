import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Grid,
  Link,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ConnectWithoutContact, ContactPhone, LocationOn, Mail, Phone, List } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { dark } from './themes';
import useRefs from './common/hooks/useRefs';
import useAppState from './common/hooks/useAppState';
import regulamin from './assets/regulamin sali i szatni IRS.pdf';

const Footer: React.FC = () => {
  const { footerRef } = useRefs();
  const { t } = useTranslation();
  const md = useMediaQuery(dark.breakpoints.up('md'));
  const { dispatch } = useAppState();

  const openRodo = () => {
    dispatch({ type: 'OPEN_RODO' });
  };

  const openStatue = () => {
    window.open(regulamin, '_blank')?.focus();
  };

  return (
    <>
      <Grid
        ref={footerRef}
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <Grid item>
          <Card
            variant="outlined"
            sx={{
              border: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CardContent>
              <ContactPhone sx={{ fontSize: '3rem' }} />
            </CardContent>
            <CardContent>
              <Typography variant="subtitle1">{t('contact.header')}</Typography>
              <Typography variant="body2">
                <Link href="tel:535673205" target="_blank" rel="noopener">
                  {t('contact.phone')}
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link href="mailto:instytutrozwojusportu@gmail.com" target="_blank" rel="noopener">
                  {t('contact.email')}
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link href="https://goo.gl/maps/fqceCdW2TsFp84U4A" target="_blank" rel="noopener">
                  {t('contact.address')}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            variant="outlined"
            sx={{
              border: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CardContent>
              <ConnectWithoutContact sx={{ fontSize: '3rem' }} />
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                <Link href="//facebook.com/IRSsportywalki" target="_blank" rel="noopener">
                  {t('contact.fb')}
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link href="//youtube.com/channel/UCu0dFoZJMJmgubPZqP0Q6Qw/videos" target="_blank" rel="noopener">
                  {t('contact.yt')}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            variant="outlined"
            sx={{
              border: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CardContent>
              <List sx={{ fontSize: '3rem' }} />
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                <Link onClick={openRodo}>{t('appbar.menu.rodo')}</Link>
              </Typography>
              <Typography variant="body2">
                <Link onClick={openStatue}>{t('appbar.menu.statute')}</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {!md && (
        <>
          <Paper
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
            }}
            elevation={3}
          >
            <BottomNavigation value={1}>
              <BottomNavigationAction href="mailto:instytutrozwojusportu@gmail.com" label="irs" icon={<Mail />} />
              <BottomNavigationAction href="tel:535673205" label="535 673 205" icon={<Phone />} />
              <BottomNavigationAction
                href="https://goo.gl/maps/fqceCdW2TsFp84U4A"
                label="adam wargal"
                icon={<LocationOn />}
              />
            </BottomNavigation>
          </Paper>
          <Toolbar />
        </>
      )}
    </>
  );
};

export default Footer;
