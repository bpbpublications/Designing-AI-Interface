import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button
} from '@mui/material';
import { CheckCircle, Edit, Cancel } from '@mui/icons-material';

export function ConfirmationCheckpointsAgentic() {
  const action = "Transfer $500 to Supplier X";
  const options = ["[Approve]", "[Edit]", "[Cancel]"];

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
            <CheckCircle sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Confirmation Checkpoints
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
              <Box component="span" sx={{ color: 'info.main' }}>AI Action</Box>: Transfer <Box component="span" sx={{ color: 'warning.main' }}>$500</Box> to Supplier X
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'success.main' }}>Approve</Box>] [<Box component="span" sx={{ color: 'info.main' }}>Edit</Box>] [<Box component="span" sx={{ color: 'error.main' }}>Cancel</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Action Requiring Confirmation:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'warning.main',
              bgcolor: 'warning.100'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                🚨 AI Action Requires Approval:
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {action}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  color="success" 
                  size="small"
                  startIcon={<CheckCircle />}
                >
                  Approve
                </Button>
                <Button 
                  variant="outlined" 
                  color="info" 
                  size="small"
                  startIcon={<Edit />}
                >
                  Edit
                </Button>
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  startIcon={<Cancel />}
                >
                  Cancel
                </Button>
              </Box>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Human Validation:</strong> Checkpoints introduce pauses where users validate 
                important actions, ensuring that potentially risky tasks are not executed blindly 
                without human oversight.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}