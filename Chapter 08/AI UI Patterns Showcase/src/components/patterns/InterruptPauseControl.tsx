import { Button, Paper, Box, Typography } from '@mui/material';

export function InterruptPauseControl() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Task:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Processing 300 invoices"</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Status:</Typography>
          <Typography variant="body2">Running...</Typography>
          <Button variant="outlined" size="small">
            Pause
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            Stop
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}