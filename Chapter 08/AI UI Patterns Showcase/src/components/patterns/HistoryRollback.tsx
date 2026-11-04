import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Button,
  ButtonGroup,
  Paper,
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepButton
} from '@mui/material';
import { History, Restore, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { useState } from 'react';

export function HistoryRollback() {
  const [currentVersion, setCurrentVersion] = useState(2); // 0-indexed, so Version 3
  
  const versions = [
    { id: 1, text: "The product is good.", timestamp: "2 min ago" },
    { id: 2, text: "The product offers reliable value.", timestamp: "1 min ago" },
    { id: 3, text: "This product delivers exceptional quality and reliable performance.", timestamp: "Just now" }
  ];

  const handleRestore = (versionIndex: number) => {
    setCurrentVersion(versionIndex);
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
            <History sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              History & Rollback
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
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 1 }}>
              <Typography variant="body1" color="secondary.main">
                Version 1
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="secondary.main">
                Version 2
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="secondary.main">
                Version 3
              </Typography>
            </Box>
            <Typography variant="body1" color="warning.main">
              [Restore to Version 1]
            </Typography>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Current Version:
            </Typography>
            
            <Box sx={{ 
              p: 2, 
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: 1,
              bgcolor: 'primary.50',
              mb: 2
            }}>
              <Typography variant="body1">
                {versions[currentVersion].text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Version {currentVersion + 1} • {versions[currentVersion].timestamp}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Version History:
            </Typography>
            
            <Stepper activeStep={currentVersion} orientation="vertical" sx={{ mb: 2 }}>
              {versions.map((version, index) => (
                <Step key={version.id}>
                  <StepButton 
                    onClick={() => handleRestore(index)}
                    sx={{ textAlign: 'left' }}
                  >
                    <Box>
                      <Typography variant="body2" color="primary.main">
                        Version {version.id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        {version.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                        {version.timestamp}
                      </Typography>
                    </Box>
                  </StepButton>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {versions.map((version, index) => (
                <Button
                  key={version.id}
                  size="small"
                  variant={index === currentVersion ? 'contained' : 'outlined'}
                  startIcon={index === currentVersion ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
                  onClick={() => handleRestore(index)}
                  sx={{ textTransform: 'none' }}
                >
                  Version {version.id}
                </Button>
              ))}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Button
                startIcon={<Restore />}
                variant="outlined"
                size="small"
                onClick={() => handleRestore(0)}
                disabled={currentVersion === 0}
              >
                Restore to Version 1
              </Button>
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Allows users to undo/revisit past edits with comprehensive version history.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}