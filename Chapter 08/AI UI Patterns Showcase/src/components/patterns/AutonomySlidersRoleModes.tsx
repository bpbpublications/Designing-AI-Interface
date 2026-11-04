import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Slider,
  Chip
} from '@mui/material';
import { Tune, Speed } from '@mui/icons-material';
import { useState } from 'react';

export function AutonomySlidersRoleModes() {
  const [autonomyLevel, setAutonomyLevel] = useState(50);
  
  const getAutonomyLabel = (value: number) => {
    if (value <= 25) return "Assistive";
    if (value <= 50) return "Semi-Auto";  
    if (value <= 75) return "Full Auto";
    return "Full Auto";
  };

  const getAutonomyColor = (value: number) => {
    if (value <= 25) return "info";
    if (value <= 50) return "warning";
    return "error";
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
            <Tune sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Autonomy Sliders & Role Modes
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
              vbnet
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>Autonomy</Box>: [<Box component="span" sx={{ color: 'info.main' }}>Assistive</Box>] ——|——— [<Box component="span" sx={{ color: 'warning.main' }}>Semi-Auto</Box>] ——— [<Box component="span" sx={{ color: 'error.main' }}>Full Auto</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Autonomy Control:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Speed sx={{ color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Autonomy Level:
                </Typography>
                <Chip 
                  label={getAutonomyLabel(autonomyLevel)}
                  color={getAutonomyColor(autonomyLevel) as any}
                  size="small"
                />
              </Box>
              
              <Box sx={{ px: 1, mb: 2 }}>
                <Slider
                  value={autonomyLevel}
                  onChange={(_, newValue) => setAutonomyLevel(newValue as number)}
                  min={0}
                  max={100}
                  step={25}
                  marks={[
                    { value: 0, label: 'Manual' },
                    { value: 25, label: 'Assistive' },
                    { value: 50, label: 'Semi-Auto' },
                    { value: 75, label: 'Full Auto' },
                    { value: 100, label: 'Autonomous' }
                  ]}
                  sx={{
                    '& .MuiSlider-markLabel': {
                      fontSize: '0.7rem'
                    }
                  }}
                />
              </Box>
            </Paper>

            {/* Mode Descriptions */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Current Mode Behavior:
              </Typography>
              
              <Paper sx={{ 
                p: 2, 
                bgcolor: autonomyLevel <= 25 ? 'info.50' : autonomyLevel <= 50 ? 'warning.50' : 'error.50',
                border: '1px solid',
                borderColor: autonomyLevel <= 25 ? 'info.200' : autonomyLevel <= 50 ? 'warning.200' : 'error.200'
              }}>
                {autonomyLevel <= 25 && (
                  <Typography variant="body2" color="info.dark">
                    <strong>Assistive Mode:</strong> AI provides suggestions and recommendations. 
                    User maintains full control over all decisions and actions.
                  </Typography>
                )}
                {autonomyLevel > 25 && autonomyLevel <= 50 && (
                  <Typography variant="body2" color="warning.dark">
                    <strong>Semi-Auto Mode:</strong> AI can execute routine tasks automatically 
                    but requires approval for important decisions.
                  </Typography>
                )}
                {autonomyLevel > 50 && (
                  <Typography variant="body2" color="error.dark">
                    <strong>Full Auto Mode:</strong> AI operates independently with minimal 
                    human intervention. User can monitor and intervene when needed.
                  </Typography>
                )}
              </Paper>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>User Control:</strong> Sliders and modes let users control how independently 
                the AI acts, balancing speed and efficiency with comfort and risk tolerance.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}