import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import { Stop, VoiceChat } from '@mui/icons-material';

export function AgenticAccessibleOverrides() {
  const [taskHalted, setTaskHalted] = useState(false);

  const handleVoiceCommand = () => {
    setTaskHalted(true);
    setTimeout(() => setTaskHalted(false), 3000);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="arduino" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="body1">Voice Command:</Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<VoiceChat />}
              onClick={handleVoiceCommand}
              sx={{ color: 'green', borderColor: 'green' }}
            >
              "Pause AI"
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: 'orange' }}>
              → Task
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1">
                {taskHalted ? 'Halted' : 'Running'}
              </Typography>
              {taskHalted && <Stop sx={{ color: 'error.main', fontSize: 16 }} />}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}