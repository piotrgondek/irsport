import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { days, table, events, CellContent } from './data/trainings';
import SectionGrid from './SectionGrid';
import useRefs from './common/hooks/useRefs';

interface CellRowProps {
  cellContent: CellContent | null;
  variant: keyof CellContent;
}

const CellRow: React.FC<CellRowProps> = ({ cellContent, variant }) => {
  const { t } = useTranslation();

  return cellContent && cellContent[variant] ? (
    <Typography variant="body1">{t(`timetable.${cellContent[variant]}` as any)}</Typography>
  ) : null;
};

const Timetable: React.FC = () => {
  const { timetableRef } = useRefs();
  const { t } = useTranslation();
  const memTable = React.useMemo(() => table, []);

  return (
    <Paper ref={timetableRef}>
      <SectionGrid>
        <Typography variant="h4">{t('appbar.menu.timetable')}</Typography>
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
                    <Typography variant="subtitle1">{t(`timetable.days.${day}` as any)}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event}>
                  {days.map((day) => (
                    <TableCell key={day}>
                      <CellRow variant="body1" cellContent={memTable[day][event]} />
                      <CellRow variant="body2" cellContent={memTable[day][event]} />
                      <Typography variant="overline">{memTable[day][event]?.overline}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionGrid>
    </Paper>
  );
};

export default Timetable;
