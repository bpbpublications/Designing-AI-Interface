import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  LinearProgress
} from '@mui/material';
import { Security, CheckCircle, Shield } from '@mui/icons-material';

export function TrustBadgesComplianceDashboards() {
  const trustScore = 92;
  const biasCheck = "Passed";
  const policyCompliance = "On Track";

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
            <Security sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Trust Badges & Compliance Dashboards
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
              yaml
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Trust Score: <Box component="span" sx={{ color: 'success.main' }}>92%</Box> ✓
            </Typography>
            <Typography variant="body1" gutterBottom>
              Bias Check: <Box component="span" sx={{ color: 'success.main' }}>Passed</Box>
            </Typography>
            <Typography variant="body1">
              Policy Compliance: <Box component="span" sx={{ color: 'success.main' }}>On Track</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Trust & Compliance Overview:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'success.light',
              bgcolor: 'white'
            }}>
              {/* Trust Score */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Trust Score:
                  </Typography>
                  <Chip 
                    label={`${trustScore}%`}
                    color="success"
                    size="small"
                  />
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={trustScore} 
                  sx={{ 
                    height: 8,
                    borderRadius: 2,
                    bgcolor: 'grey.200'
                  }}
                />
              </Box>

              {/* Bias Check */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Shield sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Bias Check:
                  </Typography>
                  <Chip 
                    label={biasCheck}
                    color="success"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  All bias detection tests completed successfully
                </Typography>
              </Box>

              {/* Policy Compliance */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Security sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Policy Compliance:
                  </Typography>
                  <Chip 
                    label={policyCompliance}
                    color="success"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Meeting all organizational and regulatory requirements
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Compliance Metrics:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="✅ GDPR Compliant"
                  size="small"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  label="✅ SOC 2 Certified"
                  size="small"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  label="✅ AI Ethics Review"
                  size="small"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  label="✅ Security Audit"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Trust & Safety:</strong> Trust badges and dashboards give quick reassurance about safety, 
                compliance, and ethical operation of AI agent actions, building user confidence through transparency.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}