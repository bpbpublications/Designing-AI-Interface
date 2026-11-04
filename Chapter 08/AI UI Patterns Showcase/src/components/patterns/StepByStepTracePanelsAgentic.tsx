import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Chip
} from '@mui/material';
import { Timeline, CheckCircle, RadioButtonUnchecked, HourglassEmpty } from '@mui/icons-material';

export function StepByStepTracePanelsAgentic() {
  const agentSteps = [
    { step: "1. Verify invoice", status: "completed" },
    { step: "2. Match contract", status: "completed" },
    { step: "3. Process payment", status: "in-progress" }
  ];

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle sx={{ color: 'success.main' }} />;
      case 'in-progress':
        return <HourglassEmpty sx={{ color: 'warning.main' }} />;
      default:
        return <RadioButtonUnchecked sx={{ color: 'grey.400' }} />;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'info.light',
        bgcolor: 'info.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Timeline sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Step-by-Step Trace Panels
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
              markdown
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Agent Steps:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>1. Verify invoice</Box> ✓
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>2. Match contract</Box> ✓
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'info.main' }}>3. Process payment</Box> ⏳
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Agent Execution Trace:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Agent Steps:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {agentSteps.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {getStepIcon(item.status)}
                    <Typography variant="body1" sx={{ flex: 1 }}>
                      {item.step}
                    </Typography>
                    <Chip 
                      label={item.status === 'completed' ? 'Done' : item.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      size="small"
                      color={item.status === 'completed' ? 'success' : item.status === 'in-progress' ? 'warning' : 'default'}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Workflow Transparency:</strong> Trace panels break down the agent's workflow into 
                sequential steps, giving users visibility into what's happening and allowing intervention 
                before errors escalate.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}