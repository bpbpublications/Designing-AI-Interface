import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  Divider
} from '@mui/material';
import { CallMerge, Add, AutoAwesome } from '@mui/icons-material';
import { useState } from 'react';

export function BlendedDrafts() {
  const [isBlending, setIsBlending] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const draft1 = "Thank you for your purchase.";
  const draft2 = "We appreciate your business.";
  const finalDraft = "Thank you for your purchase - we truly appreciate your business.";

  const handleBlend = () => {
    setIsBlending(true);
    setTimeout(() => {
      setIsBlending(false);
      setShowResult(true);
    }, 2000);
  };

  const handleReset = () => {
    setShowResult(false);
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
            <CallMerge sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Blended Drafts
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
              Draft 1 + Draft 2 → Final Draft
            </Typography>
            <Typography variant="body1" color="primary.main">
              [Combine Selected Texts]
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Source Drafts:
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Paper sx={{ 
                flex: 1, 
                p: 2, 
                border: '1px solid',
                borderColor: 'primary.light',
                bgcolor: 'primary.50'
              }}>
                <Chip label="Draft 1" size="small" color="primary" sx={{ mb: 1 }} />
                <Typography variant="body2">
                  "{draft1}"
                </Typography>
              </Paper>

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                px: 1,
                color: 'text.secondary'
              }}>
                <Add sx={{ fontSize: 20 }} />
              </Box>

              <Paper sx={{ 
                flex: 1, 
                p: 2, 
                border: '1px solid',
                borderColor: 'secondary.light',
                bgcolor: 'secondary.50'
              }}>
                <Chip label="Draft 2" size="small" color="secondary" sx={{ mb: 1 }} />
                <Typography variant="body2">
                  "{draft2}"
                </Typography>
              </Paper>
            </Box>

            <Divider sx={{ my: 2 }} />

            {!showResult ? (
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  startIcon={<AutoAwesome />}
                  onClick={handleBlend}
                  disabled={isBlending}
                  color="info"
                >
                  {isBlending ? 'Combining Selected Texts...' : 'Combine Selected Texts'}
                </Button>
                {isBlending && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="info.main">
                      AI is blending the selected content...
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Final Blended Draft:
                </Typography>
                <Paper sx={{ 
                  p: 2, 
                  border: '2px solid',
                  borderColor: 'success.main',
                  bgcolor: 'success.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Chip label="Final Draft" size="small" color="success" />
                  </Box>
                  <Typography variant="body1">
                    "{finalDraft}"
                  </Typography>
                </Paper>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleReset}
                  >
                    Try Again
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Intelligently combines elements from multiple drafts into a cohesive final version.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}