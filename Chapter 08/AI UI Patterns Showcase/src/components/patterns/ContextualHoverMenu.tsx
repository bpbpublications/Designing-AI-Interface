import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Tooltip,
  Chip,
  Paper
} from '@mui/material';
import { AutoFixHigh, Visibility } from '@mui/icons-material';
import { useState } from 'react';

export function ContextualHoverMenu() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'secondary.light',
        bgcolor: 'secondary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Visibility sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Contextual Hover Menu
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
              pgsql
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="warning.main">
                [← AI Rewrite]
              </Typography>
              <Typography variant="body1">
                appears
              </Typography>
              <Typography variant="body1" color="secondary.main">
                when
              </Typography>
              <Typography variant="body1">
                hovering
              </Typography>
              <Typography variant="body1" color="error.main">
                over
              </Typography>
              <Typography variant="body1">
                selected
              </Typography>
              <Typography variant="body1" color="warning.main">
                text
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo:
            </Typography>
            
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Typography 
                variant="body1"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                sx={{ 
                  px: 1, 
                  py: 0.5, 
                  bgcolor: isHovering ? 'info.100' : 'transparent',
                  border: isHovering ? '2px solid' : '2px solid transparent',
                  borderColor: isHovering ? 'info.main' : 'transparent',
                  borderRadius: 1,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  userSelect: 'none'
                }}
              >
                Hover over this selected text
              </Typography>
              
              {isHovering && (
                <Tooltip 
                  title="AI Rewrite" 
                  placement="top"
                  open={true}
                  arrow
                >
                  <Chip
                    icon={<AutoFixHigh />}
                    label="AI Rewrite"
                    size="small"
                    color="primary"
                    clickable
                    sx={{
                      position: 'absolute',
                      top: -40,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      boxShadow: 2,
                      zIndex: 1000
                    }}
                  />
                </Tooltip>
              )}
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Non-intrusive contextual menu that appears only when hovering over selected text.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}