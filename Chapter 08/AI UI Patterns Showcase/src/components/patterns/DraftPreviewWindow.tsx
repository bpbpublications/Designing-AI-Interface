import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  ButtonGroup,
  Divider
} from '@mui/material';
import { Preview, Add, Refresh } from '@mui/icons-material';

export function DraftPreviewWindow() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'primary.light',
        bgcolor: 'primary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Preview sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Draft Preview Window
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
            
            <Typography variant="body1" color="error.main" gutterBottom>
              AI Draft Preview:
            </Typography>
            <Divider sx={{ my: 1, borderColor: 'error.main' }} />
            <Typography variant="body1" color="success.main" gutterBottom>
              "Your meeting is confirmed at 3PM."
            </Typography>
            <Divider sx={{ my: 1, borderColor: 'error.main' }} />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="body1" color="primary.main">
                [Insert]
              </Typography>
              <Typography variant="body1" color="warning.main">
                [Regenerate]
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Preview Window:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px dashed',
              borderColor: 'error.main',
              bgcolor: 'error.50'
            }}>
              <Typography variant="body2" color="error.main" gutterBottom>
                AI Draft Preview:
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "Your meeting is confirmed at 3PM."
              </Typography>
              <Divider sx={{ my: 1 }} />
              
              <ButtonGroup variant="outlined" size="small">
                <Button 
                  startIcon={<Add />}
                  color="primary"
                >
                  Insert
                </Button>
                <Button 
                  startIcon={<Refresh />}
                  color="warning"
                >
                  Regenerate
                </Button>
              </ButtonGroup>
            </Paper>

            <Typography variant="body2" color="text.secondary">
              Dedicated preview area with clear action buttons for draft management.
            </Typography>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Shows AI-generated content in a dedicated preview window with clear insert/regenerate options.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}