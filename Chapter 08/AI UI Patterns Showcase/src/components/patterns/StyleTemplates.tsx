import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { Description, Newspaper, Share, Help } from '@mui/icons-material';
import { useState } from 'react';

export function StyleTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState('press-release');
  const [currentText, setCurrentText] = useState("FOR IMMEDIATE RELEASE\n\nCompany XYZ Announces Record Q3 Results\n\n[City, Date] - Company XYZ today announced record-breaking third quarter results, with revenue increasing 15% year-over-year. The strong performance demonstrates continued market leadership and operational excellence.\n\n###");

  const templates = {
    'press-release': {
      icon: <Newspaper />,
      text: "FOR IMMEDIATE RELEASE\n\nCompany XYZ Announces Record Q3 Results\n\n[City, Date] - Company XYZ today announced record-breaking third quarter results, with revenue increasing 15% year-over-year. The strong performance demonstrates continued market leadership and operational excellence.\n\n###",
      description: "Professional media format"
    },
    'social-media-post': {
      icon: <Share />,
      text: "🎉 Incredible Q3 results! 📈 We're thrilled to share that we've achieved 15% growth this quarter. Thank you to our amazing team and customers who made this possible! 💪 #Growth #TeamWork #Success",
      description: "Engaging social format"
    },
    'faq': {
      icon: <Help />,
      text: "Q: How did the company perform in Q3?\nA: We achieved exceptional results in Q3 with a 15% increase in revenue compared to the same period last year. This growth reflects our team's dedication and our customers' continued trust in our services.\n\nQ: What contributed to this growth?\nA: The growth was driven by strong customer retention and successful new product launches.",
      description: "Question-answer format"
    }
  };

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    setCurrentText(templates[template as keyof typeof templates].text);
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
            <Description sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Style Templates
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
            
            <Typography variant="body1" gutterBottom>
              Template: <Box component="span" sx={{ color: 'secondary.main' }}>[Press Release] [Social Media Post] [FAQ]</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Generated Content:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'secondary.light',
              bgcolor: 'white',
              minHeight: '150px',
              overflow: 'auto'
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  whiteSpace: 'pre-line',
                  lineHeight: 1.5,
                  fontFamily: selectedTemplate === 'social-media-post' ? 'inherit' : 'monospace'
                }}
              >
                {currentText}
              </Typography>
            </Paper>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Content Templates:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              {Object.entries(templates).map(([key, template]) => (
                <Button
                  key={key}
                  variant={selectedTemplate === key ? 'contained' : 'outlined'}
                  onClick={() => handleTemplateChange(key)}
                  startIcon={template.icon}
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
                      {template.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            <Chip
              label={`Template: ${selectedTemplate.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
              size="small"
              color="secondary"
              variant="filled"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Pre-built content templates with specific formatting and structure for different use cases.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}