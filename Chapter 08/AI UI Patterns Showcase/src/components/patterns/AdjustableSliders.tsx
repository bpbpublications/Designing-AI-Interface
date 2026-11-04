import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Slider,
  Chip
} from '@mui/material';
import { Tune } from '@mui/icons-material';
import { useState } from 'react';

export function AdjustableSliders() {
  const [formality, setFormality] = useState(75);
  const [creativity, setCreativity] = useState(60);
  const [currentText, setCurrentText] = useState("The project results exceeded our expectations with innovative solutions.");

  const updateText = (formalityValue: number, creativityValue: number) => {
    if (formalityValue > 70 && creativityValue > 70) {
      setCurrentText("The project deliverables demonstrated exceptional innovation while maintaining rigorous professional standards and exceeding established benchmarks.");
    } else if (formalityValue > 70 && creativityValue < 40) {
      setCurrentText("The project results met all specified requirements and achieved the predetermined objectives within the established parameters.");
    } else if (formalityValue < 40 && creativityValue > 70) {
      setCurrentText("Wow! This project totally blew our minds with some seriously creative solutions that came out of left field!");
    } else if (formalityValue < 40 && creativityValue < 40) {
      setCurrentText("The project went okay and we got the basic stuff done.");
    } else {
      setCurrentText("The project results exceeded our expectations with innovative solutions.");
    }
  };

  const handleFormalityChange = (event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setFormality(value);
    updateText(value, creativity);
  };

  const handleCreativityChange = (event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setCreativity(value);
    updateText(formality, value);
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
            <Tune sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Adjustable Sliders
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
              Formality: <Box component="span" sx={{ color: 'error.main' }}>|████████—|</Box>
            </Typography>
            <Typography variant="body1">
              Creativity: <Box component="span" sx={{ color: 'error.main' }}>|██████—|</Box>
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

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="error.main" sx={{ fontWeight: 'bold' }}>
                  Formality:
                </Typography>
                <Chip 
                  label={`${formality}%`}
                  size="small" 
                  color="error"
                />
              </Box>
              <Slider
                value={formality}
                onChange={handleFormalityChange}
                valueLabelDisplay="auto"
                color="error"
                sx={{
                  '& .MuiSlider-track': {
                    height: 8,
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
            </Box>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="error.main" sx={{ fontWeight: 'bold' }}>
                  Creativity:
                </Typography>
                <Chip 
                  label={`${creativity}%`}
                  size="small" 
                  color="error"
                />
              </Box>
              <Slider
                value={creativity}
                onChange={handleCreativityChange}
                valueLabelDisplay="auto"
                color="error"
                sx={{
                  '& .MuiSlider-track': {
                    height: 8,
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
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Fine-tune writing style with continuous parameter adjustment for precise control.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}