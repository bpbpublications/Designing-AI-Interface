import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Button,
  ButtonGroup,
  Paper
} from '@mui/material';
import { Edit, ExpandMore, Summarize, Style } from '@mui/icons-material';

export function InlineRewriteButtons() {
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
            <Edit sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Inline Rewrite Buttons
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
              csharp
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Sentence: <Box component="span" sx={{ color: 'success.main' }}>"The product is good."</Box>
            </Typography>
            <Typography variant="body1" color="primary.main">
              [Rewrite] [Expand] [Summarize] [Make Formal]
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body1" gutterBottom>
              Original text: 
              <Box component="span" sx={{ 
                ml: 1, 
                px: 1, 
                py: 0.5, 
                bgcolor: 'warning.100',
                border: '2px solid',
                borderColor: 'warning.main',
                borderRadius: 1,
                fontWeight: 'medium'
              }}>
                "The product is good."
              </Box>
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Apply AI transformations:
              </Typography>
              <ButtonGroup variant="outlined" size="small" sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Button startIcon={<Edit />}>
                  Rewrite
                </Button>
                <Button startIcon={<ExpandMore />}>
                  Expand
                </Button>
                <Button startIcon={<Summarize />}>
                  Summarize
                </Button>
                <Button startIcon={<Style />}>
                  Make Formal
                </Button>
              </ButtonGroup>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Lets users apply AI transformations instantly on highlighted text with one-click actions.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}