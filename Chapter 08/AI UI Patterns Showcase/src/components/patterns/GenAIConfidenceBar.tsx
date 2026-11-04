import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  LinearProgress
} from '@mui/material';

export function GenAIConfidenceBar() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="vbnet" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <Box component="span" sx={{ color: 'primary.main' }}>Answer:</Box>
            <Box component="span" sx={{ color: 'green', ml: 1 }}>"Brasilia is the capital"</Box>
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: 'primary.main' }}>
              Confidence:
            </Typography>
            <Box sx={{ flex: 1, maxWidth: 200 }}>
              <LinearProgress 
                variant="determinate" 
                value={78} 
                sx={{ 
                  height: 8,
                  backgroundColor: 'grey.300',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'black'
                  }
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: 'orange' }}>
              (78%)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}