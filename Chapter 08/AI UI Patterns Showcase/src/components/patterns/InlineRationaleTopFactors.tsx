import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip
} from '@mui/material';
import { Psychology, TrendingUp } from '@mui/icons-material';

export function InlineRationaleTopFactors() {
  const suggestion = "Choose Supplier A";
  const factors = [
    { factor: "Price Match", percentage: "85%" },
    { factor: "Delivery Speed", percentage: "70%" }
  ];

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
            <Psychology sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Inline Rationale & Top Factors Display
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
              java
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              AI Suggestion: <Box component="span" sx={{ color: 'success.main' }}>"Choose Supplier A"</Box>
            </Typography>
            <Typography variant="body1">
              Reason: Price <Box component="span" sx={{ color: 'info.main' }}>Match</Box> (<Box component="span" sx={{ color: 'warning.main' }}>85%</Box>), Delivery <Box component="span" sx={{ color: 'info.main' }}>Speed</Box> (<Box component="span" sx={{ color: 'warning.main' }}>70%</Box>)
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              AI Recommendation with Reasoning:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'success.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <TrendingUp sx={{ color: 'success.main' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  AI Suggestion: "{suggestion}"
                </Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                <strong>Reason:</strong>
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {factors.map((item, index) => (
                  <Paper 
                    key={index}
                    sx={{ 
                      p: 1.5, 
                      bgcolor: 'info.50',
                      border: '1px solid',
                      borderColor: 'info.200',
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {item.factor}
                    </Typography>
                    <Chip 
                      label={item.percentage}
                      color="warning"
                      size="small"
                      sx={{ mt: 0.5 }}
                    />
                  </Paper>
                ))}
              </Box>
            </Paper>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Transparency Benefits:</strong> Inline rationale explains <em>why</em> the AI made a suggestion, 
                surfacing top factors in plain language. This increases transparency, helping users align their 
                mental model with the system's reasoning.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}