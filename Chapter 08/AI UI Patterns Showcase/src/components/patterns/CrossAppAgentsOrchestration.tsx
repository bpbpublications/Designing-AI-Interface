import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  Avatar
} from '@mui/material';
import { Hub, Email, BusinessCenter } from '@mui/icons-material';

export function CrossAppAgentsOrchestration() {
  const connectedApps = ["[Slack]", "[CRM]", "[Email]"];
  const task = "Update customer status across apps";

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'secondary.light',
        bgcolor: 'secondary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Hub sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Cross-App Agents / Orchestration Consoles
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
              Agent Connected: [<Box component="span" sx={{ color: 'info.main' }}>Slack</Box>] [<Box component="span" sx={{ color: 'warning.main' }}>CRM</Box>] [<Box component="span" sx={{ color: 'success.main' }}>Email</Box>]
            </Typography>
            <Typography variant="body1">
              Task: Update customer status across apps
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Multi-App Agent Orchestration:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'secondary.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                🔗 Agent Connected:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ bgcolor: 'info.main', width: 24, height: 24 }}>
                    <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>S</Typography>
                  </Avatar>
                  <Chip 
                    label="Slack"
                    color="info"
                    size="small"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BusinessCenter sx={{ color: 'warning.main', fontSize: 24 }} />
                  <Chip 
                    label="CRM"
                    color="warning"
                    size="small"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ color: 'success.main', fontSize: 24 }} />
                  <Chip 
                    label="Email"
                    color="success"
                    size="small"
                  />
                </Box>
              </Box>

              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Current Task:
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {task}
              </Typography>

              <Paper sx={{ 
                p: 2, 
                bgcolor: 'warning.50',
                border: '1px solid',
                borderColor: 'warning.200',
                borderRadius: 1
              }}>
                <Typography variant="body2" color="warning.dark">
                  🔄 <strong>Orchestration Status:</strong> Coordinating customer data sync across 
                  Slack notifications, CRM records, and email follow-ups
                </Typography>
              </Paper>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Cross-App Actions:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'info.100',
                  border: '1px solid',
                  borderColor: 'info.main'
                }}>
                  <Typography variant="body2">
                    📱 <strong>Slack:</strong> Send team notification about status change
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'warning.100',
                  border: '1px solid',
                  borderColor: 'warning.main'
                }}>
                  <Typography variant="body2">
                    💼 <strong>CRM:</strong> Update customer record with new status
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: 'success.100',
                  border: '1px solid',
                  borderColor: 'success.main'
                }}>
                  <Typography variant="body2">
                    ✉️ <strong>Email:</strong> Trigger automated follow-up sequence
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
                <strong>Unified Control:</strong> Cross-app orchestration panels let users supervise 
                agents coordinating across multiple systems from a single unified view, ensuring 
                consistency and reducing context switching.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}