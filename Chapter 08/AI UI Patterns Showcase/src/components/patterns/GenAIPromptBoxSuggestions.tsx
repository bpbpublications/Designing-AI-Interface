import { Button, Paper, Box, Typography } from '@mui/material';

export function GenAIPromptBoxSuggestions() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, fontFamily: 'monospace' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Prompt:</Box>{' '}
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>"Summarize this report..."</Box>
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>AI:</Box>
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Summary]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Bullet Points]
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            [Executive Brief]
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}