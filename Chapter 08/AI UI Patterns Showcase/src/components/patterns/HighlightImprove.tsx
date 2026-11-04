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
import { Highlight, AutoAwesome, FindReplace, Add } from '@mui/icons-material';
import { useState } from 'react';

export function HighlightImprove() {
  const [highlightedWord, setHighlightedWord] = useState('good');
  const [showOptions, setShowOptions] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const improvements = {
    'Improve': 'excellent',
    'Add Synonyms': 'good (great, excellent, outstanding)'
  };

  const handleImprovement = (action: string) => {
    setSelectedOption(action);
    setTimeout(() => {
      setHighlightedWord(improvements[action as keyof typeof improvements] || 'improved');
      setShowOptions(false);
      // Reset after demo
      setTimeout(() => {
        setHighlightedWord('good');
        setShowOptions(true);
        setSelectedOption(null);
      }, 3000);
    }, 1000);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'success.light',
        bgcolor: 'success.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Highlight sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Highlight + Improve
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
              mathematica
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              "The results are <Box component="span" sx={{ color: 'success.main' }}>good</Box>."
            </Typography>
            <Typography variant="body1" gutterBottom>
              Highlight: <Box component="span" sx={{ color: 'warning.main' }}>"good"</Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="primary.main">
                AI Options: [Improve]
              </Typography>
              <Typography variant="body1" color="secondary.main">
                [Add Synonyms]
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo:
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" component="div">
                "The results are{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    px: 1, 
                    py: 0.5, 
                    bgcolor: selectedOption ? 'success.100' : 'warning.100',
                    border: '2px solid',
                    borderColor: selectedOption ? 'success.main' : 'warning.main',
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {highlightedWord}
                  {selectedOption && (
                    <Chip
                      label={selectedOption}
                      size="small"
                      color="success"
                      sx={{
                        position: 'absolute',
                        top: -25,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.7rem'
                      }}
                    />
                  )}
                </Box>
                ."
              </Typography>
            </Box>

            {showOptions && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Highlighted: "{highlightedWord}"
                </Typography>
                <Typography variant="body2" color="primary.main" gutterBottom>
                  AI Options:
                </Typography>
                <ButtonGroup variant="outlined" size="small">
                  <Button
                    startIcon={<AutoAwesome />}
                    onClick={() => handleImprovement('Improve')}
                    disabled={!!selectedOption}
                  >
                    Improve
                  </Button>
                  <Button
                    startIcon={<Add />}
                    onClick={() => handleImprovement('Add Synonyms')}
                    disabled={!!selectedOption}
                  >
                    Add Synonyms
                  </Button>
                </ButtonGroup>
              </Box>
            )}

            {selectedOption && (
              <Box sx={{ 
                p: 1, 
                bgcolor: 'info.50', 
                borderRadius: 1, 
                border: '1px solid',
                borderColor: 'info.200'
              }}>
                <Typography variant="body2" color="info.dark">
                  Applying: {selectedOption}...
                </Typography>
              </Box>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Highlight specific words or phrases to get contextual AI improvement suggestions.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}