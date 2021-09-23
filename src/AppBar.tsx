/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  AppBar as MuiAppBar,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  SvgIcon,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  YouTube,
  Close,
  Menu as MenuIcon,
  AssignmentInd,
  Person,
  Schedule,
  PlayCircle,
  ContactPhone,
} from '@mui/icons-material';
import RodoPoint from './RodoPoint';
import { ReactComponent as IrsIcon } from './assets/IRS.svg';
import { dark } from './themes';

interface AppBarProps {
  coach: React.MutableRefObject<HTMLElement | null>
  timetable: React.MutableRefObject<HTMLElement | null>
  movies: React.MutableRefObject<HTMLElement | null>
  footer: React.MutableRefObject<HTMLElement | null>
}

type Section = keyof AppBarProps;

const AppBar: React.FC<AppBarProps> = (props) => {
  const [isDrawerOpened, setOpenDrawer] = React.useState<boolean>();
  const md = useMediaQuery(dark.breakpoints.up('md'));

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const MenuButton: React.FC = () => {
    const [selectedSection, setSelectedSection] = React.useState<Section | undefined>();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    React.useEffect(
      () => {
        if (selectedSection) {
          props[selectedSection]
            .current!
            .scrollIntoView({ block: 'start', behavior: 'smooth' });
          setSelectedSection(undefined);
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
            id="irsFilmy"
            onClick={scrollTo('movies')}
          >
            <ListItemIcon>
              <PlayCircle />
            </ListItemIcon>
            <ListItemText>Filmy</ListItemText>
          </MenuItem>
          {md && (
            <MenuItem
              id="irsFooter"
              onClick={scrollTo('footer')}
            >
              <ListItemIcon>
                <ContactPhone />
              </ListItemIcon>
              <ListItemText>Kontakt</ListItemText>
            </MenuItem>
          )}
          <Divider />
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
          <SvgIcon
            fontSize="large"
            component={IrsIcon}
            viewBox="0 0 1786 1586"
            sx={{ mr: 2 }}
          />
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
        <RodoPoint header="Administratorami danych osobowych są">
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

          <Typography variant="body2">
            Przetwarzanie danych osobowych odbywa się na zasadach współadministracji (art. 26 RODO)
          </Typography>
        </RodoPoint>

        <RodoPoint header="Cel przetwarzania danych">
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
        </RodoPoint>

        <RodoPoint header="Podstawa przetwarzania danych">
          <Typography variant="body1">
            Art. 6 ust. 1 lit b) RODO – wykonanie umowy, której stroną jest osoba, której dane dotyczą.
          </Typography>
        </RodoPoint>

        <RodoPoint header="Dane osobowe nie są przekazywane odbiorcom">
          <Typography variant="body1">
            Dane będą przechowywane przez okres trwania umowy oraz po jej zakończeniu przez czas niezbędny do
            zabezpieczenia dochodzenia roszczeń.
          </Typography>
        </RodoPoint>

        <RodoPoint header="Osoba, której dane dotyczą, ma prawo">
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

          <Typography variant="body2">
            Podanie danych osobowych jest dobrowolne, jednak warunkuje udział w zajęciach sportowych prowadzonych
            przez IRS i Wargalsport.
          </Typography>
        </RodoPoint>
      </Drawer>
    </>
  );
};

export default AppBar;
