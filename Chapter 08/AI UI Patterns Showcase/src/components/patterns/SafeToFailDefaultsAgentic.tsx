import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip
} from '@mui/material';
import { Security, Preview } from '@mui/icons-material';

export function SafeToFailDefaultsAgentic() {
  const actionMode = "[Draft Payment Request]";
  const status = "(Pending Review)";

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'success.light',
        bgcolor: 'success.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Security sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Safe-to-Fail Defaults
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
              less
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Action Mode: <Box component="span" sx={{ color: 'error.main' }}>[Draft Payment Request]</Box> <Box component="span" sx={{ color: 'warning.main' }}>(Pending Review)</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Safe Default Mode Active:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'success.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Preview sx={{ color: 'success.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Action Mode:
                </Typography>
                <Chip 
                  label="Draft Payment Request"
                  color="error"
                  size="small"
                />
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Status:
                </Typography>
                <Chip 
                  label="Pending Review"
                  color="warning"
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
                  🛡️ <strong>Safe Mode:</strong> Running in low-impact mode. All actions will be saved 
                  as drafts for review before execution.
                </Typography>
              </Paper>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Available Modes:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="🟢 Draft Mode"
                  size="small"
                  color="success"
                  variant="filled"
                />
                <Chip
                  label="⚪ Preview Mode"
                  size="small"
                  color="default"
                  variant="outlined"
                />
                <Chip
                  label="🔴 Live Mode"
                  size="small"
                  color="error"
                  variant="outlined"
                />
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Risk Mitigation:</strong> Safe defaults run tasks in low-impact modes, like drafts 
                or previews, so that potential errors remain non-destructive until explicitly approved.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}