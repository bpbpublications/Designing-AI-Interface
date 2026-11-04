import { Button, Paper, Box } from '@mui/material';

export function KillSwitch() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="contained"
            size="large"
            sx={{ 
              bgcolor: 'error.main',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'error.dark'
              }
            }}
          >
            [STOP AI NOW]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}