import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import { Link } from '@mui/icons-material';

export function AgenticCrossAppAgent() {
  const connectedApps = ['Slack', 'Email', 'CRM'];

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="less" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: 'error.main' }}>Agent connected to:</Box>
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {connectedApps.map((app) => (
              <Button
                key={app}
                variant="outlined"
                size="small"
                startIcon={<Link />}
                sx={{ 
                  color: 'orange',
                  borderColor: 'orange',
                  '&:hover': { borderColor: 'orange' }
                }}
              >
                [{app}]
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}