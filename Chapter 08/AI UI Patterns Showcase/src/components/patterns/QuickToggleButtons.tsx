import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  ButtonGroup,
  Chip
} from '@mui/material';
import { ToggleOn, SentimentSatisfied, Straighten } from '@mui/icons-material';
import { useState } from 'react';

export function QuickToggleButtons() {
  const [currentText, setCurrentText] = useState("Send me the files.");
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleToggle = (action: 'polite' | 'direct') => {
    if (action === 'polite') {
      setCurrentText("Could you please send me the files when you have a moment? Thank you!");
      setLastAction('Made Polite');
    } else {
      setCurrentText("Send files now.");
      setLastAction('Made Direct');
    }
    
    // Clear the action indicator after 2 seconds
    setTimeout(() => setLastAction(null), 2000);
  };

  const resetText = () => {
    setCurrentText("Send me the files.");
    setLastAction(null);
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
            <ToggleOn sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Quick Toggle Buttons
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
              css
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'warning.main' }}>[Make it Polite]</Box>{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>[Make it Direct]</Box>
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
              borderColor: lastAction ? 'success.main' : 'warning.light',
              bgcolor: lastAction ? 'success.50' : 'white',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1">
                  "{currentText}"
                </Typography>
                {lastAction && (
                  <Chip
                    label={lastAction}
                    size="small"
                    color="success"
                    sx={{ mt: 1 }}
                  />
                )}
              </Box>
            </Paper>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Quick Adjustments:
            </Typography>

            <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
              <Button
                startIcon={<SentimentSatisfied />}
                onClick={() => handleToggle('polite')}
                color="success"
                disabled={!!lastAction}
              >
                Make it Polite
              </Button>
              <Button
                startIcon={<Straighten />}
                onClick={() => handleToggle('direct')}
                color="info"
                disabled={!!lastAction}
              >
                Make it Direct
              </Button>
            </ButtonGroup>

            <Box sx={{ display: 'block' }}>
              <Button
                variant="text"
                size="small"
                onClick={resetText}
                sx={{ textTransform: 'none' }}
              >
                Reset to Original
              </Button>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            One-click style toggles for common tone adjustments without detailed controls.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}