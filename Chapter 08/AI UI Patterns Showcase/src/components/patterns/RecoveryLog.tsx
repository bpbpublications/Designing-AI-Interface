import { Paper, Box, Typography } from '@mui/material';

export function RecoveryLog() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Undo History:
        </Typography>
        
        <Box sx={{ '& > *': { mb: 0.5 } }}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'error.main' }}>-</Box>{' '}
            <Box component="span" sx={{ color: 'error.main' }}>Invoice approval rolled back</Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'error.main' }}>-</Box>{' '}
            <Box component="span" sx={{ color: 'error.main' }}>Calendar invite canceled</Box>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}