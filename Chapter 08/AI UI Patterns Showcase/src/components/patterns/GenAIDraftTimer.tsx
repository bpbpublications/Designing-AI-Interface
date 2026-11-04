import { useState, useEffect } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  LinearProgress
} from '@mui/material';

export function GenAIDraftTimer() {
  const [seconds, setSeconds] = useState(6);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    if (isGenerating && seconds > 0) {
      const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      setIsGenerating(false);
    }
  }, [seconds, isGenerating]);

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="scss" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {isGenerating ? 'Generating Draft...' : 'Draft Complete!'} 
            {isGenerating && (
              <Box component="span" sx={{ color: 'orange', ml: 1 }}>
                ({seconds}s)
              </Box>
            )}
          </Typography>
          
          {isGenerating && (
            <LinearProgress 
              variant="determinate" 
              value={((6 - seconds) / 6) * 100} 
              sx={{ mt: 2 }}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}