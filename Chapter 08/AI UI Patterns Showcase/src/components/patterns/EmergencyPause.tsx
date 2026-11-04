import { Button, Paper, Box, Typography } from '@mui/material';

export function EmergencyPause() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Task:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>Auto</Box>-sending{' '}
          <Box component="span" sx={{ color: 'info.main', fontWeight: 'bold' }}>200</Box> emails
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Status:</Box> Sending...
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Pause All]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}