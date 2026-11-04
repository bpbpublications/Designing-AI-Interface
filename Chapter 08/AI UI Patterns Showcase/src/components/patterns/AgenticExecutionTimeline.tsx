import { 
  Paper, 
  Typography, 
  Box, 
  Chip
} from '@mui/material';

export function AgenticExecutionTimeline() {
  const timelineItems = [
    { time: '10:00', action: 'Data Fetch', color: 'error.main' },
    { time: '10:05', action: 'Validation', color: 'error.main' },
    { time: '10:10', action: 'Approval Pending', color: 'error.main' }
  ];

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="makefile" size="small" variant="outlined" />
        </Box>
        
        <Box>
          {timelineItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ color: item.color, minWidth: 50 }}
              >
                {item.time}
              </Typography>
              <Typography variant="body2" sx={{ mx: 1 }}>→</Typography>
              <Typography variant="body1">{item.action}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}