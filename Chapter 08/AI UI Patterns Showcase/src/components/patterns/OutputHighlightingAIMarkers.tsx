import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip
} from '@mui/material';
import { AutoAwesome, Person } from '@mui/icons-material';

export function OutputHighlightingAIMarkers() {
  const aiText = "The Taj Mahal was built in 1632.";
  const marker = "[AI Generated]";

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
            <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Output Highlighting / AI Source Markers
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
              <Box component="span" sx={{ color: 'success.main' }}>AI</Box> Output: <Box component="span" sx={{ color: 'success.main' }}>"The Taj Mahal was built in 1632."</Box>
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'info.main' }}>AI Generated</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI-Generated Content with Clear Attribution:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'primary.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AutoAwesome sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography variant="body2" color="primary.dark" sx={{ fontWeight: 'bold' }}>
                  AI Output:
                </Typography>
                <Chip 
                  label="AI Generated"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Box>
              
              <Typography variant="body1" sx={{ 
                p: 2,
                bgcolor: 'primary.50',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'primary.200'
              }}>
                "{aiText}"
              </Typography>
            </Paper>

            {/* Comparison with Human Content */}
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Person sx={{ color: 'grey.600', fontSize: 18 }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Human Content:
                </Typography>
                <Chip 
                  label="User Written"
                  size="small"
                  color="default"
                  variant="outlined"
                />
              </Box>
              
              <Typography variant="body1" sx={{ 
                p: 2,
                bgcolor: 'grey.50',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'grey.300'
              }}>
                "This section was written by the user and contains their original thoughts and research."
              </Typography>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Content Attribution Legend:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: 14 }} />}
                  label="AI Generated"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<Person sx={{ fontSize: 14 }} />}
                  label="User Written"
                  size="small"
                  color="default"
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
                <strong>Trust & Transparency:</strong> Generated text is clearly marked or highlighted 
                so users can distinguish it from human-authored content. This builds trust and prevents 
                confusion in collaborative settings.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}