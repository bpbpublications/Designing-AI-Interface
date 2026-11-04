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
import { AutoAwesome, Compare, ThumbUp, ThumbDown } from '@mui/icons-material';
import { useState } from 'react';

export function DraftSidebarWithVariations() {
  const [selectedVariation, setSelectedVariation] = useState<'v1' | 'v2' | null>(null);

  const variations = {
    v1: "Our product offers reliable value.",
    v2: "This product ensures lasting quality."
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
            <Compare sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Draft Sidebar with Variations
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
              AI Suggests:
            </Typography>
            <Typography variant="body1" color="primary.main">
              v1: <Box component="span" sx={{ color: 'success.main' }}>"Our product offers reliable value."</Box>
            </Typography>
            <Typography variant="body1" color="primary.main">
              v2: <Box component="span" sx={{ color: 'success.main' }}>"This product ensures lasting quality."</Box>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {/* Variation 1 */}
            <Paper 
              sx={{ 
                flex: 1, 
                p: 2, 
                border: selectedVariation === 'v1' ? '2px solid' : '1px solid',
                borderColor: selectedVariation === 'v1' ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setSelectedVariation('v1')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip 
                  label="v1" 
                  size="small" 
                  color="primary" 
                  sx={{ mr: 1 }}
                />
                <AutoAwesome sx={{ fontSize: 16, color: 'text.secondary' }} />
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                "{variations.v1}"
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  size="small" 
                  startIcon={<ThumbUp />}
                  variant={selectedVariation === 'v1' ? 'contained' : 'outlined'}
                >
                  Use
                </Button>
                <Button size="small" startIcon={<ThumbDown />} variant="outlined">
                  Pass
                </Button>
              </Box>
            </Paper>

            {/* Variation 2 */}
            <Paper 
              sx={{ 
                flex: 1, 
                p: 2, 
                border: selectedVariation === 'v2' ? '2px solid' : '1px solid',
                borderColor: selectedVariation === 'v2' ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setSelectedVariation('v2')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip 
                  label="v2" 
                  size="small" 
                  color="secondary" 
                  sx={{ mr: 1 }}
                />
                <AutoAwesome sx={{ fontSize: 16, color: 'text.secondary' }} />
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                "{variations.v2}"
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  size="small" 
                  startIcon={<ThumbUp />}
                  variant={selectedVariation === 'v2' ? 'contained' : 'outlined'}
                >
                  Use
                </Button>
                <Button size="small" startIcon={<ThumbDown />} variant="outlined">
                  Pass
                </Button>
              </Box>
            </Paper>
          </Box>

          {selectedVariation && (
            <Paper sx={{ p: 2, bgcolor: 'success.50', border: '1px solid', borderColor: 'success.200' }}>
              <Typography variant="body2" color="success.dark" gutterBottom>
                <strong>Selected: {selectedVariation.toUpperCase()}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "{variations[selectedVariation]}"
              </Typography>
            </Paper>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" color="text.secondary">
            Keeps multiple rewrite options visible for user comparison and quick selection.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}