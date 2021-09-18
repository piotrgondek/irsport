import React from 'react';
import {
  IconButton,
  SpeedDial as MuiSpeedDial,
  SpeedDialAction,
} from '@mui/material';
import {
  Contacts,
  Phone,
  Mail,
  Map,
} from '@mui/icons-material';

const actions = [
  {
    icon: (
      <IconButton href="mailto:instytutrozwojusportu@gmail.com" target="_blank">
        <Mail />
      </IconButton>
    ),
    name: 'instytutrozwojusportu@gmail.com',
  },
  {
    icon: (
      <IconButton href="tel:535673205" target="_blank">
        <Phone />
      </IconButton>
    ),
    name: '535 673 205',
  },
  {
    icon: (
      <IconButton href="https://goo.gl/maps/iEsyVu59UeEajRh18" target="_blank">
        <Map />
      </IconButton>
    ),
    name: 'ul. Wrocławska 11a Kraków',
  },
];

const SpeedDial: React.FC = () => (
  <MuiSpeedDial
    ariaLabel="Kontakt"
    sx={{
      position: 'fixed',
      bottom: (theme) => theme.spacing(6),
      right: (theme) => theme.spacing(6),
    }}
    icon={(
      <Contacts
        className="irs-kontakt"
      />
    )}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    ))}
  </MuiSpeedDial>
);

export default SpeedDial;