import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';
import { History, Visibility } from '@mui/icons-material';

export function AuditTrailsReplayLogsAgentic() {
  const logEntries = [
    { time: "10:05", action: "Verified Supplier A", status: "success" },
    { time: "10:07", action: "Approved Invoice #234", status: "success" },
    { time: "10:10", action: "Payment Failed", status: "error" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

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
            <History sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Audit Trails & Replay Logs
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
              makefile
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Log:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'warning.main' }}>10:05</Box> — Verified <Box component="span" sx={{ color: 'success.main' }}>Supplier A</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'warning.main' }}>10:07</Box> — Approved <Box component="span" sx={{ color: 'success.main' }}>Invoice #234</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'warning.main' }}>10:10</Box> — <Box component="span" sx={{ color: 'error.main' }}>Payment Failed</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Complete Activity Log:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Visibility sx={{ color: 'info.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  AI Activity Log:
                </Typography>
              </Box>
              
              <List dense sx={{ p: 0 }}>
                {logEntries.map((entry, index) => (
                  <ListItem key={index} sx={{ 
                    px: 0, 
                    py: 0.5,
                    borderLeft: '3px solid',
                    borderLeftColor: entry.status === 'success' ? 'success.main' : 'error.main',
                    pl: 1
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                      <Chip 
                        label={entry.time}
                        size="small"
                        color="warning"
                        variant="outlined"
                      />
                      <Typography variant="body2" sx={{ flex: 1 }}>
                        {entry.action}
                      </Typography>
                      <Chip 
                        label={entry.status === 'success' ? '✓' : '✗'}
                        size="small"
                        color={getStatusColor(entry.status) as any}
                      />
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Log Features:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="📋 Full Audit Trail"
                  size="small"
                  color="info"
                  variant="outlined"
                />
                <Chip
                  label="🔄 Replay Available"
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
                <Chip
                  label="📊 Compliance Ready"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Accountability & Learning:</strong> Audit trails document what the AI did and when, 
                while replay logs allow users to review decisions for compliance or troubleshooting purposes.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}