import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { Psychology, Domain } from '@mui/icons-material';
import { useState } from 'react';

export function AdaptiveToneDomainAware() {
  const [selectedDomain, setSelectedDomain] = useState('Healthcare');
  
  const domains = ['Healthcare', 'Legal', 'Marketing', 'Technical'];
  const aiResponse = "The patient's condition requires immediate follow-up.";

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
            <Domain sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Adaptive Tone / Domain-Aware Generation
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
              Domain: [<Box component="span" sx={{ color: 'error.main' }}>Healthcare</Box>]
            </Typography>
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'success.main' }}>AI</Box> Response: <Box component="span" sx={{ color: 'success.main' }}>"The patient's condition requires immediate follow-up."</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Domain-Aware AI Generation:
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Domain Context</InputLabel>
                <Select
                  value={selectedDomain}
                  label="Domain Context"
                  onChange={(e) => setSelectedDomain(e.target.value)}
                >
                  {domains.map((domain) => (
                    <MenuItem key={domain} value={domain}>
                      {domain}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'error.light',
              bgcolor: 'white'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Psychology sx={{ color: 'error.main' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Domain: 
                </Typography>
                <Chip 
                  label={selectedDomain}
                  color="error"
                  size="small"
                />
              </Box>
              
              <Typography variant="body1" sx={{ 
                p: 2,
                bgcolor: 'success.50',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'success.200'
              }}>
                <strong>AI Response:</strong> "{aiResponse}"
              </Typography>
            </Paper>

            {/* Domain-Specific Examples */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Domain-Adapted Responses:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: selectedDomain === 'Healthcare' ? 'error.100' : 'grey.100',
                  border: '1px solid',
                  borderColor: selectedDomain === 'Healthcare' ? 'error.main' : 'grey.300'
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Healthcare:</Typography>
                  <Typography variant="body2">
                    "The patient's condition requires immediate follow-up."
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: selectedDomain === 'Legal' ? 'error.100' : 'grey.100',
                  border: '1px solid',
                  borderColor: selectedDomain === 'Legal' ? 'error.main' : 'grey.300'
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Legal:</Typography>
                  <Typography variant="body2">
                    "The contract provisions require immediate review and amendment."
                  </Typography>
                </Paper>
                
                <Paper sx={{ 
                  p: 1.5, 
                  bgcolor: selectedDomain === 'Marketing' ? 'error.100' : 'grey.100',
                  border: '1px solid',
                  borderColor: selectedDomain === 'Marketing' ? 'error.main' : 'grey.300'
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Marketing:</Typography>
                  <Typography variant="body2">
                    "This campaign opportunity requires immediate action!"
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Context Intelligence:</strong> The AI adapts its language, tone, and terminology 
                based on the detected or specified domain context, ensuring appropriate professional 
                communication standards for each field.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}