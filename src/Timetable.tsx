import React from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { days, table, events } from './data/trainings';

const Timetable: React.FC = () => {
  const memTable = React.useMemo(() => table, []);

  return (
    <Card className="treningi">
      <CardContent>
        <Typography variant="h2">Harmonogram zajęć</Typography>
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
      </CardContent>
    </Card>
  );
};

export default Timetable;
