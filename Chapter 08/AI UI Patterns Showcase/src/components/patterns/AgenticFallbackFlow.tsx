import { Paper, Box, Typography } from '@mui/material';

export function AgenticFallbackFlow() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Task</Box>{' '}
          Failed:{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Payment Gateway Down"</Box>
        </Typography>
        <Typography variant="body2">
          <Box component="span" sx={{ fontWeight: 'bold' }}>Fallback:</Box>{' '}
          <Box component="span" sx={{ color: 'warning.main' }}>[Save Draft for Later]</Box>
        </Typography>
      </Box>
    </Paper>
  );
}