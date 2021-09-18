/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  AppBar as MuiAppBar,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Facebook, YouTube, Close, Menu as MenuIcon, AssignmentInd, Person, Schedule,
} from '@mui/icons-material';

interface AppBarProps {
  coach: React.MutableRefObject<HTMLElement | null>
  timetable: React.MutableRefObject<HTMLElement | null>
}

type Section = keyof AppBarProps;

const AppBar: React.FC<AppBarProps> = (props) => {
  const [isDrawerOpened, setOpenDrawer] = React.useState<boolean>();

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const MenuButton: React.FC = () => {
    const [selectedSection, setSelectedSection] = React.useState<Section>();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    React.useEffect(
      () => {
        if (selectedSection) {
          props[selectedSection]
            .current!
            .scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      },
      [selectedSection],
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const scrollTo = (section: Section) => () => {
      handleClose();
      setSelectedSection(section);
    };

    return (
      <>
        <IconButton
          id="irsMenu"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            id="irsAdamWargal"
            onClick={scrollTo('coach')}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Trener</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsTreningi"
            onClick={scrollTo('timetable')}
          >
            <ListItemIcon>
              <Schedule />
            </ListItemIcon>
            <ListItemText>Harmonogram treningów</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsRODO"
            onClick={handleOpenDrawer}
            className="open-rodo"
          >
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText>RODO</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <MenuButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IRS Sport
          </Typography>
          <IconButton
            edge="end"
            href="https://www.youtube.com/channel/UCu0dFoZJMJmgubPZqP0Q6Qw/videos"
            target="_blank"
          >
            <YouTube />
          </IconButton>
          <IconButton
            edge="end"
            href="https://www.facebook.com/IRSsportywalki"
            target="_blank"
          >
            <Facebook />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        onClose={handleCloseDrawer}
        open={isDrawerOpened}
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
