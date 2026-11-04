import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  Divider
} from '@mui/material';
import { Compare, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { useState } from 'react';

export function SideBySideVariations() {
  const [selectedDraft, setSelectedDraft] = useState<'A' | 'B' | 'C' | null>(null);

  const drafts = {
    A: "Your order ships tomorrow.",
    B: "Shipment will arrive soon.",  
    C: "Your package is on its way."
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
            <Compare sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Side-by-Side Variations
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
            
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" color="warning.main">
                Draft A:
              </Typography>
              <Typography variant="body1" color="success.main">
                "Your order ships tomorrow."
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" color="warning.main">
                Draft B:
              </Typography>
              <Typography variant="body1" color="success.main">
                "Shipment will arrive soon."
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" color="warning.main">
                Draft C:
              </Typography>
              <Typography variant="body1" color="success.main">
                "Your package is on its way."
              </Typography>
            </Box>
            <Typography variant="body1" color="warning.main">
              [Select Best]
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
            {Object.entries(drafts).map(([key, text]) => (
              <Paper 
                key={key}
                sx={{ 
                  flex: '1 1 180px',
                  p: 2, 
                  border: selectedDraft === key ? '2px solid' : '1px solid',
                  borderColor: selectedDraft === key ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  bgcolor: selectedDraft === key ? 'primary.50' : 'white'
                }}
                onClick={() => setSelectedDraft(key as 'A' | 'B' | 'C')}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip 
                    label={`Draft ${key}`}
                    size="small" 
                    color={selectedDraft === key ? 'primary' : 'default'}
                    sx={{ mr: 1 }}
                  />
                  {selectedDraft === key ? (
                    <CheckCircle sx={{ color: 'primary.main', fontSize: 16 }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ color: 'grey.400', fontSize: 16 }} />
                  )}
                </Box>
                
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  minHeight: '40px',
                  fontStyle: 'italic'
                }}>
                  "{text}"
                </Typography>
                
                <Button 
                  size="small" 
                  variant={selectedDraft === key ? 'contained' : 'outlined'}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDraft(key as 'A' | 'B' | 'C');
                  }}
                  sx={{ textTransform: 'none' }}
                >
                  Select
                </Button>
              </Paper>
            ))}
          </Box>

          {selectedDraft && (
            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50', 
              border: '1px solid', 
              borderColor: 'success.200',
              mb: 2
            }}>
              <Typography variant="body2" color="success.dark" gutterBottom>
                <strong>Selected: Draft {selectedDraft}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "{drafts[selectedDraft]}"
              </Typography>
            </Paper>
          )}

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            <Button
              variant="outlined"
              size="small"
              disabled={!selectedDraft}
              color="success"
            >
              Use Selected Draft
            </Button>
            <Button
              variant="text"
              size="small"
              onClick={() => setSelectedDraft(null)}
            >
              Clear Selection
            </Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" color="text.secondary">
            Compare multiple variations side-by-side for informed selection.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}