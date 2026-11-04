import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Alert,
  Chip
} from '@mui/material';
import { Policy, Block } from '@mui/icons-material';

export function PolicyAwareExecutionAgentic() {
  const actionBlocked = "Exceeds $500 auto-approval policy";
  const requirement = "Requires Manager Review";

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
            <Policy sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Policy-Aware Execution
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
              pascal
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              ⚠ Action Blocked: Exceeds <Box component="span" sx={{ color: 'warning.main' }}>$500</Box> auto-approval <Box component="span" sx={{ color: 'secondary.main' }}>policy</Box>
            </Typography>
            <Typography variant="body1">
              Requires Manager Review
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Policy Enforcement in Action:
            </Typography>
            
            <Alert 
              severity="warning" 
              sx={{ 
                mb: 2,
                bgcolor: 'warning.100',
                border: '2px solid',
                borderColor: 'warning.main'
              }}
              icon={<Block />}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                ⚠ Action Blocked
              </Typography>
            </Alert>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'error.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: 'error.dark' }}>
                Policy Violation Detected:
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {actionBlocked}
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                The requested action cannot be completed automatically due to organizational policy constraints.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Required Action:
                </Typography>
                <Chip 
                  label={requirement}
                  color="warning"
                  size="small"
                />
              </Box>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Active Policies:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'error.100',
                  border: '1px solid',
                  borderColor: 'error.main'
                }}>
                  <Typography variant="body2">
                    🚫 <strong>Auto-approval limit:</strong> $500 maximum
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    📋 <strong>Manager approval:</strong> Required for &gt;$500
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    🔒 <strong>Security review:</strong> Required for &gt;$10,000
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
                <strong>Compliance Integration:</strong> Policy-aware execution enforces organizational 
                rules directly in the UI, preventing agents from operating outside compliance boundaries 
                and ensuring all actions follow established procedures.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}