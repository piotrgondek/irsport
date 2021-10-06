import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  ContactPhone, LocationOn, Mail, Phone,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { dark } from './themes';

const Footer = React.forwardRef((_, ref) => {
  const { t } = useTranslation();
  const md = useMediaQuery(dark.breakpoints.up('md'));

  return (
    <Box ref={ref as any}>
      {md
        ? (
          <Container
            maxWidth="xs"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              variant="outlined"
              sx={{
                border: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <ContactPhone
                  sx={{ fontSize: '3rem' }}
                />
              </CardContent>
              <CardContent>
                <Typography variant="subtitle1">{t('contact.header')}</Typography>
                <Typography variant="body2">
                  <Link
                    href="tel:535673205"
                    target="_blank"
                  >
                    {t('contact.phone')}
                  </Link>
                </Typography>
                <Typography variant="body2">
                  <Link
                    href="mailto:instytutrozwojusportu@gmail.com"
                    target="_blank"
                  >
                    {t('contact.email')}
                  </Link>
                </Typography>
                <Typography variant="body2">
                  <Link
                    href="https://goo.gl/maps/iEsyVu59UeEajRh18"
                    target="_blank"
                  >
                    {t('contact.address')}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        )
        : (
          <>
            <Paper
              sx={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
              }}
              elevation={3}
            >
              <BottomNavigation value={1}>
                <BottomNavigationAction
                  href="mailto:instytutrozwojusportu@gmail.com"
                  label="irs"
                  icon={<Mail />}
                />
                <BottomNavigationAction
                  href="tel:535673205"
                  label="535 673 205"
                  icon={<Phone />}
                />
                <BottomNavigationAction
                  href="https://goo.gl/maps/iEsyVu59UeEajRh18"
                  label="adam wargal"
                  icon={<LocationOn />}
                />
              </BottomNavigation>
            </Paper>
            <Toolbar />
          </>
        )}
    </Box>
  );
});

export default Footer;
