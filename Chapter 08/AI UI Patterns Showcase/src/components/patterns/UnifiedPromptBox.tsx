import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip
} from '@mui/material';
import { Input, ArrowDropDown } from '@mui/icons-material';
import { useState } from 'react';

export function UnifiedPromptBox() {
  const [prompt, setPrompt] = useState("Create a travel poster");
  const [outputType, setOutputType] = useState("text");

  const outputTypes = [
    { value: 'text', label: 'Text', color: 'primary' },
    { value: 'image', label: 'Image', color: 'warning' },
    { value: 'audio', label: 'Audio', color: 'success' },
    { value: 'code', label: 'Code', color: 'error' }
  ];

  const outputs = {
    text: "Visit the breathtaking landscapes of New Zealand, where adventure meets tranquility. From the majestic fjords to rolling green hills, every moment is a new discovery.",
    image: "[🖼️ Travel poster image would be generated here]",
    audio: "[🎵 Audio narration file would be generated here]",
    code: "<div class='travel-poster'>\n  <h1>New Zealand Adventure</h1>\n  <img src='landscape.jpg'/>\n  <p>Discover Paradise</p>\n</div>"
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
            <Input sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Unified Prompt Box
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
              mathematica
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Enter Prompt: <Box component="span" sx={{ color: 'warning.main' }}>"Create a travel poster"</Box>
            </Typography>
            <Typography variant="body1">
              Output: <Box component="span" sx={{ mr: 1, color: 'info.main' }}>▼ Choose →</Box>
              <Box component="span" sx={{ color: 'primary.main' }}>Text</Box> |{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>Image</Box> |{' '}
              <Box component="span" sx={{ color: 'success.main' }}>Audio</Box> |{' '}
              <Box component="span" sx={{ color: 'error.main' }}>Code</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                size="small"
              />
              
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Output</InputLabel>
                <Select
                  value={outputType}
                  label="Output"
                  onChange={(e) => setOutputType(e.target.value)}
                  IconComponent={ArrowDropDown}
                >
                  {outputTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              sx={{ mb: 2 }}
              disabled={!prompt.trim()}
            >
              Generate
            </Button>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'secondary.light',
              minHeight: '100px'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Generated Output:
                </Typography>
                <Chip
                  label={outputTypes.find(t => t.value === outputType)?.label}
                  size="small"
                  color={outputTypes.find(t => t.value === outputType)?.color as any}
                />
              </Box>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: outputType === 'code' ? 'monospace' : 'inherit',
                  whiteSpace: outputType === 'code' ? 'pre-line' : 'normal',
                  color: outputType === 'image' || outputType === 'audio' ? 'info.main' : 'text.primary',
                  fontStyle: outputType === 'image' || outputType === 'audio' ? 'italic' : 'normal'
                }}
              >
                {outputs[outputType as keyof typeof outputs]}
              </Typography>
            </Paper>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Single input interface that can generate multiple output types based on user selection.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}