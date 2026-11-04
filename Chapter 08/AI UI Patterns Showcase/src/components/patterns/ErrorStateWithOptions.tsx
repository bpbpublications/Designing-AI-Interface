import { Button, Paper, Box, Typography } from '@mui/material';

export function ErrorStateWithOptions() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>AI Failed:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Could not connect to server."</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Retry]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Escalate]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Ignore]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}