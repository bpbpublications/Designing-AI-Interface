import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  ButtonGroup,
  Alert,
  Chip
} from '@mui/material';
import { Feedback, ThumbUp, ThumbDown, AutoAwesome } from '@mui/icons-material';
import { useState } from 'react';

export function FeedbackDrivenRefinement() {
  const [currentDraft, setCurrentDraft] = useState("The project is successful.");
  const [feedback, setFeedback] = useState<'helpful' | 'needs-work' | null>(null);
  const [showRefinement, setShowRefinement] = useState(false);
  const [isRefining, setIsRefining] = useState(false);

  const handleFeedback = (type: 'helpful' | 'needs-work') => {
    setFeedback(type);
    if (type === 'needs-work') {
      setIsRefining(true);
      setTimeout(() => {
        setCurrentDraft("The project has achieved exceptional success with outstanding results.");
        setIsRefining(false);
        setShowRefinement(true);
      }, 2000);
    }
  };

  const resetDemo = () => {
    setCurrentDraft("The project is successful.");
    setFeedback(null);
    setShowRefinement(false);
    setIsRefining(false);
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
            <Feedback sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Feedback-Driven Refinement
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
              AI Draft: <Box component="span" sx={{ color: 'success.main' }}>"The project is successful."</Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="body1" color="success.main">
                👍 Helpful
              </Typography>
              <Typography variant="body1" color="warning.main">
                👎 Needs Work
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Draft:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: showRefinement ? 'success.main' : 'primary.light',
              bgcolor: showRefinement ? 'success.50' : 'white'
            }}>
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "{currentDraft}"
              </Typography>
              
              {showRefinement && (
                <Chip
                  label="Refined based on feedback"
                  size="small"
                  color="success"
                  sx={{ mb: 2 }}
                />
              )}
            </Paper>

            {isRefining ? (
              <Alert severity="info" sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AutoAwesome sx={{ animation: 'spin 1s linear infinite' }} />
                  <Typography variant="body2">
                    Refining based on your feedback...
                  </Typography>
                </Box>
              </Alert>
            ) : !showRefinement ? (
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  How is this draft?
                </Typography>
                <ButtonGroup variant="outlined" size="small">
                  <Button
                    startIcon={<ThumbUp />}
                    onClick={() => handleFeedback('helpful')}
                    color="success"
                    disabled={feedback !== null}
                  >
                    👍 Helpful
                  </Button>
                  <Button
                    startIcon={<ThumbDown />}
                    onClick={() => handleFeedback('needs-work')}
                    color="warning"
                    disabled={feedback !== null}
                  >
                    👎 Needs Work
                  </Button>
                </ButtonGroup>
              </Box>
            ) : (
              <Box>
                <Alert severity="success" sx={{ mb: 2 }}>
                  Content refined based on your feedback!
                </Alert>
                <Button
                  variant="text"
                  size="small"
                  onClick={resetDemo}
                >
                  Try Again
                </Button>
              </Box>
            )}

            {feedback === 'helpful' && !showRefinement && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Great! The content has been marked as helpful.
                <Button
                  variant="text"
                  size="small"
                  onClick={resetDemo}
                  sx={{ ml: 1 }}
                >
                  Try Again
                </Button>
              </Alert>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Uses user feedback to automatically improve and refine AI-generated content.
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