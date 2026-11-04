import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Divider,
  Chip
} from '@mui/material';
import { TableRows, TextFields, Image, Code } from '@mui/icons-material';

export function SideBySideOutputs() {
  const outputs = {
    text: "Ocean waves crash rhythmically against the rocky shore, creating a symphony of natural sounds.",
    image: "🌊 Ocean Wave Visualization",
    code: "<svg>wave</svg>"
  };

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
            <TableRows sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Side-by-Side Outputs
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
              javascript
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'primary.main' }}>Text</Box> |{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>Image</Box> |{' '}
              <Box component="span" sx={{ color: 'error.main' }}>Code</Box>
            </Typography>
            <Typography variant="body1" sx={{ borderBottom: '1px solid', borderColor: 'grey.400', pb: 1, mb: 1 }}>
              ————————————————————————————
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'success.main' }}>"Ocean waves"</Box> |{' '}
              <Box component="span" sx={{ color: 'info.main' }}>[🌊]</Box> |{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}><svg>wave</svg></Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr auto 1fr auto 1fr',
              gap: 2,
              alignItems: 'stretch',
              minHeight: '120px'
            }}>
              {/* Text Column */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'primary.light',
                bgcolor: 'primary.50',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <TextFields sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Chip label="Text" size="small" color="primary" />
                </Box>
                <Typography variant="body2" sx={{ flex: 1, fontSize: '0.8rem' }}>
                  {outputs.text}
                </Typography>
              </Paper>

              {/* Divider */}
              <Divider 
                orientation="vertical" 
                sx={{ 
                  bgcolor: 'grey.400',
                  width: '2px',
                  alignSelf: 'stretch'
                }} 
              />

              {/* Image Column */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'warning.light',
                bgcolor: 'warning.50',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Image sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Chip label="Image" size="small" color="warning" />
                </Box>
                <Box sx={{ 
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'warning.100',
                  borderRadius: 1,
                  p: 1
                }}>
                  <Typography variant="body2" color="warning.dark" sx={{ fontSize: '0.8rem' }}>
                    {outputs.image}
                  </Typography>
                </Box>
              </Paper>

              {/* Divider */}
              <Divider 
                orientation="vertical" 
                sx={{ 
                  bgcolor: 'grey.400',
                  width: '2px',
                  alignSelf: 'stretch'
                }} 
              />

              {/* Code Column */}
              <Paper sx={{ 
                p: 2, 
                border: '2px solid',
                borderColor: 'error.light',
                bgcolor: 'error.50',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Code sx={{ fontSize: 16, color: 'error.main' }} />
                  <Chip label="Code" size="small" color="error" />
                </Box>
                <Box sx={{ 
                  flex: 1,
                  p: 1,
                  bgcolor: 'grey.900',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem'
                    }}
                  >
                    {outputs.code}
                  </Typography>
                </Box>
              </Paper>
            </Box>

            <Box sx={{ 
              mt: 2, 
              p: 1, 
              bgcolor: 'info.50', 
              borderRadius: 1,
              textAlign: 'center'
            }}>
              <Typography variant="body2" color="info.dark">
                All outputs generated simultaneously from: "Ocean waves"
              </Typography>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Display multiple output formats in clearly separated columns for easy comparison.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}