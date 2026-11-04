import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Alert
} from '@mui/material';
import { Error, Refresh, Save } from '@mui/icons-material';

export function ErrorHandlingFallbackFlows() {
  const taskFailed = "Could not reach Payment Server";
  const fallbackOptions = ["[Save Draft]", "[Retry Later]"];

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
            <Error sx={{ mr: 1, color: 'error.main' }} />
            <Typography variant="h6" color="error.dark">
              Error Handling & Fallback Flows
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
            
            <Typography variant="body1" gutterBottom>
              Task Failed: Could <Box component="span" sx={{ color: 'error.main' }}>not</Box> reach Payment <Box component="span" sx={{ color: 'warning.main' }}>Server</Box>
            </Typography>
            <Typography variant="body1">
              Fallback: [<Box component="span" sx={{ color: 'info.main' }}>Save Draft</Box>] [<Box component="span" sx={{ color: 'success.main' }}>Retry Later</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Error Recovery Options:
            </Typography>
            
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2,
                bgcolor: 'error.100',
                border: '2px solid',
                borderColor: 'error.main'
              }}
              icon={<Error />}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Task Failed: {taskFailed}
              </Typography>
            </Alert>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'warning.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2, color: 'warning.dark' }}>
                🔄 Fallback Options Available:
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                The system encountered an error while processing your request. 
                Here are the available recovery options:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
                <Button 
                  variant="contained" 
                  color="info" 
                  size="small"
                  startIcon={<Save />}
                >
                  Save Draft
                </Button>
                <Button 
                  variant="contained" 
                  color="success" 
                  size="small"
                  startIcon={<Refresh />}
                >
                  Retry Later
                </Button>
              </Box>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Error Recovery Strategy:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'info.100',
                  border: '1px solid',
                  borderColor: 'info.main'
                }}>
                  <Typography variant="body2">
                    💾 <strong>Save Draft:</strong> Preserve current progress for later completion
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'success.100',
                  border: '1px solid',
                  borderColor: 'success.main'
                }}>
                  <Typography variant="body2">
                    🔄 <strong>Retry Later:</strong> Automatically attempt again when service is available
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    📋 <strong>Manual Review:</strong> Escalate to human operator for manual processing
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'warning.50',
              border: '1px solid',
              borderColor: 'warning.200',
              mb: 2
            }}>
              <Typography variant="body2" color="warning.dark">
                ⚠️ <strong>Service Status:</strong> Payment Server temporarily unavailable. 
                Estimated recovery time: 15 minutes
              </Typography>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Graceful Recovery:</strong> Fallback flows ensure resilience—when errors occur, 
                the system switches to safe alternatives instead of silently failing, maintaining user 
                trust and workflow continuity.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}