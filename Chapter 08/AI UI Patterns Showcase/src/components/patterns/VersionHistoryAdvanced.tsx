import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip,
  Divider
} from '@mui/material';
import { History, Restore, Timeline } from '@mui/icons-material';
import { useState } from 'react';

export function VersionHistoryAdvanced() {
  const [selectedVersion, setSelectedVersion] = useState(2); // Version 3 selected by default

  const versions = [
    { id: 1, text: "Delivery in 2 days.", timestamp: "3 min ago" },
    { id: 2, text: "Your package arrives Wednesday.", timestamp: "2 min ago" },
    { id: 3, text: "Expected delivery within 48 hours.", timestamp: "1 min ago" }
  ];

  const handleRestore = (versionIndex: number) => {
    setSelectedVersion(versionIndex);
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
            <Timeline sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Version History
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
            
            {versions.map((version) => (
              <Typography 
                key={version.id}
                variant="body1" 
                color="secondary.main" 
                gutterBottom
              >
                Version {version.id}: <Box component="span" sx={{ color: 'success.main' }}>"{version.text}"</Box>
              </Typography>
            ))}
            <Typography variant="body1" color="warning.main">
              [Restore V2]
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
              <Typography variant="body1" gutterBottom>
                {versions[selectedVersion].text}
              </Typography>
              <Chip
                label={`Version ${selectedVersion + 1}`}
                size="small"
                color="primary"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {versions[selectedVersion].timestamp}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Version History:
            </Typography>
            
            <List sx={{ bgcolor: 'white', borderRadius: 1, mb: 2 }}>
              {versions.map((version, index) => (
                <Box key={version.id}>
                  <ListItem disablePadding>
                    <ListItemButton 
                      onClick={() => handleRestore(index)}
                      selected={selectedVersion === index}
                      sx={{
                        '&.Mui-selected': {
                          bgcolor: 'primary.100',
                          '&:hover': {
                            bgcolor: 'primary.200',
                          }
                        }
                      }}
                    >
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" color="primary.main">
                              Version {version.id}
                            </Typography>
                            {selectedVersion === index && (
                              <Chip label="Current" size="small" color="primary" />
                            )}
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                              "{version.text}"
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {version.timestamp}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < versions.length - 1 && <Divider />}
                </Box>
              ))}
            </List>

            <Button
              startIcon={<Restore />}
              variant="outlined"
              size="small"
              onClick={() => handleRestore(1)} // Restore to V2
              disabled={selectedVersion === 1}
            >
              Restore V2
            </Button>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Complete version tracking with easy restoration to previous drafts.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}