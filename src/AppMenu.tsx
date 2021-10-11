import React from 'react';
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import {
  AssignmentInd,
  ContactPhone,
  Info,
  LocationOn,
  Menu as MenuIcon,
  MonetizationOn,
  PlayCircle,
  Schedule,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Section } from './AppBar';
import { dark } from './themes';
import AppContext from './AppContext';

interface AppMenuProps {
  sections: Record<Section, React.MutableRefObject<HTMLElement | null>>
}

const AppMenu: React.FC<AppMenuProps> = ({ sections }) => {
  const { dispatch } = React.useContext(AppContext);
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = React.useState<Section | undefined>();
  const md = useMediaQuery(dark.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  React.useEffect(
    () => {
      if (selectedSection) {
          sections[selectedSection]
            .current!
            .scrollIntoView({ block: 'start', behavior: 'smooth' });
          setSelectedSection(undefined);
      }
    },
    [selectedSection],
  );

  const handleOpenDrawer = () => {
    setAnchorEl(null);
    dispatch({ type: 'OPEN_RODO' });
  };

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
            <Info />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.about')}</ListItemText>
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

export default AppMenu;
