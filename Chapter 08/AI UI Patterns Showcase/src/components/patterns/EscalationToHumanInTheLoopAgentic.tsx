import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Alert
} from '@mui/material';
import { Warning, SupportAgent } from '@mui/icons-material';

export function EscalationToHumanInTheLoopAgentic() {
  const alert = "High-value payment detected";
  const escalation = "[Escalate to Compliance Officer]";

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
            <SupportAgent sx={{ mr: 1, color: 'error.main' }} />
            <Typography variant="h6" color="error.dark">
              Escalation to Human-in-the-Loop
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
              csharp
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              AI Alert: High-<Box component="span" sx={{ color: 'secondary.main' }}>value</Box> payment detected
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'info.main' }}>Escalate to Compliance Officer</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Automatic Escalation Triggered:
            </Typography>
            
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2,
                bgcolor: 'error.100',
                border: '2px solid',
                borderColor: 'error.main'
              }}
              icon={<Warning />}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                🚨 AI Alert: {alert}
              </Typography>
            </Alert>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'error.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2, color: 'error.dark' }}>
                Escalation Required:
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 2 }}>
                This transaction exceeds normal parameters and requires human review 
                before proceeding. The system has automatically flagged this for escalation.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Reason:
                </Typography>
                <Typography variant="body2">
                  Payment amount exceeds $10,000 threshold
                </Typography>
              </Box>
              
              <Button 
                variant="contained" 
                color="info" 
                size="small"
                startIcon={<SupportAgent />}
                fullWidth
              >
                Escalate to Compliance Officer
              </Button>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Escalation Triggers:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'error.100',
                  border: '1px solid',
                  borderColor: 'error.main'
                }}>
                  <Typography variant="body2">
                    💰 <strong>High-value transactions</strong> (&gt;$10,000)
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    ⚠️ <strong>Unusual patterns</strong> detected
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    🔒 <strong>Security concerns</strong> identified
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Smart Escalation:</strong> The AI recognizes when situations exceed its capabilities 
                or authority and automatically routes them to appropriate human experts, ensuring critical 
                decisions get proper oversight.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}