import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button
} from '@mui/material';
import { TextFields, Image, Code } from '@mui/icons-material';
import { useState } from 'react';

export function ModeSwitchTabs() {
  const [activeMode, setActiveMode] = useState(0);
  const [prompt, setPrompt] = useState("Design a sunset logo");

  const modes = [
    { label: 'Text', icon: <TextFields />, output: 'A minimalist sunset logo featuring warm orange and pink gradients with clean geometric shapes representing the sun setting behind simple mountain silhouettes.' },
    { label: 'Image', icon: <Image />, output: '[🌅 Generated sunset logo image would appear here]' },
    { label: 'Code', icon: <Code />, output: '<svg viewBox="0 0 200 100">\n  <circle cx="100" cy="50" r="30" fill="orange"/>\n  <path d="M20,80 Q100,60 180,80" fill="darkblue"/>\n</svg>' }
  ];

  const handleModeChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveMode(newValue);
  };

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
            <TextFields sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Mode Switch Tabs
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
              Prompt: <Box component="span" sx={{ color: 'primary.main' }}>"Design a sunset logo"</Box>
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'success.main' }}>[Text]</Box>{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>[Image]</Box>{' '}
              <Box component="span" sx={{ color: 'error.main' }}>[Code]</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              sx={{ mb: 2 }}
              size="small"
            />

            <Tabs
              value={activeMode}
              onChange={handleModeChange}
              sx={{ 
                mb: 2,
                '& .MuiTab-root': {
                  minHeight: 40,
                  textTransform: 'none'
                }
              }}
            >
              {modes.map((mode, index) => (
                <Tab
                  key={index}
                  icon={mode.icon}
                  label={mode.label}
                  iconPosition="start"
                  sx={{
                    '&.Mui-selected': {
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }
                  }}
                />
              ))}
            </Tabs>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'primary.light',
              minHeight: '100px'
            }}>
              <Typography variant="body2" color="primary.main" gutterBottom>
                {modes[activeMode].label} Output:
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: activeMode === 2 ? 'monospace' : 'inherit',
                  whiteSpace: activeMode === 2 ? 'pre-line' : 'normal',
                  color: activeMode === 1 ? 'warning.main' : 'text.primary'
                }}
              >
                {modes[activeMode].output}
              </Typography>
            </Paper>

            <Button
              variant="contained"
              size="small"
              sx={{ mt: 2 }}
              disabled={!prompt.trim()}
            >
              Generate {modes[activeMode].label}
            </Button>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Switch between different output modes while maintaining the same input prompt.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}