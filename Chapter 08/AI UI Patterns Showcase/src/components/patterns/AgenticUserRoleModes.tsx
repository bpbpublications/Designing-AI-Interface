import { Paper, Box, Typography } from '@mui/material';

export function AgenticUserRoleModes() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Role:</Box>{' '}
          <Box component="span" sx={{ color: 'error.main' }}>[Beginner → More Guidance]</Box>
        </Typography>
        <Typography variant="body2">
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Role:</Box>{' '}
          <Box component="span" sx={{ color: 'error.main' }}>[Expert → Fewer Prompts]</Box>
        </Typography>
      </Box>
    </Paper>
  );
}