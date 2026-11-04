import { Paper, Box, Typography } from '@mui/material';

export function GenAIInlineRationale() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>AI:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Use keyword 'sustainability'"</Box>
        </Typography>
        
        <Typography variant="body2">
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Reason:</Box>{' '}
          Found in 3 recent articles
        </Typography>
      </Box>
    </Paper>
  );
}