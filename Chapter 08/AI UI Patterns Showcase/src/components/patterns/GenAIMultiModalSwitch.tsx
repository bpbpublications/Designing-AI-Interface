import { Button, Paper, Box, Typography } from '@mui/material';

export function GenAIMultiModalSwitch() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Output Mode:</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Text]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Image]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Code]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}