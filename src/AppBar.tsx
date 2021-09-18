import React from 'react';
import {
  AppBar as MuiAppBar,
  Button,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Facebook, YouTube, Close } from '@mui/icons-material';

interface Props {
  children: React.ReactElement
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const AppBar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>();

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <HideOnScroll>
        <MuiAppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              href="https://www.youtube.com/channel/UCu0dFoZJMJmgubPZqP0Q6Qw/videos"
              target="_blank"
            >
              <YouTube />
            </IconButton>
            <IconButton
              edge="start"
              href="https://www.facebook.com/IRSsportywalki"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>IRS</Typography>
            <Button
              className="open-rodo"
              color="inherit"
              onClick={handleOpenDrawer}
            >
              RODO
            </Button>
          </Toolbar>
        </MuiAppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        onClose={handleCloseDrawer}
        open={openDrawer}
      >
        <Paper sx={{
          p: {
            xs: 2,
            md: 12,
          },
        }}
        >
          <Fab
            className="close-rodo"
            size="small"
            color="secondary"
            onClick={handleCloseDrawer}
            sx={{
              position: 'absolute',
              top: (theme) => theme.spacing(2),
              right: (theme) => theme.spacing(4),
            }}
          >
            <Close />
          </Fab>
          <Typography variant="h2" gutterBottom>
            Ochrona danych osobowych
          </Typography>

          <Typography variant="h3">
            Administratorami danych osobowych są
          </Typography>

          <List>
            <ListItem>
              <ListItemText>
                Stowarzyszenie Instytut Rozwoju Sportu z siedzibą w Krakowie ul. Łużycka 14.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Przedsiębiorstwo Wargalsport z siedzibą w Krakowie ul. Łużycka 14.
              </ListItemText>
            </ListItem>
          </List>

          <Typography gutterBottom>
            Przetwarzanie danych osobowych odbywa się na zasadach współadministracji (art. 26 RODO)
          </Typography>

          <Typography variant="h3">
            Cel przetwarzania danych:
          </Typography>

          <List>
            <ListItem>
              <ListItemText>
                prowadzenie zajęć sportowych, w szczególności treningów boksu, kickboxingu, taekwando, fight cross,
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                udział w zawodach sportowych
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                członkostwo w Stowarzyszeniu Instytut Rozwoju Sportu
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="h3">
            Podstawa przetwarzania danych:
          </Typography>

          <Typography gutterBottom>
            Art. 6 ust. 1 lit b) RODO – wykonanie umowy, której stroną jest osoba, której dane dotyczą.
          </Typography>

          <Typography variant="h4">
            Dane osobowe nie są przekazywane odbiorcom.
          </Typography>

          <Typography gutterBottom>
            Dane będą przechowywane przez okres trwania umowy oraz po jej zakończeniu przez czas niezbędny do
            zabezpieczenia dochodzenia roszczeń.
          </Typography>

          <Typography variant="h3">
            Osoba, której dane dotyczą, ma prawo:
          </Typography>

          <List>
            <ListItem>
              <ListItemText>
                dostępu do dotyczących jej danych,
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                sprostowania dotyczących jej danych,
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                usunięcia lub ograniczenia przetwarzania danych,
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                wniesienia sprzeciwu wobec przetwarzania.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                wniesienia skargi do organu nadzorczego
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="h3">
            Podanie danych osobowych jest dobrowolne, jednak warunkuje udział w zajęciach sportowych prowadzonych
            przez IRS i Wargalsport.
          </Typography>
        </Paper>
      </Drawer>
    </>
  );
};

export default AppBar;
