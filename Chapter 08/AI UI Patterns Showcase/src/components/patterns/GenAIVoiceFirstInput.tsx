import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  IconButton
} from '@mui/material';
import { Mic, VolumeUp } from '@mui/icons-material';

export function GenAIVoiceFirstInput() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleVoiceInput = () => {
    setIsListening(!isListening);
  };

  const handleSpeakSummary = () => {
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="makefile" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <IconButton 
              onClick={handleVoiceInput}
              color={isListening ? "primary" : "default"}
              sx={{ color: isListening ? 'primary.main' : 'text.secondary' }}
            >
              <Mic />
            </IconButton>
            <Typography variant="body1" sx={{ color: 'green' }}>
              "Summarize this article..."
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: 'error.main' }}>
              AI:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" sx={{ color: 'error.main' }}>
                [Speaking summary back]
              </Typography>
              <IconButton 
                onClick={handleSpeakSummary}
                size="small"
                color={isSpeaking ? "primary" : "default"}
              >
                <VolumeUp />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}