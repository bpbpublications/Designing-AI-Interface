import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip,
  Button
} from '@mui/material';
import { AutoAwesome, Lightbulb } from '@mui/icons-material';

export function GenAICreativeNudges() {
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
            <AutoAwesome sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              GenAI - Creative Nudges
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
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h4" sx={{ mr: 1 }}>🎨</Typography>
              <Typography variant="body1" color="success.dark">
                "You've generated 5 drafts today!"
              </Typography>
            </Box>
            
            <Typography variant="body1" color="primary.main">
              [Try a <Box component="span" sx={{ color: 'warning.main' }}>new</Box> style?]
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Lightbulb />}
              sx={{ borderRadius: 2 }}
            >
              Try Casual Tone
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<AutoAwesome />}
              sx={{ borderRadius: 2 }}
            >
              Add More Detail
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ borderRadius: 2 }}
            >
              Switch Perspective
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Encourages creative exploration with gentle nudges and usage insights.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}