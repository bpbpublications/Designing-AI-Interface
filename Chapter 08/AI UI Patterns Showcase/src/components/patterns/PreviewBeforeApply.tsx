import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  ButtonGroup,
  Divider,
  Chip
} from '@mui/material';
import { Preview, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { useState } from 'react';

export function PreviewBeforeApply() {
  const [selectedVersion, setSelectedVersion] = useState<'current' | 'formal' | 'casual' | null>(null);

  const versions = {
    current: "Thanks for your help.",
    formal: "I appreciate your assistance.",
    casual: "Thanks a ton!"
  };

  const handleVersionSelect = (version: 'current' | 'formal' | 'casual') => {
    setSelectedVersion(version);
  };

  const applyVersion = () => {
    if (selectedVersion) {
      // Simulate applying the selected version
      alert(`Applied version: "${versions[selectedVersion]}"`);
    }
  };

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
            <Preview sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Preview Before Apply
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
              pgsql
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Current: <Box component="span" sx={{ color: 'success.main' }}>"Thanks for your help."</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              AI (Formal): <Box component="span" sx={{ color: 'success.main' }}>"I appreciate your assistance."</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              AI (Casual): <Box component="span" sx={{ color: 'success.main' }}>"Thanks a ton!"</Box>
            </Typography>
            <Typography variant="body1" color="secondary.main">
              [Select Version]
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Select Version to Apply:
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              {Object.entries(versions).map(([key, text]) => (
                <Paper 
                  key={key}
                  sx={{ 
                    p: 2, 
                    border: selectedVersion === key ? '2px solid' : '1px solid',
                    borderColor: selectedVersion === key ? 'success.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    bgcolor: selectedVersion === key ? 'success.50' : 'white'
                  }}
                  onClick={() => handleVersionSelect(key as 'current' | 'formal' | 'casual')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip 
                        label={key === 'current' ? 'Current' : `AI (${key.charAt(0).toUpperCase() + key.slice(1)})`}
                        size="small" 
                        color={selectedVersion === key ? 'success' : 'default'}
                      />
                      {selectedVersion === key ? (
                        <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                      ) : (
                        <RadioButtonUnchecked sx={{ color: 'grey.400', fontSize: 18 }} />
                      )}
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ 
                    fontStyle: 'italic',
                    pl: 1
                  }}>
                    "{text}"
                  </Typography>
                </Paper>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            {selectedVersion && (
              <Paper sx={{ 
                p: 2, 
                bgcolor: 'info.50', 
                border: '1px solid', 
                borderColor: 'info.200',
                mb: 2
              }}>
                <Typography variant="body2" color="info.dark" gutterBottom>
                  <strong>Preview Selected Version:</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "{versions[selectedVersion]}"
                </Typography>
              </Paper>
            )}

            <ButtonGroup variant="outlined" size="small">
              <Button
                onClick={applyVersion}
                disabled={!selectedVersion}
                color="success"
              >
                Apply Selected Version
              </Button>
              <Button
                onClick={() => setSelectedVersion(null)}
                disabled={!selectedVersion}
              >
                Clear Selection
              </Button>
            </ButtonGroup>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Compare AI suggestions with current content before applying changes.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}