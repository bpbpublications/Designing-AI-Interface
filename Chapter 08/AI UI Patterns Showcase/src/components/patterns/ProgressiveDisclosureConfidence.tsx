import { Button, Paper, Box, Typography, LinearProgress } from '@mui/material';

export function ProgressiveDisclosureConfidence() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 'medium' }}>AI Output:</Box> "The capital of Brazil is Brasília."
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography variant="body2">Confidence:</Typography>
            <Typography variant="body2">(82%)</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={82} 
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
        
        <Button 
          variant="outlined" 
          size="small" 
          sx={{ color: 'primary.main' }}
        >
          See Details
        </Button>
      </Box>
    </Paper>
  );
}