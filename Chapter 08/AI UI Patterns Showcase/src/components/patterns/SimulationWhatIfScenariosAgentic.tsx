import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { Science, Calculate } from '@mui/icons-material';

export function SimulationWhatIfScenariosAgentic() {
  const simulationMode = "Simulation Mode:";
  const cost = "Cost if executed = $12,300";
  const impact = "Impact = Budget exceeded";

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
            <Science sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Simulation & What-if Scenarios
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
              nginx
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'success.main' }}>Simulation</Box> Mode:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost if executed = <Box component="span" sx={{ color: 'warning.main' }}>$12,300</Box>
            </Typography>
            <Typography variant="body1">
              Impact = <Box component="span" sx={{ color: 'error.main' }}>Budget exceeded</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Impact Simulation Preview:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px dashed',
              borderColor: 'info.light',
              bgcolor: 'info.100'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Calculate sx={{ color: 'info.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {simulationMode}
                </Typography>
                <Chip 
                  label="Preview Only"
                  color="info"
                  size="small"
                />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {cost}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: 'error.main', fontWeight: 'bold' }}>
                  {impact}
                </Typography>
              </Box>

              <Paper sx={{ 
                p: 2, 
                bgcolor: 'warning.50',
                border: '1px solid',
                borderColor: 'warning.main',
                borderRadius: 1,
                mb: 2
              }}>
                <Typography variant="body2" color="warning.dark">
                  ⚠️ <strong>Budget Alert:</strong> This action would exceed the monthly budget limit by $2,300
                </Typography>
              </Paper>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Simulation Results:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'error.100',
                  border: '1px solid',
                  borderColor: 'error.main'
                }}>
                  <Typography variant="body2">
                    💰 <strong>Financial Impact:</strong> $12,300 total cost
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'warning.100',
                  border: '1px solid',
                  borderColor: 'warning.main'
                }}>
                  <Typography variant="body2">
                    📊 <strong>Budget Status:</strong> 123% of allocated budget
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'info.100',
                  border: '1px solid',
                  borderColor: 'info.main'
                }}>
                  <Typography variant="body2">
                    ⏱️ <strong>Timeline Impact:</strong> 2 week delay estimated
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
              <Button 
                variant="outlined" 
                color="success" 
                size="small"
              >
                Proceed Anyway
              </Button>
              <Button 
                variant="contained" 
                color="warning" 
                size="small"
              >
                Modify Plan
              </Button>
              <Button 
                variant="outlined" 
                color="error" 
                size="small"
              >
                Cancel Action
              </Button>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Informed Decisions:</strong> Simulation lets users preview possible outcomes 
                before committing, making the system more trustworthy by revealing consequences upfront.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}