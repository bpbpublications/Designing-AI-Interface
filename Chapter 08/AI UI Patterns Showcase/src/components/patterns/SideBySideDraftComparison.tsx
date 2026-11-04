import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Divider,
  Chip,
  Button
} from '@mui/material';
import { Compare, AutoAwesome, ThumbUp, Edit } from '@mui/icons-material';
import { useState } from 'react';

export function SideBySideDraftComparison() {
  const [selectedVersion, setSelectedVersion] = useState<'original' | 'ai' | null>(null);

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
              Side-by-Side Draft Comparison
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
              lua
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="primary.main">
                Original
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="secondary.main">
                AI Rewrite
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="success.main">
                "This is good."
              </Typography>
              <Typography variant="body1">
                |
              </Typography>
              <Typography variant="body1" color="success.main">
                "This product is effective."
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {/* Original Version */}
            <Paper 
              sx={{ 
                flex: 1, 
                p: 2,
                border: selectedVersion === 'original' ? '2px solid' : '1px solid',
                borderColor: selectedVersion === 'original' ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setSelectedVersion('original')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip 
                  label="Original" 
                  size="small" 
                  color="primary"
                  icon={<Edit />}
                  sx={{ mr: 1 }}
                />
              </Box>
              <Typography variant="body1" sx={{ mb: 2, minHeight: '48px' }}>
                "This is good."
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Length: 13 characters
              </Typography>
              <Button 
                size="small" 
                variant={selectedVersion === 'original' ? 'contained' : 'outlined'}
                startIcon={<ThumbUp />}
              >
                Keep Original
              </Button>
            </Paper>

            {/* AI Rewrite Version */}
            <Paper 
              sx={{ 
                flex: 1, 
                p: 2,
                border: selectedVersion === 'ai' ? '2px solid' : '1px solid',
                borderColor: selectedVersion === 'ai' ? 'secondary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setSelectedVersion('ai')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip 
                  label="AI Rewrite" 
                  size="small" 
                  color="secondary"
                  icon={<AutoAwesome />}
                  sx={{ mr: 1 }}
                />
              </Box>
              <Typography variant="body1" sx={{ mb: 2, minHeight: '48px' }}>
                "This product is effective."
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Length: 26 characters
              </Typography>
              <Button 
                size="small" 
                variant={selectedVersion === 'ai' ? 'contained' : 'outlined'}
                color="secondary"
                startIcon={<ThumbUp />}
              >
                Use AI Version
              </Button>
            </Paper>
          </Box>

          {selectedVersion && (
            <Paper sx={{ 
              p: 2, 
              bgcolor: selectedVersion === 'original' ? 'primary.50' : 'secondary.50',
              border: '1px solid',
              borderColor: selectedVersion === 'original' ? 'primary.200' : 'secondary.200'
            }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Selected: {selectedVersion === 'original' ? 'Original' : 'AI Rewrite'}</strong>
              </Typography>
              <Typography variant="body2">
                {selectedVersion === 'original' 
                  ? '"This is good."' 
                  : '"This product is effective."'
                }
              </Typography>
            </Paper>
          )}

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Builds trust by showing changes transparently with side-by-side comparison.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}