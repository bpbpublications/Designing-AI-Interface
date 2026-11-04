import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  CircularProgress
} from '@mui/material';
import { Psychology, Schedule } from '@mui/icons-material';

export function TransparentStatusIndicatorsAgentic() {
  const agentStatus = "[Thinking...]";
  const eta = "ETA: 12s";

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'warning.light',
        bgcolor: 'warning.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Psychology sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Transparent Status Indicators
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
              yaml
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Agent Status: <Box component="span" sx={{ color: 'success.main' }}>[Thinking...]</Box> ETA: <Box component="span" sx={{ color: 'warning.main' }}>12s</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Real-time Agent Status:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'warning.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <CircularProgress 
                  size={24} 
                  sx={{ color: 'warning.main' }}
                />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Agent Status:
                </Typography>
                <Chip 
                  label="Thinking..."
                  color="success"
                  size="small"
                />
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Schedule sx={{ color: 'warning.main', fontSize: 18 }} />
                <Typography variant="body2">
                  {eta}
                </Typography>
              </Box>
            </Paper>

            {/* Status Options */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Possible Status States:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'success.100',
                  border: '1px solid',
                  borderColor: 'success.main'
                }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    🤔 Thinking... <Typography component="span" variant="caption">(Processing your request)</Typography>
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    ⚡ Processing... <Typography component="span" variant="caption">(Executing actions)</Typography>
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    ⏸️ Paused <Typography component="span" variant="caption">(Waiting for user input)</Typography>
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    ✅ Completed <Typography component="span" variant="caption">(Task finished successfully)</Typography>
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Cognitive Transparency:</strong> Status indicators display what the AI is doing—processing, 
                paused, or completed—so users understand the system's state and don't feel left in uncertainty.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}