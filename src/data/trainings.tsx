import * as React from 'react';

export const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

export const table = {
  [days[0]]: [
    null,
    (
      <>
        <div>Kickboxing</div>
        <div>IRS kids dzieci</div>
        <div>17:00 - 18:00</div>
      </>
    ),
    (
      <>
        <div>Boks dla kobiet</div>
        <div>łączona</div>
        <div>18:00 - 19:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>zaawansowana</div>
        <div>19:00 - 20:00</div>
      </>
    ),
  ],
  [days[1]]: [
    (
      <>
        <div>Boks</div>
        <div>8:00 - 9:00</div>
      </>
    ),
    (
      <>
        <div>Kickboxing</div>
        <div>łączona</div>
        <div>17:00 - 18:00</div>
      </>
    ),
    (
      <>
        <div>
          Fight Cross
          <br />
          trening siłowo-wytrzymałościowy
        </div>
        <div>18:00 - 19:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>początkująca</div>
        <div>19:00 - 20:00</div>
      </>
    ),
  ],
  [days[2]]: [
    null,
    (
      <>
        <div>Kickboxing</div>
        <div>IRS kids dzieci</div>
        <div>17:00 - 18:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>zaawansowana</div>
        <div>18:00 - 19:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>sparingi</div>
        <div>19:00 - 20:00</div>
      </>
    ),
  ],
  [days[3]]: [
    (
      <>
        <div>Boks</div>
        <div>8:00 - 9:00</div>
      </>
    ),
    (
      <>
        <div>Kickboxing</div>
        <div>łączona</div>
        <div>17:00 - 18:00</div>
      </>
    ),
    (
      <>
        <div>Boks dla kobiet</div>
        <div>zaawansowana</div>
        <div>18:00 - 19:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>zaawansowana</div>
        <div>19:00 - 20:00</div>
      </>
    ),
  ],
  [days[4]]: [
    null,
    null,
    (
      <>
        <div>Boks dla kobiet</div>
        <div>początkująca</div>
        <div>18:00 - 19:00</div>
      </>
    ),
    (
      <>
        <div>Boks</div>
        <div>początkująca</div>
        <div>19:00 - 20:00</div>
      </>
    ),
  ],
};

const numberOfEvents = Math.max(...days.map((d) => table[d].length));
export const events = Array.from(Array(numberOfEvents).keys());
