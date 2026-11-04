import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  IconButton,
  Chip
} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

export function GenAIFeedbackWidget() {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Chip label="kotlin" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1">
            was this output useful?
          </Typography>
          
          <IconButton
            onClick={() => setFeedback('positive')}
            color={feedback === 'positive' ? 'primary' : 'default'}
            size="small"
          >
            <ThumbUp />
          </IconButton>
          
          <IconButton
            onClick={() => setFeedback('negative')}
            color={feedback === 'negative' ? 'error' : 'default'}
            size="small"
          >
            <ThumbDown />
          </IconButton>
        </Box>
        
        {feedback && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Thank you for your feedback!
          </Typography>
        )}
      </Paper>
    </Box>
  );
}