import { Paper, Box, Typography, Slider } from '@mui/material';

export function AutonomySlider() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>
          Autonomy:
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', mb: 1 }}>
            <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
              [Assistive]
            </Typography>
            <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
              [Semi-Auto]
            </Typography>
            <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
              [Full Auto]
            </Typography>
          </Box>
          <Slider 
            defaultValue={50} 
            max={100} 
            step={1} 
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>
    </Paper>
  );
}