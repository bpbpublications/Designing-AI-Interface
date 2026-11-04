import { 
  Paper, 
  Typography, 
  Box, 
  Chip
} from '@mui/material';
import { History } from '@mui/icons-material';

export function AgenticRollbackLog() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="sql" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <History sx={{ color: 'purple', fontSize: 16 }} />
            <Typography variant="body1" sx={{ color: 'purple' }}>
              Rollback:
            </Typography>
            <Typography variant="body1">
              "Payment step reversed"
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}