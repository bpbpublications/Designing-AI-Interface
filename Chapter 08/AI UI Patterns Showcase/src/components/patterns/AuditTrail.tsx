import { Paper, Box, Typography } from '@mui/material';
import { CheckCircle, Close } from '@mui/icons-material';

export function AuditTrail() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
          Log:
        </Typography>
        
        <Box sx={{ '& > *': { mb: 1 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}>
            <CheckCircle sx={{ width: 16, height: 16, color: 'success.main' }} />
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>10:02</Typography>
            <Typography variant="body2">- Checked inventory</Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}>
            <CheckCircle sx={{ width: 16, height: 16, color: 'success.main' }} />
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>10:04</Typography>
            <Typography variant="body2">- Placed </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>order</Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}>
            <Close sx={{ width: 16, height: 16, color: 'error.main' }} />
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>10:05</Typography>
            <Typography variant="body2">- Payment failed</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}