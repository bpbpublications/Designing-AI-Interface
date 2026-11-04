import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip,
  Paper,
  Button,
  ButtonGroup
} from '@mui/material';
import { AutoFixHigh, SwapHoriz, Check } from '@mui/icons-material';
import { useState } from 'react';

export function MicroEditsWordPhraseSubstitution() {
  const [selectedWord, setSelectedWord] = useState<string>('good');
  const [isReplacing, setIsReplacing] = useState(false);

  const alternatives = ['reliable', 'durable', 'excellent'];

  const handleReplace = (newWord: string) => {
    setSelectedWord(newWord);
    setIsReplacing(true);
    setTimeout(() => setIsReplacing(false), 1000);
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
            <SwapHoriz sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Micro-Edits (Word/Phrase Substitution)
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
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="primary.main">
                AI:
              </Typography>
              <Typography variant="body1">
                Replace
              </Typography>
              <Typography variant="body1" sx={{ 
                bgcolor: 'warning.100', 
                px: 1, 
                borderRadius: 0.5,
                textDecoration: 'line-through'
              }}>
                "good"
              </Typography>
              <Typography variant="body1">
                →
              </Typography>
              <Typography variant="body1" color="success.main">
                "reliable"
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="success.main">
                "durable"
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="success.main">
                "excellent"
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo:
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" component="div">
                The product is{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    px: 1, 
                    py: 0.5, 
                    bgcolor: isReplacing ? 'success.100' : 'warning.100',
                    border: '2px solid',
                    borderColor: isReplacing ? 'success.main' : 'warning.main',
                    borderRadius: 1,
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {selectedWord}
                  {isReplacing && (
                    <Check sx={{ 
                      position: 'absolute', 
                      top: -8, 
                      right: -8, 
                      fontSize: 16, 
                      color: 'success.main',
                      bgcolor: 'white',
                      borderRadius: '50%'
                    }} />
                  )}
                </Box>
                .
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                AI Suggestions:
              </Typography>
              <ButtonGroup variant="outlined" size="small">
                {alternatives.map((word) => (
                  <Button
                    key={word}
                    onClick={() => handleReplace(word)}
                    startIcon={<AutoFixHigh />}
                    disabled={selectedWord === word}
                    sx={{ textTransform: 'none' }}
                  >
                    {word}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip
                label={`Current: "${selectedWord}"`}
                color="primary"
                size="small"
                icon={<Check />}
              />
              {alternatives.filter(alt => alt !== selectedWord).map((alt) => (
                <Chip
                  key={alt}
                  label={alt}
                  variant="outlined"
                  size="small"
                  clickable
                  onClick={() => handleReplace(alt)}
                />
              ))}
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Precision editing at granular level with AI-powered word and phrase alternatives.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}