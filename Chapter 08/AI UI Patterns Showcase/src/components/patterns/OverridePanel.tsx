import { Button, Paper, Box, Typography } from '@mui/material';

export function OverridePanel() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>AI Action:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Block suspicious login"</Box>
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>User Options:</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'success.main', borderColor: 'success.main' }}
          >
            [Allow]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'warning.main', borderColor: 'warning.main' }}
          >
            [Confirm Block]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}