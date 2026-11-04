import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  ButtonGroup,
  Button,
  Chip
} from '@mui/material';
import { Tune, CheckCircle } from '@mui/icons-material';
import { useState } from 'react';

export function ToneSwitcher() {
  const [selectedTone, setSelectedTone] = useState('formal');
  const [currentText, setCurrentText] = useState("Please complete the report by Friday.");

  const tones = {
    formal: "Please ensure the report is completed by the end of the business day on Friday.",
    casual: "Hey, can you get that report done by Friday?",
    concise: "Report due Friday.",
    friendly: "Hi! Would you mind finishing up the report by Friday? Thanks so much!"
  };

  const handleToneChange = (tone: string) => {
    setSelectedTone(tone);
    setCurrentText(tones[tone as keyof typeof tones]);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'primary.light',
        bgcolor: 'primary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Tune sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Tone Switcher
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
              makefile
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Tone: <Box component="span" sx={{ color: 'error.main' }}>[Formal] [Casual] [Concise] [Friendly]</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Current Text:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'primary.light',
              bgcolor: 'white',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Typography variant="body1">
                "{currentText}"
              </Typography>
            </Paper>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Select Tone:
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {Object.keys(tones).map((tone) => (
                <Button
                  key={tone}
                  variant={selectedTone === tone ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => handleToneChange(tone)}
                  startIcon={selectedTone === tone ? <CheckCircle sx={{ fontSize: 16 }} /> : undefined}
                  color="primary"
                  sx={{ textTransform: 'capitalize' }}
                >
                  {tone}
                </Button>
              ))}
            </Box>

            <Chip
              label={`Current tone: ${selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1)}`}
              size="small"
              color="primary"
              variant="filled"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Quick tone switching for different communication contexts and audiences.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}