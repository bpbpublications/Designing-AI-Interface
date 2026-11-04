import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { RecordVoiceOver, School, FitnessCenter, Group } from '@mui/icons-material';
import { useState } from 'react';

export function VoiceProfiles() {
  const [selectedVoice, setSelectedVoice] = useState('teacher');
  const [currentText, setCurrentText] = useState("Let's break this down step by step to make sure everyone understands the concept clearly.");

  const voices = {
    teacher: {
      icon: <School />,
      text: "Let's break this down step by step to make sure everyone understands the concept clearly.",
      description: "Instructional, patient, clear explanations"
    },
    coach: {
      icon: <FitnessCenter />,
      text: "Alright team, here's what we're going to tackle - let's push through this challenge together and make it happen!",
      description: "Motivational, energetic, supportive"
    },
    colleague: {
      icon: <Group />,
      text: "Hey, thought I'd share some insights on this - happy to discuss further if you have any questions.",
      description: "Collaborative, casual, peer-to-peer"
    }
  };

  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    setCurrentText(voices[voice as keyof typeof voices].text);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'info.light',
        bgcolor: 'info.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <RecordVoiceOver sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Voice Profiles
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
              less
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              AI Voice: <Box component="span" sx={{ color: 'error.main' }}>[Teacher] [Coach] [Colleague]</Box>
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
              borderColor: 'info.light',
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
              AI Voice Profiles:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              {Object.entries(voices).map(([key, voice]) => (
                <Button
                  key={key}
                  variant={selectedVoice === key ? 'contained' : 'outlined'}
                  onClick={() => handleVoiceChange(key)}
                  startIcon={voice.icon}
                  color="info"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    textAlign: 'left',
                    textTransform: 'none'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {voice.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            <Chip
              label={`Active voice: ${selectedVoice.charAt(0).toUpperCase() + selectedVoice.slice(1)}`}
              size="small"
              color="info"
              variant="filled"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            AI personality presets that adapt communication style and approach.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}