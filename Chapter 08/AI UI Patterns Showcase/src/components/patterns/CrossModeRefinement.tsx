import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  TextField
} from '@mui/material';
import { CompareArrows, Image, Edit } from '@mui/icons-material';
import { useState } from 'react';

export function CrossModeRefinement() {
  const [isRefining, setIsRefining] = useState(false);
  const [showRefinement, setShowRefinement] = useState(false);
  const [originalTagline] = useState("Rewrite tagline to match this style");
  const [refinedTagline, setRefinedTagline] = useState("Bold Adventures Await - Discover Your Next Journey");

  const handleRefine = () => {
    setIsRefining(true);
    setTimeout(() => {
      setIsRefining(false);
      setShowRefinement(true);
    }, 2000);
  };

  const resetDemo = () => {
    setShowRefinement(false);
    setIsRefining(false);
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
            <CompareArrows sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Cross-Mode Refinement
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
              Generated Image: <Box component="span" sx={{ color: 'warning.main' }}>[Logo Draft]</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'primary.main' }}>Prompt:</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>"Rewrite tagline to match this style"</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Cross-Mode Workflow:
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              {/* Generated Image */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'warning.light',
                bgcolor: 'warning.50'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Image sx={{ color: 'warning.main' }} />
                  <Chip label="Generated Image (Mode 1)" size="small" color="warning" />
                </Box>
                <Box sx={{ 
                  p: 3, 
                  bgcolor: 'warning.100', 
                  borderRadius: 1,
                  textAlign: 'center',
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed',
                  borderColor: 'warning.main'
                }}>
                  <Typography variant="body1" color="warning.dark" sx={{ fontWeight: 'bold' }}>
                    🏔️ BOLD ADVENTURE LOGO DRAFT
                  </Typography>
                </Box>
              </Paper>

              {/* Arrow Indicator */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CompareArrows sx={{ color: 'success.main', fontSize: 32 }} />
              </Box>

              {/* Text Refinement */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'primary.light',
                bgcolor: 'primary.50'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Edit sx={{ color: 'primary.main' }} />
                  <Chip label="Text Refinement (Mode 2)" size="small" color="primary" />
                </Box>
                
                <TextField
                  fullWidth
                  size="small"
                  value={originalTagline}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  disabled
                />

                {!showRefinement ? (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleRefine}
                    disabled={isRefining}
                    fullWidth
                  >
                    {isRefining ? 'AI Analyzing Logo Style...' : 'Refine Text Based on Image Style'}
                  </Button>
                ) : (
                  <Box>
                    <Paper sx={{ 
                      p: 2, 
                      bgcolor: 'success.100',
                      border: '1px solid',
                      borderColor: 'success.main',
                      mb: 2
                    }}>
                      <Typography variant="body2" color="success.dark" gutterBottom>
                        <strong>Refined Tagline:</strong>
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        "{refinedTagline}"
                      </Typography>
                    </Paper>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      AI analyzed the bold, adventurous style of the logo and refined the tagline to match.
                    </Typography>
                    
                    <Button
                      variant="text"
                      size="small"
                      onClick={resetDemo}
                    >
                      Try Again
                    </Button>
                  </Box>
                )}
              </Paper>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Use outputs from one mode (image) to refine and improve content in another mode (text).
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}