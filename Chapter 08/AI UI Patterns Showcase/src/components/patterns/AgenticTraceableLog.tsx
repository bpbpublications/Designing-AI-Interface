import { Paper, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export function AgenticTraceableLog() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
          Log:
        </Typography>
        
        <Box sx={{ '& > *': { mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 } }}>
          <Typography variant="body2">
            <CheckCircle sx={{ width: 16, height: 16, color: 'success.main' }} />
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Step 1:</Box>{' '}
            Validated invoice
          </Typography>
          <Typography variant="body2">
            <CheckCircle sx={{ width: 16, height: 16, color: 'success.main' }} />
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Step 2:</Box>{' '}
            Matched contract
          </Typography>
          <Typography variant="body2">
            <CheckCircle sx={{ width: 16, height: 16, color: 'success.main' }} />
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Step 3:</Box>{' '}
            Payment scheduled
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}