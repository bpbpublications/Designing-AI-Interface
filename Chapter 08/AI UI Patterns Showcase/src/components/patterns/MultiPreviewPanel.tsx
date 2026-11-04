import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip
} from '@mui/material';
import { ViewModule, TextFields, Image, Code } from '@mui/icons-material';

export function MultiPreviewPanel() {
  const previewData = {
    text: "Visit Paris this spring.",
    image: "🗼 Eiffel Tower Poster Preview",
    code: "<svg> Eiffel Tower Graphic </svg>"
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
            <ViewModule sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Multi-Preview Panel
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
              <Box component="span" sx={{ color: 'primary.main' }}>Text:</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>"Visit Paris this spring."</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'warning.main' }}>Image:</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>[🗼 Eiffel Tower Poster Preview]</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'error.main' }}>Code:</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}><svg> Eiffel Tower Graphic </svg></Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Live Preview Panel:
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Text Preview */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'primary.light',
                bgcolor: 'primary.50'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <TextFields sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Chip label="Text" size="small" color="primary" />
                </Box>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "{previewData.text}"
                </Typography>
              </Paper>

              {/* Image Preview */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'warning.light',
                bgcolor: 'warning.50'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Image sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Chip label="Image" size="small" color="warning" />
                </Box>
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'warning.100', 
                  borderRadius: 1,
                  textAlign: 'center',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="body2" color="warning.dark">
                    {previewData.image}
                  </Typography>
                </Box>
              </Paper>

              {/* Code Preview */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'error.light',
                bgcolor: 'error.50'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Code sx={{ fontSize: 16, color: 'error.main' }} />
                  <Chip label="Code" size="small" color="error" />
                </Box>
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'grey.900', 
                  borderRadius: 1,
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem'
                }}>
                  {previewData.code}
                </Box>
              </Paper>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Simultaneous preview of multiple output formats from a single generation request.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}