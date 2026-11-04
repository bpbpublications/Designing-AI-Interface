import { Paper, Box, Typography } from '@mui/material';

export function AgenticExecutionQueue() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2, color: 'warning.main', fontWeight: 'bold' }}>
          Queue:
        </Typography>
        
        <Box sx={{ '& > *': { mb: 0.5 } }}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main' }}>-</Box>{' '}
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Task 1:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Approve invoice</Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main' }}>-</Box>{' '}
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Task 2:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Update ledger</Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main' }}>-</Box>{' '}
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Task 3:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Notify supplier</Box>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}