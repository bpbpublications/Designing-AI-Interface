import { Button, Paper, Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export function GenAIContentFilterAlert() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Warning sx={{ width: 16, height: 16, color: 'warning.main' }} />
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>AI</Box> detected biased phrase:{' '}
            <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"girls can't code"</Box>
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Revise]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'error.main', borderColor: 'error.main' }}
          >
            [Ignore]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}