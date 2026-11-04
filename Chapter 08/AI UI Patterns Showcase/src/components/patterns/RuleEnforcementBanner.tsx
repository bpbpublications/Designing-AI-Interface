import { Paper, Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export function RuleEnforcementBanner() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <Warning sx={{ width: 16, height: 16, color: 'warning.main', mt: 0.25 }} />
          <Typography variant="body2">
            Must comply{' '}
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>with policy:</Box>
            {' '}"Expenses under $200 auto-approved."
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}