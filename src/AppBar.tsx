import React from 'react';
import {
  AppBar as MuiAppBar,
  Button,
  Drawer,
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
import { Facebook, YouTube } from '@mui/icons-material';

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
            <IconButton edge="start">
              <Facebook />
            </IconButton>
            <IconButton edge="start">
              <YouTube />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>IRS</Typography>
            <Button
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
          <Typography variant="h3" gutterBottom>
            Ochrona danych osobowych
          </Typography>

          <Typography variant="h4">
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

          <Typography variant="h4">
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

          <Typography>
            Podstawa przetwarzania danych:
          </Typography>

          <Typography variant="body2">
            Art. 6 ust. 1 lit b) RODO – wykonanie umowy, której stroną jest osoba, której dane dotyczą.
          </Typography>

          <Typography>
            Dane osobowe nie są przekazywane odbiorcom.
          </Typography>

          <Typography>
            Dane będą przechowywane przez okres trwania umowy oraz po jej zakończeniu przez czas niezbędny do
            zabezpieczenia dochodzenia roszczeń.
          </Typography>

          <Typography>
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

          <Typography variant="h4">
            Podanie danych osobowych jest dobrowolne, jednak warunkuje udział w zajęciach sportowych prowadzonych
            przez IRS i Wargalsport.
          </Typography>
        </Paper>
      </Drawer>
    </>
  );
};

export default AppBar;
