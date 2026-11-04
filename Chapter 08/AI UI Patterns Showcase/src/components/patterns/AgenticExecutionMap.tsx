import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepConnector
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: 'purple',
    borderWidth: 2,
  },
}));

export function AgenticExecutionMap() {
  const steps = ['Start', 'Validate', 'Approve', 'Complete'];
  const activeStep = 2; // Currently on "Approve"

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="pascal" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Task Flow:
          </Typography>
          
          <Stepper 
            activeStep={activeStep} 
            connector={<CustomConnector />}
            sx={{
              '& .MuiStepLabel-label': {
                color: 'purple',
                '&.Mui-active': {
                  color: 'purple',
                  fontWeight: 'bold'
                },
                '&.Mui-completed': {
                  color: 'purple',
                }
              },
              '& .MuiStepIcon-root': {
                color: 'purple',
                '&.Mui-active': {
                  color: 'purple',
                },
                '&.Mui-completed': {
                  color: 'purple',
                }
              }
            }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Paper>
    </Box>
  );
}