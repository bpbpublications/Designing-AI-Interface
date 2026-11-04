import { Button, Paper, Box, Typography } from '@mui/material';

export function GenAISidebarCompanion() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>AI Sidebar:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"This section is too long. Summarize?"</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Yes]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [No]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}