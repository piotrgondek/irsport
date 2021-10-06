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
  Button,
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
  MonetizationOn,
  LocationOn,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import RodoPoint from './RodoPoint';
import { ReactComponent as IrsIcon } from './assets/IRS.svg';
import { dark } from './themes';
import resources from './i18n/config';

interface AppBarProps {
  coach: React.MutableRefObject<HTMLElement | null>
  timetable: React.MutableRefObject<HTMLElement | null>
  movies: React.MutableRefObject<HTMLElement | null>
  footer: React.MutableRefObject<HTMLElement | null>
  pricing: React.MutableRefObject<HTMLElement | null>
  map: React.MutableRefObject<HTMLElement | null>
}

type Section = keyof AppBarProps;

const AppBar: React.FC<AppBarProps> = (props) => {
  const [isDrawerOpened, setOpenDrawer] = React.useState<boolean>();
  const md = useMediaQuery(dark.breakpoints.up('md'));
  const { t, i18n } = useTranslation();

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const otherLanguage = () => Object.keys(resources).find((lang) => lang !== i18n.language);

  const changeLanguage = () => {
    const newLanguage = otherLanguage();
    i18n.changeLanguage(newLanguage);
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
            <ListItemText>{t('appbar.menu.coach')}</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsTreningi"
            onClick={scrollTo('timetable')}
          >
            <ListItemIcon>
              <Schedule />
            </ListItemIcon>
            <ListItemText>{t('appbar.menu.timetable')}</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsCennink"
            onClick={scrollTo('pricing')}
          >
            <ListItemIcon>
              <MonetizationOn />
            </ListItemIcon>
            <ListItemText>{t('appbar.menu.pricing')}</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsMap"
            onClick={scrollTo('map')}
          >
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText>{t('appbar.menu.location')}</ListItemText>
          </MenuItem>
          <MenuItem
            id="irsFilmy"
            onClick={scrollTo('movies')}
          >
            <ListItemIcon>
              <PlayCircle />
            </ListItemIcon>
            <ListItemText>{t('appbar.menu.movies')}</ListItemText>
          </MenuItem>
          {md && (
            <MenuItem
              id="irsFooter"
              onClick={scrollTo('footer')}
            >
              <ListItemIcon>
                <ContactPhone />
              </ListItemIcon>
              <ListItemText>{t('appbar.menu.contact')}</ListItemText>
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
            <ListItemText>{t('appbar.menu.rodo')}</ListItemText>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {t('appbar.irsport')}
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
          <Button onClick={changeLanguage}>
            {otherLanguage()}
          </Button>
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
        <RodoPoint header={t('rodo.point1.header')}>
          <List>
            <ListItem>
              <ListItemText>
                {t('rodo.point1.point1')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point1.point2')}
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="body2">
            {t('rodo.point1.footer')}
          </Typography>
        </RodoPoint>

        <RodoPoint header={t('rodo.point2.header')}>
          <List>
            <ListItem>
              <ListItemText>
                {t('rodo.point2.point1')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point2.point2')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point2.point3')}
              </ListItemText>
            </ListItem>
          </List>
        </RodoPoint>

        <RodoPoint header={t('rodo.point3.header')}>
          <Typography variant="body1">
            {t('rodo.point3.content')}
          </Typography>
        </RodoPoint>

        <RodoPoint header={t('rodo.point4.header')}>
          <Typography variant="body1">
            {t('rodo.point4.content')}
          </Typography>
        </RodoPoint>

        <RodoPoint header={t('rodo.point5.header')}>
          <List>
            <ListItem>
              <ListItemText>
                {t('rodo.point5.point1')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point5.point2')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point5.point3')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point5.point4')}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {t('rodo.point5.point5')}
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="body2">
            {t('rodo.point5.footer')}
          </Typography>
        </RodoPoint>
      </Drawer>
    </>
  );
};

export default AppBar;
