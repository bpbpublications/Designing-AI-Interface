import { Button, Paper, Box, Typography } from '@mui/material';

export function ConfirmationCheckpoint() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>AI</Box> wants to: 
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}> "Transfer $500 to Supplier X"</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" size="small">
            Approve
          </Button>
          <Button variant="outlined" size="small">
            Edit
          </Button>
          <Button variant="outlined" size="small">
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}