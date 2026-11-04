import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Chip,
  LinearProgress,
  Button
} from '@mui/material';
import { EmojiEvents, TrendingUp, Create } from '@mui/icons-material';

export function GamificationEngagementNudges() {
  const achievement = "You've refined 5 drafts today!";
  const challenge = "Try a new writing challenge?";
  const progress = 75; // 5 out of ? drafts

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'success.light',
        bgcolor: 'success.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmojiEvents sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Gamification & Engagement Nudges
            </Typography>
          </Box>
          
          <Box sx={{ 
            bgcolor: 'grey.100', 
            p: 2, 
            borderRadius: 1, 
            mb: 2,
            fontFamily: 'monospace'
          }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              vbnet
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              🎉 <Box component="span" sx={{ color: 'success.main' }}>"You've refined 5 drafts today!"</Box>
            </Typography>
            <Typography variant="body1">
              [Try a <Box component="span" sx={{ color: 'warning.main' }}>new</Box> writing challenge?]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Motivational Progress & Achievements:
            </Typography>
            
            {/* Achievement Celebration */}
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '2px solid',
              borderColor: 'success.main',
              bgcolor: 'success.100'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h4">🎉</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'success.dark' }}>
                  {achievement}
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Daily Progress:
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={progress} 
                  color="success"
                  sx={{ 
                    height: 8, 
                    borderRadius: 2,
                    mb: 1
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  5 drafts refined today • Keep going!
                </Typography>
              </Box>
              
              <Chip
                label="Writing Streak: 3 days"
                color="success"
                size="small"
                icon={<TrendingUp />}
              />
            </Paper>

            {/* Challenge Prompt */}
            <Paper sx={{ 
              p: 2, 
              mb: 2,
              border: '2px solid',
              borderColor: 'warning.light',
              bgcolor: 'warning.50'
            }}>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
                {challenge}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="small" 
                  color="warning"
                  startIcon={<Create />}
                >
                  Creative Writing
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="warning"
                >
                  Technical Style
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="warning"
                >
                  Poetry Mode
                </Button>
              </Box>
            </Paper>

            {/* Achievement Badges */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Recent Achievements:
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="🏆 Draft Master"
                  size="small"
                  color="success"
                  variant="filled"
                />
                <Chip
                  label="⚡ Speed Writer"
                  size="small"
                  color="warning"
                  variant="filled"
                />
                <Chip
                  label="🎯 Precision Editor"
                  size="small"
                  color="info"
                  variant="filled"
                />
              </Box>
            </Box>

            <Paper sx={{ 
              p: 2, 
              bgcolor: 'info.50',
              border: '1px solid',
              borderColor: 'info.200'
            }}>
              <Typography variant="body2" color="info.dark">
                <strong>Motivation Design:</strong> Gamification patterns celebrate progress and nudge 
                exploration, turning repetitive refinement into an engaging activity. These light 
                motivational touches encourage continued interaction.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}