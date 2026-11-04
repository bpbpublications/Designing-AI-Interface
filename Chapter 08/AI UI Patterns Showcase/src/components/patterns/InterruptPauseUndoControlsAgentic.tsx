import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  LinearProgress
} from '@mui/material';
import { Pause, Undo, Stop } from '@mui/icons-material';

export function InterruptPauseUndoControlsAgentic() {
  const task = "Sending 300 emails";
  const status = "In Progress...";
  const controls = ["[Pause]", "[Undo Last]", "[Stop All]"];

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'error.light',
        bgcolor: 'error.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Pause sx={{ mr: 1, color: 'error.main' }} />
            <Typography variant="h6" color="error.dark">
              Interrupt / Pause / Undo Controls
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
              mathematica
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>Task</Box>: Sending <Box component="span" sx={{ color: 'warning.main' }}>300</Box> emails
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'success.main' }}>Status</Box>: In Progress...
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'warning.main' }}>Pause</Box>] [<Box component="span" sx={{ color: 'info.main' }}>Undo Last</Box>] [<Box component="span" sx={{ color: 'error.main' }}>Stop All</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Active Task with Control Options:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'info.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Current Task:
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {task}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Status: {status}
              </Typography>
              
              <LinearProgress 
                variant="determinate" 
                value={60} 
                sx={{ 
                  mb: 2,
                  height: 8,
                  borderRadius: 2
                }}
              />
              
              <Typography variant="caption" color="text.secondary">
                180 of 300 emails sent
              </Typography>
            </Paper>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
              <Button 
                variant="contained" 
                color="warning" 
                size="small"
                startIcon={<Pause />}
              >
                Pause
              </Button>
              <Button 
                variant="outlined" 
                color="info" 
                size="small"
                startIcon={<Undo />}
              >
                Undo Last
              </Button>
              <Button 
                variant="contained" 
                color="error" 
                size="small"
                startIcon={<Stop />}
              >
                Stop All
              </Button>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'warning.50',
              border: '1px solid',
              borderColor: 'warning.200'
            }}>
              <Typography variant="body2" color="warning.dark">
                ⚠️ <strong>Safety Notice:</strong> Visible stop and undo controls reassure users that 
                they can always intervene, creating psychological safety in automated processes.
              </Typography>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              mt: 2,
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Control Patterns:</strong> Always-visible interrupt controls give users confidence 
                to let automation run while knowing they can stop, pause, or undo actions at any time.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}