import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Done } from '@mui/icons-material';

interface RodoPointProps {
  header: string
}

const RodoPoint: React.FC<RodoPointProps> = ({ header, children }) => (
  <Box sx={{
    m: 2,
  }}
  >
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <CardContent>
        <Done
          sx={{
            fontSize: {
              lg: '4rem',
              md: '2rem',
              xm: '1rem',
            },
          }}
        />
      </CardContent>
      <CardContent>
        <Typography variant="h6">
          {header}
        </Typography>
        {children}
      </CardContent>
    </Card>
  </Box>
);

export default RodoPoint;
