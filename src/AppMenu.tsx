import React from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
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
import { RefsContextProps } from './common/contexts/RefsContext';
import useRefs from './common/hooks/useRefs';
import useAppState from './common/hooks/useAppState';

type Section = keyof RefsContextProps;

const AppMenu: React.FC = () => {
  const sections = useRefs();
  const { dispatch } = useAppState();
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = React.useState<Section | undefined>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    if (selectedSection) {
      sections[selectedSection].current!.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      setSelectedSection(undefined);
    }
  }, [selectedSection, sections]);

  const handleOpenDrawer = () => {
    setAnchorEl(null);
    dispatch({ type: 'OPEN_RODO' });
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleScrollTo = (section: Section) => () => {
    handleCloseMenu();
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
        onClick={handleOpenMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="irsAdamWargal" onClick={handleScrollTo('coachRef')}>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.about')}</ListItemText>
        </MenuItem>
        <MenuItem id="irsTreningi" onClick={handleScrollTo('timetableRef')}>
          <ListItemIcon>
            <Schedule />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.timetable')}</ListItemText>
        </MenuItem>
        <MenuItem id="irsCennink" onClick={handleScrollTo('pricingRef')}>
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.pricing')}</ListItemText>
        </MenuItem>
        <MenuItem id="irsMap" onClick={handleScrollTo('mapRef')}>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.location')}</ListItemText>
        </MenuItem>
        <MenuItem id="irsFilmy" onClick={handleScrollTo('moviesRef')}>
          <ListItemIcon>
            <PlayCircle />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.movies')}</ListItemText>
        </MenuItem>
        <MenuItem id="irsFooter" onClick={handleScrollTo('footerRef')}>
          <ListItemIcon>
            <ContactPhone />
          </ListItemIcon>
          <ListItemText>{t('appbar.menu.contact')}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem id="irsRODO" onClick={handleOpenDrawer} className="open-rodo">
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
