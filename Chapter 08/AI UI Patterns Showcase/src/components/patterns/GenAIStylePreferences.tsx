import { Paper, Box, Typography } from '@mui/material';

export function GenAIStylePreferences() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2">
          <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>Tone:</Box>{' '}
          <Box component="span" sx={{ color: 'error.main' }}>[Formal]</Box>{' '}
          <Box component="span" sx={{ color: 'error.main' }}>[Concise]</Box>{' '}
          <Box component="span" sx={{ color: 'error.main' }}>[Friendly]</Box>
        </Typography>
      </Box>
    </Paper>
  );
}