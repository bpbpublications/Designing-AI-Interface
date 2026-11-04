import { Button, Paper, Box, Typography } from '@mui/material';

export function GenAIMultiDraftComparison() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Draft A</Box> |{' '}
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Draft B</Box> |{' '}
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Draft C</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Select]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'warning.main', borderColor: 'warning.main' }}
          >
            [Merge]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}