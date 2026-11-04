import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  Alert
} from '@mui/material';
import { Science, PlayArrow, Visibility } from '@mui/icons-material';

export function ExplorationSandboxes() {
  const sandboxMode = "AI outputs are PREVIEW ONLY.";
  const actions = ["Promote to Main Document", "Discard"];

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
            <Science sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Exploration Sandboxes (low-stakes drafts)
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
              pgsql
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Sandbox Mode: AI outputs are <Box component="span" sx={{ color: 'secondary.main' }}>PREVIEW</Box> <Box component="span" sx={{ color: 'warning.main' }}>ONLY</Box>.
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'success.main' }}>Promote to Main Document</Box>] [<Box component="span" sx={{ color: 'error.main' }}>Discard</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Alert 
              severity="warning" 
              sx={{ 
                mb: 2,
                bgcolor: 'warning.100',
                border: '2px solid',
                borderColor: 'warning.main'
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                🧪 Sandbox Mode Active
              </Typography>
              <Typography variant="body2">
                {sandboxMode}
              </Typography>
            </Alert>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px dashed',
              borderColor: 'warning.light',
              bgcolor: 'warning.50'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Visibility sx={{ color: 'warning.dark' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'warning.dark' }}>
                  Preview Draft
                </Typography>
                <Chip 
                  label="Experimental" 
                  size="small" 
                  color="warning"
                />
              </Box>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                This is a safe space to experiment with AI-generated content. 
                Try different approaches without affecting your main work.
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ 
                fontStyle: 'italic',
                border: '1px dashed',
                borderColor: 'warning.main',
                p: 1,
                borderRadius: 1,
                bgcolor: 'white'
              }}>
                "Here's an experimental draft that explores a creative approach 
                to the problem. Feel free to iterate without consequences..."
              </Typography>
            </Paper>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
              <Button 
                variant="contained" 
                color="success" 
                size="small"
                startIcon={<PlayArrow />}
              >
                Promote to Main Document
              </Button>
              <Button 
                variant="outlined" 
                color="error" 
                size="small"
              >
                Discard
              </Button>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Safe Experimentation:</strong> Sandboxes allow users to experiment in a safe, 
                low-stakes space where drafts don't affect their main work. This encourages creativity 
                while minimizing anxiety over errors.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}