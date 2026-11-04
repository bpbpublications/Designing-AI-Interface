import { Button, Paper, Box, Typography } from '@mui/material';

export function HumanInTheLoopAlert() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>AI:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"This is a high-value payment"</Box>
        </Typography>
        
        <Button 
          variant="outlined" 
          size="small"
          sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
        >
          [Escalate to Manager Approval]
        </Button>
      </Box>
    </Paper>
  );
}