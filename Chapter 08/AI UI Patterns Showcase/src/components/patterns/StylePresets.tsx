import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { Style, BusinessCenter, MenuBook, Engineering } from '@mui/icons-material';
import { useState } from 'react';

export function StylePresets() {
  const [selectedStyle, setSelectedStyle] = useState('business-report');
  const [currentText, setCurrentText] = useState("Our Q3 results demonstrate significant growth across all key performance indicators, with revenue increasing by 15% compared to the previous quarter.");

  const styles = {
    'business-report': {
      icon: <BusinessCenter />,
      text: "Our Q3 results demonstrate significant growth across all key performance indicators, with revenue increasing by 15% compared to the previous quarter.",
      description: "Professional, data-driven, formal tone"
    },
    'storytelling': {
      icon: <MenuBook />,
      text: "Picture this: a quarter where everything clicked into place. Our team's hard work paid off as we watched our numbers climb 15% higher than before - a story of dedication and success.",
      description: "Narrative, engaging, personal tone"
    },
    'technical-manual': {
      icon: <Engineering />,
      text: "Q3 Performance Analysis: Revenue metrics indicate a 15% quarter-over-quarter increase. Key performance indicators (KPIs) show positive trajectory across all measured categories.",
      description: "Precise, structured, instructional tone"
    }
  };

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
    setCurrentText(styles[style as keyof typeof styles].text);
  };

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
            <Style sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Style Presets
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
              Style: <Box component="span" sx={{ color: 'warning.main' }}>[Business Report] [Storytelling] [Technical Manual]</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Current Text:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'secondary.light',
              bgcolor: 'white',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                "{currentText}"
              </Typography>
            </Paper>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Style Presets:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              {Object.entries(styles).map(([key, style]) => (
                <Button
                  key={key}
                  variant={selectedStyle === key ? 'contained' : 'outlined'}
                  onClick={() => handleStyleChange(key)}
                  startIcon={style.icon}
                  color="secondary"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    textAlign: 'left',
                    textTransform: 'none'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {style.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            <Chip
              label={`Active: ${selectedStyle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
              size="small"
              color="secondary"
              variant="filled"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Pre-configured writing styles for different document types and contexts.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}