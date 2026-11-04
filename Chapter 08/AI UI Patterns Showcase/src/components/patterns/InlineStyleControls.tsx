import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  Popover
} from '@mui/material';
import { Edit, TrendingUp, TrendingFlat } from '@mui/icons-material';
import { useState } from 'react';

export function InlineStyleControls() {
  const [selectedText, setSelectedText] = useState('good');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentText, setCurrentText] = useState("The results are good.");
  const [showChanged, setShowChanged] = useState(false);

  const handleTextClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRewrite = (style: 'persuasive' | 'neutral') => {
    if (style === 'persuasive') {
      setCurrentText("The results are exceptionally compelling and demonstrate clear success.");
    } else {
      setCurrentText("The results are satisfactory.");
    }
    setShowChanged(true);
    handleClose();
    
    // Reset after demo
    setTimeout(() => {
      setCurrentText("The results are good.");
      setShowChanged(false);
    }, 3000);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'primary.light',
        bgcolor: 'primary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Edit sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Inline Style Controls
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
              Text: "The results are <Box component="span" sx={{ color: 'success.main' }}>good</Box>."
            </Typography>
            <Typography variant="body1" color="primary.main">
              [Rewrite <Box component="span" sx={{ color: 'primary.main' }}>as</Box> Persuasive] [Rewrite <Box component="span" sx={{ color: 'primary.main' }}>as</Box> Neutral]
            </Typography>
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
                    bgcolor: showChanged ? 'success.100' : 'warning.100',
                    border: '2px solid',
                    borderColor: showChanged ? 'success.main' : 'warning.main',
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onClick={handleTextClick}
                >
                  {currentText.match(/are (.+)\./)?.[1] || 'good'}
                  {showChanged && (
                    <Chip
                      label="Rewritten"
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

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box sx={{ p: 2, minWidth: 200 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Rewrite selected text:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    startIcon={<TrendingUp />}
                    onClick={() => handleRewrite('persuasive')}
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
                  >
                    Rewrite as Persuasive
                  </Button>
                  <Button
                    startIcon={<TrendingFlat />}
                    onClick={() => handleRewrite('neutral')}
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
                  >
                    Rewrite as Neutral
                  </Button>
                </Box>
              </Box>
            </Popover>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Click on the highlighted word to see inline style options.
            </Typography>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Select text inline to get contextual style rewriting options directly in the document.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}