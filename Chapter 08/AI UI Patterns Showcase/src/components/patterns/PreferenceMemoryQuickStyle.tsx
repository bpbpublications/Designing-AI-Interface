import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { Memory, Style } from '@mui/icons-material';

export function PreferenceMemoryQuickStyle() {
  const preferredStyle = "[Formal] [Concise]";
  const aiResponse = "Rewriting in your usual Formal + Concise tone.";

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
            <Memory sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Preference Memory & Quick Style Buttons
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
              vbnet
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Preferred Style: <Box component="span" sx={{ color: 'secondary.main' }}>[Formal] [Concise]</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'success.main' }}>AI</Box>: <Box component="span" sx={{ color: 'success.main' }}>"Rewriting in your usual Formal + Concise tone."</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Personalized Style Preferences:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Your Preferred Style:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip 
                  label="Formal"
                  color="secondary"
                  variant="filled"
                />
                <Chip 
                  label="Concise"
                  color="secondary"
                  variant="filled"
                />
              </Box>
              
              <Paper sx={{ 
                p: 2, 
                bgcolor: 'success.50',
                border: '1px solid',
                borderColor: 'success.200'
              }}>
                <Typography variant="body2" color="success.dark">
                  <strong>AI:</strong> "{aiResponse}"
                </Typography>
              </Paper>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Quick Style Options:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="small" 
                  color="secondary"
                  startIcon={<Style />}
                >
                  Formal
                </Button>
                <Button 
                  variant="contained" 
                  size="small" 
                  color="secondary"
                >
                  Concise
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="secondary"
                >
                  Casual
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="secondary"
                >
                  Detailed
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="secondary"
                >
                  Creative
                </Button>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Smart Adaptation:</strong> The system remembers past user choices and provides 
                one-click style buttons for faster iteration. This reduces repetitive setup and makes 
                outputs feel tailored to the individual.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}