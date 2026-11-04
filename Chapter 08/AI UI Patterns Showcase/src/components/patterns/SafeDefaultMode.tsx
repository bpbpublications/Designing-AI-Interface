import { Paper, Box, Typography } from '@mui/material';

export function SafeDefaultMode() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2">
          <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Default</Box> Action:{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>[Save Draft]</Box>{' '}
          (instead of{' '}
          <Box component="span" sx={{ color: 'warning.main', textDecoration: 'line-through' }}>auto-send</Box>)
        </Typography>
      </Box>
    </Paper>
  );
}