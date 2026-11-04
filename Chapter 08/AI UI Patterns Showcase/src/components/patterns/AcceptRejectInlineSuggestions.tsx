import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Button,
  ButtonGroup,
  Paper,
  Chip,
  Alert
} from '@mui/material';
import { Check, Close, AutoAwesome, Visibility } from '@mui/icons-material';
import { useState } from 'react';

export function AcceptRejectInlineSuggestions() {
  const [suggestionState, setSuggestionState] = useState<'pending' | 'accepted' | 'rejected'>('pending');
  const [showSuggestion, setShowSuggestion] = useState(true);

  const handleAccept = () => {
    setSuggestionState('accepted');
    setTimeout(() => {
      setShowSuggestion(false);
      // Reset after demo
      setTimeout(() => {
        setShowSuggestion(true);
        setSuggestionState('pending');
      }, 2000);
    }, 1000);
  };

  const handleReject = () => {
    setSuggestionState('rejected');
    setTimeout(() => {
      setShowSuggestion(false);
      // Reset after demo
      setTimeout(() => {
        setShowSuggestion(true);
        setSuggestionState('pending');
      }, 2000);
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
            <Visibility sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Accept / Reject Inline Suggestions
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
              nginx
            </Typography>
            
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" color="primary.main" component="span">
                AI Rewrite:
              </Typography>
              <Typography variant="body1" color="success.main" component="span" sx={{ ml: 1 }}>
                "The service is excellent."
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" color="success.main">
                [✓ Accept]
              </Typography>
              <Typography variant="body1" color="error.main">
                [✗ Reject]
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo:
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" gutterBottom>
                Original text: "The service is okay."
              </Typography>
            </Box>

            {showSuggestion && (
              <Box sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: suggestionState === 'pending' ? 'info.main' : 
                             suggestionState === 'accepted' ? 'success.main' : 'error.main',
                borderRadius: 1,
                bgcolor: suggestionState === 'pending' ? 'info.50' : 
                         suggestionState === 'accepted' ? 'success.50' : 'error.50',
                mb: 2,
                transition: 'all 0.3s ease'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2" color="primary.main">
                    AI Rewrite:
                  </Typography>
                </Box>
                
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                  "The service is excellent."
                </Typography>

                {suggestionState === 'pending' && (
                  <ButtonGroup variant="outlined" size="small">
                    <Button
                      startIcon={<Check />}
                      color="success"
                      onClick={handleAccept}
                    >
                      ✓ Accept
                    </Button>
                    <Button
                      startIcon={<Close />}
                      color="error"
                      onClick={handleReject}
                    >
                      ✗ Reject
                    </Button>
                  </ButtonGroup>
                )}

                {suggestionState === 'accepted' && (
                  <Chip
                    icon={<Check />}
                    label="Accepted"
                    color="success"
                    size="small"
                  />
                )}

                {suggestionState === 'rejected' && (
                  <Chip
                    icon={<Close />}
                    label="Rejected"
                    color="error"
                    size="small"
                  />
                )}
              </Box>
            )}

            {!showSuggestion && suggestionState === 'accepted' && (
              <Alert severity="success">
                Text updated to: "The service is excellent."
              </Alert>
            )}

            {!showSuggestion && suggestionState === 'rejected' && (
              <Alert severity="info">
                Keeping original: "The service is okay."
              </Alert>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Mirrors familiar track-changes workflows with simple accept/reject options.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}