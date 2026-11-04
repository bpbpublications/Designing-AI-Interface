import { Button, Paper, Box, Typography } from '@mui/material';

export function GenAIRegenerateEditLoop() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>Draft:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Hello, your order is shipped."</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Regenerate]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Refine]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Keep]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}