import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Tabs,
  Tab,
  Button,
  Chip
} from '@mui/material';
import { History, Compare } from '@mui/icons-material';
import { useState } from 'react';

export function MultiDraftViewVersionHistory() {
  const [selectedDraft, setSelectedDraft] = useState(0);
  
  const drafts = [
    { id: 1, content: "Hi team..." },
    { id: 2, content: "Dear colleagues..." },
    { id: 3, content: "Hello everyone..." }
  ];

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
            <History sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Multi-Draft View & Version History
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
              sql
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'secondary.main' }}>Draft 1</Box> | <Box component="span" sx={{ color: 'secondary.main' }}>Draft 2</Box> | <Box component="span" sx={{ color: 'secondary.main' }}>Draft 3</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'success.main' }}>"Hi team..."</Box> | <Box component="span" sx={{ color: 'success.main' }}>"Dear colleagues..."</Box> | <Box component="span" sx={{ color: 'success.main' }}>"Hello everyone..."</Box>
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'secondary.main' }}>Select Best</Box>] [<Box component="span" sx={{ color: 'secondary.main' }}>Restore Previous</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Draft Versions:
            </Typography>
            
            <Tabs 
              value={selectedDraft} 
              onChange={(_, newValue) => setSelectedDraft(newValue)}
              variant="fullWidth"
              sx={{ mb: 2 }}
            >
              <Tab label="Draft 1" />
              <Tab label="Draft 2" />
              <Tab label="Draft 3" />
            </Tabs>

            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'primary.light',
              bgcolor: 'white'
            }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {drafts[selectedDraft].content}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip 
                  label={`Draft ${selectedDraft + 1}`}
                  color="primary" 
                  size="small" 
                />
                <Typography variant="caption" color="text.secondary">
                  Current selection
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                color="success" 
                size="small"
                startIcon={<Compare />}
              >
                Select Best
              </Button>
              <Button 
                variant="outlined" 
                color="secondary" 
                size="small"
              >
                Restore Previous
              </Button>
            </Box>

            <Paper sx={{ 
              p: 2, 
              mt: 2,
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                This pattern lets users see multiple draft variations side by side and revisit earlier versions, encouraging exploration while reducing fear of losing progress, giving users confidence to experiment.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}