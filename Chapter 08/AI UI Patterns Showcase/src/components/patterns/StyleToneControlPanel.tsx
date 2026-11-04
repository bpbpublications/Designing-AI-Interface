import { Button, Paper, Box, Typography } from '@mui/material';

export function StyleToneControlPanel() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Tone:
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            Formal
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            Casual
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            Concise
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            Friendly
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}