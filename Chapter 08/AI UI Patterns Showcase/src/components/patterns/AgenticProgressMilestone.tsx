import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  LinearProgress,
  Chip
} from '@mui/material';
import { CheckCircle, RadioButtonUnchecked, Schedule } from '@mui/icons-material';

export function AgenticProgressMilestone() {
  const progress = 60; // 3/5 = 60%
  
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
            <Schedule sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Agentic - Progress Milestone
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
              arduino
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" color="warning.main">
                Task Progress:
              </Typography>
              <Typography variant="body1">
                3/5 steps completed
              </Typography>
              <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Progress: 3 of 5 steps
              </Typography>
              <Typography variant="body2" color="text.secondary">
                60%
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: 'grey.300',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  bgcolor: 'success.main'
                }
              }} 
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Chip 
              icon={<CheckCircle />} 
              label="Setup Complete" 
              size="small" 
              color="success" 
              variant="filled"
            />
            <Chip 
              icon={<CheckCircle />} 
              label="Data Processing" 
              size="small" 
              color="success" 
              variant="filled"
            />
            <Chip 
              icon={<CheckCircle />} 
              label="Analysis" 
              size="small" 
              color="success" 
              variant="filled"
            />
            <Chip 
              icon={<RadioButtonUnchecked />} 
              label="Review" 
              size="small" 
              color="default" 
              variant="outlined"
            />
            <Chip 
              icon={<RadioButtonUnchecked />} 
              label="Deploy" 
              size="small" 
              color="default" 
              variant="outlined"
            />
          </Box>

          <Typography variant="body2" color="text.secondary">
            Shows clear progress indicators and milestone completion status.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}