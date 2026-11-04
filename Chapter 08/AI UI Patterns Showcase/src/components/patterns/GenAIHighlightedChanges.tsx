import { 
  Paper, 
  Typography, 
  Box, 
  Chip
} from '@mui/material';

export function GenAIHighlightedChanges() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="sql" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            AI Edit: 
            <Box 
              component="span" 
              sx={{ 
                mx: 1,
                textDecoration: 'line-through',
                backgroundColor: 'error.light',
                px: 0.5,
                borderRadius: 1
              }}
            >
              ~~old phrase~~
            </Box>
            →
            <Box 
              component="span" 
              sx={{ 
                mx: 1,
                backgroundColor: 'success.light',
                px: 0.5,
                borderRadius: 1
              }}
            >
              new phrase
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}