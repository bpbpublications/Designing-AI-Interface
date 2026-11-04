import { Paper, Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export function AgenticPolicyAwareExecution() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Warning sx={{ width: 16, height: 16, color: 'warning.main' }} />
          <Typography variant="body2">
            Must follow rule:{' '}
            <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Expenses &gt; $500 -&gt; Manager Approval"</Box>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}