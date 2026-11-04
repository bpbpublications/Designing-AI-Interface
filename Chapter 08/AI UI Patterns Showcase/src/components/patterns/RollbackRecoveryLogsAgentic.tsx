import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { Restore, History } from '@mui/icons-material';

export function RollbackRecoveryLogsAgentic() {
  const rollbackAction = "Rollback Performed: Invoice #234 approval";
  const status = "undone";

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
            <Restore sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Rollback & Recovery Logs
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
              <Box component="span" sx={{ color: 'warning.main' }}>Rollback Performed</Box>: Invoice <Box component="span" sx={{ color: 'success.main' }}>#234</Box> <Box component="span" sx={{ color: 'info.main' }}>approval</Box> ↓ <Box component="span" sx={{ color: 'error.main' }}>undone</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Recovery Action Completed:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'warning.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <History sx={{ color: 'warning.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Rollback Action:
                </Typography>
                <Chip 
                  label="Completed"
                  color="success"
                  size="small"
                />
              </Box>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {rollbackAction}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Status:
                </Typography>
                <Chip 
                  label={status}
                  color="error"
                  size="small"
                />
              </Box>

              <Paper sx={{ 
                p: 2, 
                bgcolor: 'success.50',
                border: '1px solid',
                borderColor: 'success.200',
                borderRadius: 1
              }}>
                <Typography variant="body2" color="success.dark">
                  ✅ <strong>Recovery Successful:</strong> The system has been restored to its previous state. 
                  All related changes have been reversed.
                </Typography>
              </Paper>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Rollback Details:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'info.100',
                  border: '1px solid',
                  borderColor: 'info.main'
                }}>
                  <Typography variant="body2">
                    📄 <strong>Document:</strong> Invoice #234 approval status reverted
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    🔄 <strong>Database:</strong> Approval record removed
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'grey.100',
                  border: '1px solid',
                  borderColor: 'grey.300'
                }}>
                  <Typography variant="body2">
                    📧 <strong>Notifications:</strong> Stakeholders informed of rollback
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
              <Button 
                variant="contained" 
                color="info" 
                size="small"
                startIcon={<History />}
              >
                View Full Log
              </Button>
              <Button 
                variant="outlined" 
                color="warning" 
                size="small"
              >
                Restore Again
              </Button>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Error Recovery:</strong> Rollback and recovery logs provide a safety net, 
                allowing users to undo problematic actions and restore the system to a known good state 
                when things go wrong.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}