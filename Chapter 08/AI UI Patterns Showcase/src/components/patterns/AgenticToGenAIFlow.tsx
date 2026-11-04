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

export function AgenticToGenAIFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = ['AI Agent Fetch', 'GenAI Processing', 'Visualization'];

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
          <Chip label="vbnet" size="small" variant="outlined" />
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
            <Typography variant="body1">
              AI Agent: <Box component="span" sx={{ color: 'green' }}>"Fetched dataset"</Box>
            </Typography>
          )}
          {currentStep === 1 && (
            <Typography variant="body1" sx={{ color: 'primary.main' }}>
              GenAI: "Visualizing in chart form..."
            </Typography>
          )}
          {currentStep === 2 && (
            <Typography variant="body1" sx={{ color: 'success.main' }}>
              📊 Chart generated and displayed
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