import React from 'react';
import {
  Grid,
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

const Timetable = React.forwardRef<HTMLElement>((_, ref) => {
  const memTable = React.useMemo(() => table, []);

  return (
    <Paper
      className="irs-treningi"
      ref={ref as any}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Grid
          item
          xs={11}
          md={10}
          lg={8}
        >
          <Typography variant="h2">Harmonogram treningów</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {days.map((day) => <TableCell style={{ width: '1rem' }} key={day}>{day}</TableCell>)}
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
        </Grid>
      </Grid>
    </Paper>
  );
});

export default Timetable;
