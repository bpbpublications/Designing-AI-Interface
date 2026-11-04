import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import { Feedback, ThumbUp, ThumbDown, Edit } from '@mui/icons-material';
import { useState } from 'react';

export function FeedbackWidgetsCorrection() {
  const [feedback, setFeedback] = useState<string | null>(null);
  const aiOutput = "Meeting at 5PM.";
  const correctedOutput = "Change to 3PM";

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
            <Feedback sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Feedback Widgets & Correction Capture
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
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'success.main' }}>AI</Box> Output: <Box component="span" sx={{ color: 'success.main' }}>"Meeting at 5PM."</Box>
            </Typography>
            <Typography variant="body1">
              👍 Helpful&nbsp;&nbsp;&nbsp;&nbsp;👎 Incorrect → <Box component="span" sx={{ color: 'error.main' }}>"Change to 3PM"</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Output with Feedback Options:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                AI Output:
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                "{aiOutput}"
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  size="small" 
                  color={feedback === 'helpful' ? 'success' : 'default'}
                  onClick={() => setFeedback('helpful')}
                  sx={{ 
                    bgcolor: feedback === 'helpful' ? 'success.100' : 'transparent',
                    '&:hover': { bgcolor: 'success.100' }
                  }}
                >
                  <ThumbUp fontSize="small" />
                </IconButton>
                <Typography variant="caption" color="text.secondary">
                  Helpful
                </Typography>
                
                <IconButton 
                  size="small" 
                  color={feedback === 'incorrect' ? 'error' : 'default'}
                  onClick={() => setFeedback('incorrect')}
                  sx={{ 
                    bgcolor: feedback === 'incorrect' ? 'error.100' : 'transparent',
                    '&:hover': { bgcolor: 'error.100' },
                    ml: 2
                  }}
                >
                  <ThumbDown fontSize="small" />
                </IconButton>
                <Typography variant="caption" color="text.secondary">
                  Incorrect
                </Typography>
              </Box>
            </Paper>

            {feedback === 'incorrect' && (
              <Paper sx={{ 
                p: 2, 
                mb: 2,
                border: '2px solid',
                borderColor: 'error.light',
                bgcolor: 'error.50'
              }}>
                <Typography variant="body2" color="error.dark" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Quick Correction:
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="error.dark">
                    "{correctedOutput}"
                  </Typography>
                  <Button 
                    size="small" 
                    startIcon={<Edit />}
                    variant="outlined"
                    color="error"
                  >
                    Apply Fix
                  </Button>
                </Box>
              </Paper>
            )}

            {feedback === 'helpful' && (
              <Paper sx={{ 
                p: 2, 
                mb: 2,
                border: '2px solid',
                borderColor: 'success.light',
                bgcolor: 'success.50'
              }}>
                <Typography variant="body2" color="success.dark">
                  ✅ <strong>Thank you for the feedback!</strong> This helps improve AI responses.
                </Typography>
              </Paper>
            )}

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Learning Loop:</strong> Simple thumbs up/down feedback with quick correction capture 
                allows the AI to learn from mistakes and improve future responses while providing immediate 
                value through user corrections.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}