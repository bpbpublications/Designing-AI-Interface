import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Chip
} from '@mui/material';
import { Edit, AutoAwesome } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export function ProgressiveDrafting() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { label: 'Initial Draft', text: 'Your meeting...', progress: 20 },
    { label: 'Developing', text: 'Your meeting is...', progress: 50 },
    { label: 'Finalizing', text: 'Your meeting is confirmed...', progress: 100 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setIsGenerating(true);
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
          setIsGenerating(false);
        }, 1000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep, steps.length]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsGenerating(false);
  };

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
              Progressive Drafting
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
              matlab
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Generating...
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              "Your meeting..." (20%)
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              "Your meeting is..." (50%)
            </Typography>
            <Typography variant="body1" color="success.main">
              "Your meeting is confirmed..." (100%)
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Live Progressive Generation:
            </Typography>
            
            <Stepper activeStep={currentStep} sx={{ mb: 2 }}>
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="body2">
                      {step.label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: isGenerating ? 'warning.main' : 'primary.main',
              bgcolor: isGenerating ? 'warning.50' : 'primary.50',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center'
            }}>
              {isGenerating ? (
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AutoAwesome sx={{ 
                      mr: 1, 
                      color: 'warning.main',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <Typography variant="body2" color="warning.main">
                      Generating...
                    </Typography>
                  </Box>
                  <LinearProgress color="warning" />
                </Box>
              ) : (
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body1" gutterBottom>
                    "{steps[currentStep].text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Chip
                      label={`${steps[currentStep].progress}% Complete`}
                      size="small"
                      color="primary"
                    />
                    <Chip
                      label={steps[currentStep].label}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  </Box>
                </Box>
              )}
            </Paper>

            {currentStep === steps.length - 1 && (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="success.main" gutterBottom>
                  ✓ Draft Complete
                </Typography>
                <Typography 
                  variant="body2" 
                  color="primary.main" 
                  sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={resetDemo}
                >
                  Reset Demo
                </Typography>
              </Box>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Shows content being built progressively, giving users visibility into the generation process.
          </Typography>
          
          <style>
            {`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </CardContent>
      </Card>
    </Box>
  );
}