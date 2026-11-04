import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  LinearProgress,
  Chip
} from '@mui/material';
import { Assessment, CheckCircle, Warning } from '@mui/icons-material';

export function PreviewWithConfidenceIndicators() {
  const confidenceLevel = 75;
  const aiOutput = "The capital of Brazil is Brasília.";

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'success';
    if (confidence >= 60) return 'warning';
    return 'error';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 80) return 'High Confidence';
    if (confidence >= 60) return 'Medium Confidence';
    return 'Low Confidence';
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
            <Assessment sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Preview with Confidence Indicators
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
              makefile
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              AI Output: <Box component="span" sx={{ color: 'success.main' }}>"The capital of Brazil is Brasília."</Box>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" color="error.main">
                Confidence:
              </Typography>
              <Box sx={{ 
                display: 'inline-block',
                width: '60px',
                height: '8px',
                bgcolor: 'error.main',
                position: 'relative'
              }}>
                <Box sx={{
                  position: 'absolute',
                  right: '25%',
                  width: '8px',
                  height: '8px',
                  bgcolor: 'grey.300',
                  transform: 'translateX(50%)'
                }} />
              </Box>
              <Typography variant="body1" color="error.main">
                75%
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Generated Content:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: getConfidenceColor(confidenceLevel) === 'success' ? 'success.main' : 
                          getConfidenceColor(confidenceLevel) === 'warning' ? 'warning.main' : 'error.main',
              bgcolor: getConfidenceColor(confidenceLevel) === 'success' ? 'success.50' : 
                       getConfidenceColor(confidenceLevel) === 'warning' ? 'warning.50' : 'error.50'
            }}>
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "{aiOutput}"
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Confidence Score:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {confidenceLevel}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={confidenceLevel} 
                  color={getConfidenceColor(confidenceLevel) as any}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {getConfidenceColor(confidenceLevel) === 'success' && (
                  <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
                )}
                {getConfidenceColor(confidenceLevel) === 'warning' && (
                  <Warning sx={{ color: 'warning.main', fontSize: 20 }} />
                )}
                {getConfidenceColor(confidenceLevel) === 'error' && (
                  <Warning sx={{ color: 'error.main', fontSize: 20 }} />
                )}
                <Chip
                  label={getConfidenceLabel(confidenceLevel)}
                  size="small"
                  color={getConfidenceColor(confidenceLevel) as any}
                />
              </Box>
            </Paper>

            <Typography variant="body2" color="text.secondary">
              The AI provides transparency about its confidence level, helping users make informed decisions about the generated content.
            </Typography>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Shows AI confidence levels to help users evaluate the reliability of generated content.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}