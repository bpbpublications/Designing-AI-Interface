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
import { AutoFixHigh, ShortText, AddCircle, Style } from '@mui/icons-material';
import { useState } from 'react';

export function OneClickRefinement() {
  const [currentText, setCurrentText] = useState("This report is long.");
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleRefinement = (action: string, newText: string) => {
    setCurrentText(newText);
    setLastAction(action);
    setTimeout(() => setLastAction(null), 2000);
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
            <AutoFixHigh sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              One-Click Refinement
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
              Draft: <Box component="span" sx={{ color: 'success.main' }}>"This report is long."</Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="primary.main">
                [Shorten]
              </Typography>
              <Typography variant="body1" color="secondary.main">
                [Add Detail]
              </Typography>
              <Typography variant="body1" color="info.main">
                [Make Formal]
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
              borderColor: lastAction ? 'success.main' : 'primary.light',
              borderRadius: 1,
              mb: 2,
              bgcolor: lastAction ? 'success.50' : 'white',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}>
              <Typography variant="body1">
                Draft: "{currentText}"
              </Typography>
              {lastAction && (
                <Chip
                  label={`Applied: ${lastAction}`}
                  size="small"
                  color="success"
                  sx={{ ml: 2 }}
                />
              )}
            </Box>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              One-Click Refinements:
            </Typography>

            <ButtonGroup variant="outlined" size="small" sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
              <Button
                startIcon={<ShortText />}
                onClick={() => handleRefinement('Shorten', 'Report is lengthy.')}
                color="primary"
              >
                Shorten
              </Button>
              <Button
                startIcon={<AddCircle />}
                onClick={() => handleRefinement('Add Detail', 'This comprehensive report contains extensive information and is quite long.')}
                color="secondary"
              >
                Add Detail
              </Button>
              <Button
                startIcon={<Style />}
                onClick={() => handleRefinement('Make Formal', 'This document presents a comprehensive analysis and is substantial in length.')}
                color="info"
              >
                Make Formal
              </Button>
            </ButtonGroup>

            <Button
              variant="text"
              size="small"
              onClick={() => {
                setCurrentText("This report is long.");
                setLastAction(null);
              }}
            >
              Reset to Original
            </Button>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Quick refinement options for common editing needs with instant application.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}