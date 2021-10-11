import React from 'react';
import {
  Drawer,
  Fab,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Close,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import RodoPoint from './RodoPoint';
import AppContext from './AppContext';

const RodoDrawer: React.FC = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { t } = useTranslation();

  const handleCloseDrawer = () => {
    dispatch({ type: 'CLOSE_RODO' });
  };

  return (
    <Drawer
      onClose={handleCloseDrawer}
      open={state.isRodoVisible}
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
  );
};

export default RodoDrawer;
