import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { People, School, Business, Person } from '@mui/icons-material';
import { useState } from 'react';

export function AudienceSelector() {
  const [selectedAudience, setSelectedAudience] = useState('manager');
  const [currentText, setCurrentText] = useState("Our project timeline has been adjusted to accommodate additional requirements and ensure quality deliverables.");

  const audiences = {
    student: {
      icon: <School />,
      text: "Hey! So we had to change when our project is due because we wanted to add some cool extra stuff and make sure it's really good!",
      description: "Simple, encouraging, educational"
    },
    manager: {
      icon: <Business />,
      text: "Our project timeline has been adjusted to accommodate additional requirements and ensure quality deliverables.",
      description: "Professional, concise, business-focused"
    },
    customer: {
      icon: <Person />,
      text: "We're taking a bit more time with your project to include some exciting new features and make sure everything is perfect for you!",
      description: "Friendly, reassuring, customer-centric"
    }
  };

  const handleAudienceChange = (audience: string) => {
    setSelectedAudience(audience);
    setCurrentText(audiences[audience as keyof typeof audiences].text);
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
            <People sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Audience Selector
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
              less
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Target Audience: <Box component="span" sx={{ color: 'error.main' }}>[Student] [Manager] [Customer]</Box>
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
              borderColor: 'success.light',
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
              Target Audience:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              {Object.entries(audiences).map(([key, audience]) => (
                <Button
                  key={key}
                  variant={selectedAudience === key ? 'contained' : 'outlined'}
                  onClick={() => handleAudienceChange(key)}
                  startIcon={audience.icon}
                  color="success"
                  sx={{ 
                    justifyContent: 'flex-start', 
                    textAlign: 'left',
                    textTransform: 'none'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {audience.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            <Chip
              label={`Writing for: ${selectedAudience.charAt(0).toUpperCase() + selectedAudience.slice(1)}`}
              size="small"
              color="success"
              variant="filled"
            />
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Tailor communication style and complexity based on the intended audience.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}