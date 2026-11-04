import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  Fade
} from '@mui/material';
import { Refresh, AutoAwesome } from '@mui/icons-material';
import { useState } from 'react';

export function RegenerateButton() {
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [currentDraft, setCurrentDraft] = useState("Thank you for your order.");

  const drafts = [
    "Thank you for your order.",
    "We appreciate your purchase.",
    "Your order has been received - thanks!",
    "Thanks for choosing us for your order."
  ];

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const currentIndex = drafts.indexOf(currentDraft);
      const nextIndex = (currentIndex + 1) % drafts.length;
      setCurrentDraft(drafts[nextIndex]);
      setIsRegenerating(false);
    }, 1500);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'secondary.light',
        bgcolor: 'secondary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Refresh sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Regenerate Button
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
              csharp
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Draft: <Box component="span" sx={{ color: 'success.main' }}>"Thank you for your order."</Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="body1" color="primary.main">
                [Regenerate]
              </Typography>
              <Typography variant="body1" color="warning.main">
                [Refine]
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo:
            </Typography>
            
            <Box sx={{ 
              p: 2, 
              border: '2px solid',
              borderColor: 'primary.light',
              borderRadius: 1,
              mb: 2,
              bgcolor: 'white',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative'
            }}>
              {isRegenerating ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AutoAwesome sx={{ 
                    animation: 'spin 1s linear infinite',
                    color: 'primary.main'
                  }} />
                  <Typography variant="body1" color="primary.main">
                    Regenerating...
                  </Typography>
                </Box>
              ) : (
                <Fade in={!isRegenerating}>
                  <Typography variant="body1">
                    Draft: "{currentDraft}"
                  </Typography>
                </Fade>
              )}
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={handleRegenerate}
                disabled={isRegenerating}
                color="primary"
              >
                {isRegenerating ? 'Regenerating...' : 'Regenerate'}
              </Button>
              <Button
                variant="outlined"
                color="warning"
                disabled={isRegenerating}
              >
                Refine
              </Button>
            </Box>

            <Chip
              label={`Version ${drafts.indexOf(currentDraft) + 1} of ${drafts.length}`}
              size="small"
              color="info"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            One-click regeneration for quick alternative draft generation.
          </Typography>
          
          <style>
            {`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </CardContent>
      </Card>
    </Box>
  );
}