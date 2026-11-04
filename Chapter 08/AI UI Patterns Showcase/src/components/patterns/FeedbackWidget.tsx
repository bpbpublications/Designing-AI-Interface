import { Button, Paper, Box, Typography } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

export function FeedbackWidget() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 'medium' }}>AI Output:</Box> "The sky appears blue due to scattering."
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<ThumbUp />}
          >
            Helpful
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<ThumbDown />}
          >
            Not Accurate
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}