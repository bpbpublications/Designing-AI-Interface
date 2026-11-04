import { Paper, Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

export function ConfidenceWarning() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>AI</Box> Suggestion:{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Approve $10,000 invoice"</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Warning sx={{ width: 16, height: 16, color: 'warning.main' }} />
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 'bold' }}>Low Confidence</Box> - Needs Review
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}