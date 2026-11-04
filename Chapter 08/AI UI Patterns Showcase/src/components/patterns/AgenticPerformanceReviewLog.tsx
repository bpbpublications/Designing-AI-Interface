import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Rating
} from '@mui/material';

export function AgenticPerformanceReviewLog() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="arduino" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <Box component="span" sx={{ color: 'orange' }}>Task</Box> Completed: 
            <Box component="span" sx={{ color: 'green', ml: 1 }}>"Supplier Payment"</Box>
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1">Rating:</Typography>
            <Rating 
              value={4} 
              readOnly 
              size="small"
              sx={{ color: 'orange' }}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}