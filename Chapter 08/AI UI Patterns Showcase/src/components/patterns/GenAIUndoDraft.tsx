import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import { Undo } from '@mui/icons-material';

export function GenAIUndoDraft() {
  const [isUndone, setIsUndone] = useState(false);

  const handleUndo = () => {
    setIsUndone(true);
    setTimeout(() => setIsUndone(false), 2000);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="csharp" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Undo />}
            onClick={handleUndo}
            disabled={isUndone}
            sx={{ 
              color: 'primary.main',
              borderColor: 'primary.main',
              mb: 2
            }}
          >
            [Undo AI Rewrite]
          </Button>
          
          {isUndone && (
            <Typography variant="body2" color="success.main">
              ✓ AI changes reverted to original text
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}