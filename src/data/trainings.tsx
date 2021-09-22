import { Typography } from '@mui/material';
import * as React from 'react';

export const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

export const table = {
  [days[0]]: [
    null,
    (
      <>
        <Typography variant="body1">Kickboxing</Typography>
        <Typography variant="body2">IRS kids dzieci</Typography>
        <Typography variant="overline">17:00 - 18:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks dla kobiet</Typography>
        <Typography variant="body2">łączona</Typography>
        <Typography variant="overline">18:00 - 19:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">zaawansowana</Typography>
        <Typography variant="overline">19:00 - 20:00</Typography>
      </>
    ),
  ],
  [days[1]]: [
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="overline">8:00 - 9:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Kickboxing</Typography>
        <Typography variant="body2">łączona</Typography>
        <Typography variant="overline">17:00 - 18:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Fight Cross</Typography>
        <Typography variant="body2">trening siłowo-wytrzymałościowy</Typography>
        <Typography variant="overline">18:00 - 19:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">początkująca</Typography>
        <Typography variant="overline">19:00 - 20:00</Typography>
      </>
    ),
  ],
  [days[2]]: [
    null,
    (
      <>
        <Typography variant="body1">Kickboxing</Typography>
        <Typography variant="body2">IRS kids dzieci</Typography>
        <Typography variant="overline">17:00 - 18:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">zaawansowana</Typography>
        <Typography variant="overline">18:00 - 19:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">sparingi</Typography>
        <Typography variant="overline">19:00 - 20:00</Typography>
      </>
    ),
  ],
  [days[3]]: [
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="overline">8:00 - 9:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Kickboxing</Typography>
        <Typography variant="body2">łączona</Typography>
        <Typography variant="overline">17:00 - 18:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks dla kobiet</Typography>
        <Typography variant="body2">zaawansowana</Typography>
        <Typography variant="overline">18:00 - 19:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">zaawansowana</Typography>
        <Typography variant="overline">19:00 - 20:00</Typography>
      </>
    ),
  ],
  [days[4]]: [
    null,
    null,
    (
      <>
        <Typography variant="body1">Boks dla kobiet</Typography>
        <Typography variant="body2">początkująca</Typography>
        <Typography variant="overline">18:00 - 19:00</Typography>
      </>
    ),
    (
      <>
        <Typography variant="body1">Boks</Typography>
        <Typography variant="body2">początkująca</Typography>
        <Typography variant="overline">19:00 - 20:00</Typography>
      </>
    ),
  ],
};

const numberOfEvents = Math.max(...days.map((d) => table[d].length));
export const events = Array.from(Array(numberOfEvents).keys());
