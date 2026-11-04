import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  Button
} from '@mui/material';
import { Keyboard, Refresh, TextFields, Image, Code } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export function ModeCyclingShortcut() {
  const [currentMode, setCurrentMode] = useState(0);
  const [keyPressed, setKeyPressed] = useState(false);

  const modes = [
    { 
      name: 'Text', 
      icon: <TextFields />, 
      color: 'primary',
      output: 'A comprehensive guide to machine learning fundamentals...'
    },
    { 
      name: 'Image', 
      icon: <Image />, 
      color: 'warning',
      output: '[🖼️ Diagram showing ML workflow would appear here]'
    },
    { 
      name: 'Code', 
      icon: <Code />, 
      color: 'error',
      output: 'import tensorflow as tf\n\nmodel = tf.keras.Sequential([...])'
    }
  ];

  const cycleMode = () => {
    setKeyPressed(true);
    setCurrentMode((prev) => (prev + 1) % modes.length);
    setTimeout(() => setKeyPressed(false), 200);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'm') {
        event.preventDefault();
        cycleMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            <Keyboard sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Mode Cycling Shortcut
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
              vbnet
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'primary.main' }}>Shortcut:</Box>{' '}
              <Box component="span" sx={{ color: 'error.main' }}>Ctrl+M</Box> →{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>Cycle</Box>{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>Text</Box> →{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>Image</Box> →{' '}
              <Box component="span" sx={{ color: 'error.main' }}>Code</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              mb: 2 
            }}>
              <Typography variant="body2" color="text.secondary">
                Current Mode:
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip
                  icon={modes[currentMode].icon}
                  label={modes[currentMode].name}
                  color={modes[currentMode].color as any}
                  sx={{ 
                    transform: keyPressed ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.2s ease'
                  }}
                />
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  px: 1,
                  py: 0.5,
                  bgcolor: 'grey.800',
                  color: 'white',
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontFamily: 'monospace'
                }}>
                  Ctrl+M
                </Box>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              border: '2px solid',
              borderColor: `${modes[currentMode].color}.light`,
              bgcolor: `${modes[currentMode].color}.50`,
              minHeight: '80px',
              transition: 'all 0.3s ease'
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: currentMode === 2 ? 'monospace' : 'inherit',
                  whiteSpace: currentMode === 2 ? 'pre-line' : 'normal',
                  color: currentMode === 1 ? `${modes[currentMode].color}.main` : 'text.primary',
                  fontStyle: currentMode === 1 ? 'italic' : 'normal'
                }}
              >
                {modes[currentMode].output}
              </Typography>
            </Paper>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mt: 2,
              gap: 2
            }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<Refresh />}
                onClick={cycleMode}
                color="info"
              >
                Cycle Mode (Ctrl+M)
              </Button>
              
              <Typography variant="caption" color="text.secondary">
                Try pressing Ctrl+M
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 1,
              mt: 2
            }}>
              {modes.map((mode, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: currentMode === index ? `${mode.color}.main` : 'grey.300',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Quick keyboard shortcut to cycle through different output modes without mouse interaction.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}