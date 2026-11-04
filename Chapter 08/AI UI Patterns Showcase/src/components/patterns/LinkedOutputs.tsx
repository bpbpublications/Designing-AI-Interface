import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  TextField,
  Button,
  Chip
} from '@mui/material';
import { Link, Image, DataObject, BarChart, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

export function LinkedOutputs() {
  const [inputText, setInputText] = useState("Create infographic on climate data");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOutputs, setShowOutputs] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowOutputs(true);
    }, 2000);
  };

  const resetDemo = () => {
    setShowOutputs(false);
    setIsGenerating(false);
  };

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
            <Link sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Linked Outputs
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
              <Box component="span" sx={{ color: 'primary.main' }}>Text</Box> →{' '}
              <Box component="span" sx={{ color: 'success.main' }}>"Create infographic on climate data"</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'info.main' }}>AI:</Box>{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>Image</Box>{' '}
              + <Box component="span" sx={{ color: 'error.main' }}>JSON data</Box>{' '}
              + <Box component="span" sx={{ color: 'secondary.main' }}>HTML chart</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                size="small"
                placeholder="Enter your request..."
              />
              <Button
                variant="contained"
                color="warning"
                onClick={showOutputs ? resetDemo : handleGenerate}
                disabled={isGenerating}
                startIcon={showOutputs ? undefined : <ArrowForward />}
              >
                {showOutputs ? 'Reset' : isGenerating ? 'Generating...' : 'Generate'}
              </Button>
            </Box>

            {isGenerating && (
              <Paper sx={{ 
                p: 2, 
                bgcolor: 'info.50',
                border: '1px solid',
                borderColor: 'info.200',
                textAlign: 'center'
              }}>
                <Typography variant="body2" color="info.dark">
                  AI is creating linked outputs...
                </Typography>
              </Paper>
            )}

            {showOutputs && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Image Output */}
                <Paper sx={{ 
                  p: 2, 
                  border: '2px solid',
                  borderColor: 'warning.light',
                  bgcolor: 'warning.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Image sx={{ color: 'warning.main' }} />
                    <Chip label="Generated Image" size="small" color="warning" />
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
                      📊 Climate Data Infographic Image
                    </Typography>
                  </Box>
                </Paper>

                {/* JSON Data Output */}
                <Paper sx={{ 
                  p: 2, 
                  border: '2px solid',
                  borderColor: 'error.light',
                  bgcolor: 'error.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <DataObject sx={{ color: 'error.main' }} />
                    <Chip label="JSON Data" size="small" color="error" />
                  </Box>
                  <Box sx={{ 
                    p: 1, 
                    bgcolor: 'grey.900', 
                    borderRadius: 1,
                    color: 'white',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>
                    {`{
  "temperature": [14.2, 15.1, 16.3],
  "co2": [412, 415, 418],
  "year": [2020, 2021, 2022]
}`}
                  </Box>
                </Paper>

                {/* HTML Chart Output */}
                <Paper sx={{ 
                  p: 2, 
                  border: '2px solid',
                  borderColor: 'secondary.light',
                  bgcolor: 'secondary.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <BarChart sx={{ color: 'secondary.main' }} />
                    <Chip label="HTML Chart" size="small" color="secondary" />
                  </Box>
                  <Box sx={{ 
                    p: 1, 
                    bgcolor: 'grey.900', 
                    borderRadius: 1,
                    color: 'white',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>
                    {`<div class="chart">
  <canvas id="climate-chart"></canvas>
  <script>/* Chart.js code */</script>
</div>`}
                  </Box>
                </Paper>

                <Paper sx={{ 
                  p: 2, 
                  bgcolor: 'success.50',
                  border: '1px solid',
                  borderColor: 'success.200'
                }}>
                  <Typography variant="body2" color="success.dark">
                    <strong>✓ All outputs are linked:</strong> The JSON data powers the HTML chart, and both complement the infographic image.
                  </Typography>
                </Paper>
              </Box>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Generate multiple interconnected outputs that work together as a cohesive set.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}