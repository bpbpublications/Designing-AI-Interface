import { Paper, Box, Typography } from '@mui/material';

export function AgenticStepPreviewPanel() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Planned Steps:
        </Typography>
        
        <Box sx={{ '& > *': { mb: 0.5 } }}>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>1.</Box>{' '}
            Search flights
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>2.</Box>{' '}
            Compare prices
          </Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>3.</Box>{' '}
            Book cheapest option
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}