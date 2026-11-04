import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export function GenAIToAgenticFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = ['Draft Email', 'Schedule Send', 'Agent Executes'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="csharp" size="small" variant="outlined" />
        </Box>
        
        <Stepper activeStep={currentStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box sx={{ mb: 2 }}>
          {currentStep === 0 && (
            <Typography variant="body1" sx={{ color: 'green' }}>
              Draft Email: "Meeting at 3PM"
            </Typography>
          )}
          {currentStep === 1 && (
            <Typography variant="body1" sx={{ color: 'primary.main' }}>
              [Schedule Send → Agent executes]
            </Typography>
          )}
          {currentStep === 2 && (
            <Typography variant="body1" sx={{ color: 'success.main' }}>
              ✓ Email sent automatically
            </Typography>
          )}
        </Box>
        
        <Button 
          variant="contained" 
          onClick={handleNext}
          endIcon={<ArrowForward />}
        >
          {currentStep === steps.length - 1 ? 'Restart' : 'Next Step'}
        </Button>
      </Paper>
    </Box>
  );
}