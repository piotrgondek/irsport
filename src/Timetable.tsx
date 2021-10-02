import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { days, table, events } from './data/trainings';
import SectionGrid from './SectionGrid';

const Timetable = React.forwardRef<HTMLElement>((_, ref) => {
  const memTable = React.useMemo(() => table, []);

  return (
    <Paper ref={ref as any}>
      <SectionGrid>
        <Typography variant="h2">Harmonogram treningów</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {days.map((day) => (
                  <TableCell
                    key={day}
                    sx={{
                      width: '1rem',
                    }}
                  >
                    <Typography variant="subtitle1">{day}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event}>
                  {days.map((day) => (
                    <TableCell key={day}>{memTable[day][event]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionGrid>
    </Paper>
  );
});

export default Timetable;
