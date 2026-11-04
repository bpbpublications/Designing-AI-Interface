import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Button,
  ButtonGroup,
  Paper,
  Chip
} from '@mui/material';
import { ExpandMore, ExpandLess, Add, Remove } from '@mui/icons-material';
import { useState } from 'react';

export function ExpandCondenseControls() {
  const [currentText, setCurrentText] = useState<'original' | 'expanded' | 'condensed'>('original');
  
  const textVersions = {
    original: "Our quarterly sales results exceeded expectations with a 15% increase in revenue. The marketing team's new digital campaign significantly contributed to customer acquisition, while our customer retention rate improved due to enhanced support services.",
    expanded: "Our quarterly sales results have exceeded expectations with a remarkable 15% increase in revenue compared to the same period last year. The marketing team's innovative new digital campaign, which focused on targeted social media advertising and personalized email outreach, significantly contributed to customer acquisition by bringing in over 2,000 new clients. Meanwhile, our customer retention rate improved substantially due to the implementation of enhanced support services, including 24/7 chat support, comprehensive onboarding processes, and proactive account management that ensures customer satisfaction and long-term loyalty.",
    condensed: "Q3 sales up 15%. Marketing drove new customers, support improved retention."
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
            <ExpandMore sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Expand / Condense Controls
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
              css
            </Typography>
            
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" color="warning.main">
                [Expand]
              </Typography>
              <Typography variant="body1" color="text.secondary">
                → Adds detail and context
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="warning.main">
                [Condense]
              </Typography>
              <Typography variant="body1" color="text.secondary">
                → Summarizes to key points
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
              minHeight: '120px',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <Typography variant="body1">
                {textVersions[currentText]}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
              <ButtonGroup variant="outlined" size="small">
                <Button
                  startIcon={<ExpandMore />}
                  onClick={() => setCurrentText('expanded')}
                  disabled={currentText === 'expanded'}
                  color="success"
                >
                  Expand
                </Button>
                <Button
                  startIcon={<ExpandLess />}
                  onClick={() => setCurrentText('condensed')}
                  disabled={currentText === 'condensed'}
                  color="warning"
                >
                  Condense
                </Button>
              </ButtonGroup>
              
              <Button
                variant="text"
                size="small"
                onClick={() => setCurrentText('original')}
                disabled={currentText === 'original'}
              >
                Reset
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip
                label="Original"
                color={currentText === 'original' ? 'primary' : 'default'}
                size="small"
                variant={currentText === 'original' ? 'filled' : 'outlined'}
              />
              <Chip
                label="Expanded"
                color={currentText === 'expanded' ? 'success' : 'default'}
                size="small"
                variant={currentText === 'expanded' ? 'filled' : 'outlined'}
              />
              <Chip
                label="Condensed"
                color={currentText === 'condensed' ? 'warning' : 'default'}
                size="small"
                variant={currentText === 'condensed' ? 'filled' : 'outlined'}
              />
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Helps users adjust content verbosity with simple expand/condense controls for optimal reading experience.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}