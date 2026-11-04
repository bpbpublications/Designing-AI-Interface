import { Button, Paper, Box, Typography, Chip } from '@mui/material';

export function MultiDraftView() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1, mb: 2 }}>
            <Chip 
              label="Draft 1" 
              variant="outlined" 
              size="small" 
              sx={{ mb: 1, color: 'warning.main', borderColor: 'warning.main' }}
            />
            <Typography variant="body2">The product meets basic requirements...</Typography>
          </Box>
          
          <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1, mb: 2 }}>
            <Chip 
              label="Draft 2" 
              variant="outlined" 
              size="small" 
              sx={{ mb: 1, color: 'warning.main', borderColor: 'warning.main' }}
            />
            <Typography variant="body2">Our innovative solution delivers exceptional value...</Typography>
          </Box>
          
          <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1, mb: 2 }}>
            <Chip 
              label="Draft 3" 
              variant="outlined" 
              size="small" 
              sx={{ mb: 1, color: 'warning.main', borderColor: 'warning.main' }}
            />
            <Typography variant="body2">This breakthrough technology transforms how we...</Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" size="small">
            Select Best
          </Button>
          <Button variant="outlined" size="small">
            Merge Ideas
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}