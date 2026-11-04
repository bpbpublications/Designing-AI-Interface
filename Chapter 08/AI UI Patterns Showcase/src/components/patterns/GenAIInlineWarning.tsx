import { Paper, Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export function GenAIInlineWarning() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Warning sx={{ width: 16, height: 16, color: 'warning.main' }} />
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Date format</Box>{' '}
            may be incorrect
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}