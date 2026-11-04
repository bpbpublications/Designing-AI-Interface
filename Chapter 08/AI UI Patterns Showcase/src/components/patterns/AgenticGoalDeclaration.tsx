import { Button, Paper, Box, Typography } from '@mui/material';

export function AgenticGoalDeclaration() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Goal:</Box>{' '}
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>[Book Travel]</Box>
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Options:</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Destination]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Budget]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Dates]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}