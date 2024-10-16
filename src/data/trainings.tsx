import { CustomTypeOptions } from 'react-i18next';

type Day = 'mo' | 'tu' | 'we' | 'th' | 'fr';

export const days: Array<Day> = ['mo', 'tu', 'we', 'th', 'fr'];

type TimeTableKeys = keyof CustomTypeOptions['resources']['pl']['timetable'];

export type CellContent = {
  body1: TimeTableKeys;
  body2?: TimeTableKeys;
  overline:
  | '8:00 - 9:00'
  | '11:00 - 12:30'
  | '16:00 - 17:00'
  | '16:15 - 17:00'
  | '17:00 - 18:00'
  | '17:15 - 18:00'
  | '18:00 - 19:00'
  | '19:00 - 20:00'
  | '20:00 - 21:00'
  | '20:00 - 21:30';
};

type Table = Record<Day, Array<CellContent | null>>;

export const table: Table = {
  mo: [
    null,
    {
      body1: 'irsKids',
      overline: '17:15 - 18:00',
    },
    {
      body1: 'boxingWomen',
      body2: 'combined',
      overline: '18:00 - 19:00',
    },
    {
      body1: 'boxing',
      body2: 'advanced',
      overline: '19:00 - 20:00',
    },
  ],
  tu: [
    {
      body1: 'combinedBoxing',
      body2: 'enrolments',
      overline: '8:00 - 9:00',
    },
    {
      body1: 'kickboxing',
      body2: 'combined',
      overline: '17:00 - 18:00',
    },
    {
      body1: 'fightCross',
      overline: '18:00 - 19:00',
    },
    {
      body1: 'boxing',
      body2: 'beginner',
      overline: '19:00 - 20:00',
    },
    {
      body1: 'jiuJitsuGroundFloor',
      overline: '20:00 - 21:00'
    }
  ],
  we: [
    null,
    {
      body1: 'irsKids',
      overline: '17:15 - 18:00',
    },
    {
      body1: 'boxing',
      body2: 'advanced',
      overline: '18:00 - 19:00',
    },
    {
      body1: 'boxingSparrings',
      overline: '19:00 - 20:00',
    },
  ],
  th: [
    {
      body1: 'combinedBoxing',
      body2: 'enrolments',
      overline: '8:00 - 9:00',
    },
    {
      body1: 'kickboxing',
      body2: 'combined',
      overline: '17:00 - 18:00',
    },
    {
      body1: 'boxing',
      body2: 'combined',
      overline: '18:00 - 19:00',
    },
    {
      body1: 'stretchingNeuromobilty',
      overline: '19:00 - 20:00',
    },
    {
      body1: 'jiuJitsuGroundFloor',
      overline: '20:00 - 21:00'
    }
  ],
  fr: [
    null,
    null,
    {
      body1: 'boxingWomen',
      body2: 'combined',
      overline: '18:00 - 19:00',
    },
    {
      body1: 'boxing',
      body2: 'beginner',
      overline: '19:00 - 20:00',
    },
  ],
};

const numberOfEvents = Math.max(...days.map((d) => table[d].length));
export const events = Array.from(Array(numberOfEvents).keys());
