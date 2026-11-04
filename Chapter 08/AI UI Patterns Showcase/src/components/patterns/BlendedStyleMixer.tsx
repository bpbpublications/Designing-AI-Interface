import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Slider,
  Chip,
  LinearProgress
} from '@mui/material';
import { Blender, Business, SentimentSatisfied } from '@mui/icons-material';
import { useState } from 'react';

export function BlendedStyleMixer() {
  const [formalPercentage, setFormalPercentage] = useState(60);
  const [friendlyPercentage, setFriendlyPercentage] = useState(40);
  const [currentText, setCurrentText] = useState("I would like to schedule a meeting to discuss the project details at your convenience.");

  const updateText = (formal: number, friendly: number) => {
    if (formal > 80) {
      setCurrentText("It would be appropriate to schedule a formal meeting to review the project specifications at your earliest convenience.");
    } else if (formal < 20) {
      setCurrentText("Hey! Want to chat about the project? Let me know when works for you!");
    } else if (formal > 50) {
      setCurrentText("I would like to schedule a meeting to discuss the project details at your convenience.");
    } else {
      setCurrentText("Hi! I'd love to set up a meeting to go over the project details when you're free.");
    }
  };

  const handleFormalChange = (event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    const friendlyValue = 100 - value;
    setFormalPercentage(value);
    setFriendlyPercentage(friendlyValue);
    updateText(value, friendlyValue);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'warning.light',
        bgcolor: 'warning.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Blender sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Blended Style Mixer
            </Typography>
          </Box>
          
          <Box sx={{ 
            bgcolor: 'grey.100', 
            p: 2, 
            borderRadius: 1, 
            mb: 2,
            fontFamily: 'monospace'
          }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              yaml
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Tone Blend: <Box component="span" sx={{ color: 'warning.main' }}>60% Formal + 40% Friendly</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Generated Text:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 3, 
              border: '2px solid',
              borderColor: 'warning.light',
              bgcolor: 'white',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                "{currentText}"
              </Typography>
            </Paper>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Style Blend Ratio:
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Business sx={{ fontSize: 16, color: 'info.main' }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Formal
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Friendly
                  </Typography>
                  <SentimentSatisfied sx={{ fontSize: 16, color: 'success.main' }} />
                </Box>
              </Box>
              
              <Slider
                value={formalPercentage}
                onChange={handleFormalChange}
                valueLabelDisplay="auto"
                color="warning"
                sx={{
                  '& .MuiSlider-track': {
                    height: 8,
                    background: `linear-gradient(to right, #1976d2 0%, #4caf50 100%)`,
                  },
                  '& .MuiSlider-rail': {
                    height: 8,
                  },
                  '& .MuiSlider-thumb': {
                    width: 20,
                    height: 20,
                  }
                }}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Chip 
                  label={`${formalPercentage}% Formal`}
                  size="small" 
                  color="info"
                />
                <Chip 
                  label={`${friendlyPercentage}% Friendly`}
                  size="small" 
                  color="success"
                />
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50', 
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark" gutterBottom>
                <strong>Current Blend:</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formalPercentage}% Formal + {friendlyPercentage}% Friendly
              </Typography>
              <Box sx={{ mt: 1 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={formalPercentage} 
                  color="info"
                  sx={{ height: 6, borderRadius: 3 }}
                />
              </Box>
            </Paper>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Blend multiple writing styles with precise percentage control for nuanced tone mixing.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}