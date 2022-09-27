import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const endDate = new Date(2022, 9, 23).getTime();

const Info: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false); //() => new Date().getTime() < endDate);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '60vw',
            md: '20vw',
          },
          bgcolor: 'background.paper',
          border: '2px solid #d32f2f',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {t('info.title')}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {t('info.content.1')}
          <br />
          {t('info.content.2')}
        </Typography>
      </Box>
    </Modal>
  );
};

export default Info;
