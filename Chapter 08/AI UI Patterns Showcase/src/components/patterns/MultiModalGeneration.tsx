import { Paper, Box, Typography, Chip } from '@mui/material';

export function MultiModalGeneration() {
  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Prompt:</Box> "Design a logo of a sun."
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip 
            label="Text" 
            variant="outlined" 
            size="small" 
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          />
          <Chip 
            label="Image" 
            variant="outlined" 
            size="small" 
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          />
          <Chip 
            label="SVG Code" 
            variant="outlined" 
            size="small" 
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          />
        </Box>
      </Box>
    </Paper>
  );
}