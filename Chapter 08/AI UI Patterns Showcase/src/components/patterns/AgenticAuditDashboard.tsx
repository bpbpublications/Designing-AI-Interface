import { 
  Paper, 
  Typography, 
  Box, 
  Chip
} from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';

export function AgenticAuditDashboard() {
  const auditItems = [
    { label: 'Compliance', status: 'passed', icon: <CheckCircle sx={{ color: 'green', fontSize: 16 }} /> },
    { label: 'Bias Check', status: 'passed', icon: <CheckCircle sx={{ color: 'green', fontSize: 16 }} /> },
    { label: 'Safety', status: 'review', icon: <Warning sx={{ color: 'orange', fontSize: 16 }} /> }
  ];

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="yaml" size="small" variant="outlined" />
        </Box>
        
        <Box>
          {auditItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: item.status === 'passed' ? 'green' : 'orange',
                  minWidth: 100 
                }}
              >
                {item.label}:
              </Typography>
              {item.icon}
              {item.status === 'review' && (
                <Typography variant="body2" sx={{ color: 'green', ml: 1 }}>
                  Needs Review
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}