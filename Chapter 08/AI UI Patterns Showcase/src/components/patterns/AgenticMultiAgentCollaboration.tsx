import { Paper, Box, Typography } from '@mui/material';

export function AgenticMultiAgentCollaboration() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Box sx={{ '& > *': { mb: 0.5 } }}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Agent A:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Collects data</Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Agent B:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Analyzes patterns</Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'warning.main', fontWeight: 'bold' }}>Agent C:</Box>{' '}
            <Box component="span" sx={{ color: 'success.main' }}>Prepares report</Box>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}