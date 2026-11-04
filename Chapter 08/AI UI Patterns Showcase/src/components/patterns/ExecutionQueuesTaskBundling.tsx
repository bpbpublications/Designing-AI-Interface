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
import { Queue, ListAlt } from '@mui/icons-material';

export function ExecutionQueuesTaskBundling() {
  const queueTasks = [
    "1. Validate Invoice",
    "2. Update Ledger", 
    "3. Notify Supplier"
  ];

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
            <Queue sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Execution Queues & Task Bundling
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
              markdown
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Queue:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>1. Validate Invoice</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'info.main' }}>2. Update Ledger</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'info.main' }}>3. Notify Supplier</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Task Execution Queue:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'secondary.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <ListAlt sx={{ color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Queued Tasks:
                </Typography>
                <Chip 
                  label="3 pending"
                  color="secondary"
                  size="small"
                />
              </Box>
              
              <List dense sx={{ p: 0 }}>
                {queueTasks.map((task, index) => (
                  <ListItem key={index} sx={{ 
                    px: 0, 
                    py: 0.5,
                    bgcolor: index === 0 ? 'secondary.50' : 'transparent',
                    borderRadius: 1,
                    border: index === 0 ? '1px solid' : 'none',
                    borderColor: index === 0 ? 'secondary.main' : 'transparent'
                  }}>
                    <ListItemText 
                      primary={task}
                      primaryTypographyProps={{
                        variant: 'body2',
                        fontWeight: index === 0 ? 'bold' : 'normal'
                      }}
                    />
                    {index === 0 && (
                      <Chip 
                        label="Next"
                        size="small"
                        color="secondary"
                        variant="filled"
                      />
                    )}
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Queue Management Features:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="📊 Task Prioritization"
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
                <Chip
                  label="👀 Progress Monitoring"
                  size="small"
                  color="info"
                  variant="outlined"
                />
                <Chip
                  label="⏸️ Pause/Resume"
                  size="small"
                  color="warning"
                  variant="outlined"
                />
                <Chip
                  label="🔄 Reorder Tasks"
                  size="small"
                  color="success"
                  variant="outlined"
                />
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
                📈 <strong>Execution Status:</strong> Currently processing "Validate Invoice" (1/3 tasks)
              </Typography>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Organized Execution:</strong> Queued tasks are grouped and shown transparently, 
                letting users monitor and prioritize multiple actions at once, reducing cognitive overhead 
                while maintaining control.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}