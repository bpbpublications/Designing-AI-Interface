import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip,
  Button,
  ButtonGroup
} from '@mui/material';
import { 
  Circle, 
  PlayArrow, 
  Pause, 
  Error, 
  CheckCircle,
  RadioButtonUnchecked 
} from '@mui/icons-material';

export function AgenticAgentStateIndicator() {
  const states = [
    { id: 'idle', label: 'Idle', color: 'default', icon: <Pause /> },
    { id: 'active', label: 'Active', color: 'primary', icon: <PlayArrow /> },
    { id: 'error', label: 'Error', color: 'error', icon: <Error /> }
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'secondary.light',
        bgcolor: 'secondary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Circle sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="h6" color="secondary.dark">
              Agentic - Agent State Indicator
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
              less
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="error.main">
                Agent Status:
              </Typography>
              <Typography variant="body1">
                [Idle] [Active] [Error]
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Current Status
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Chip
                icon={<RadioButtonUnchecked />}
                label="Idle"
                color="default"
                variant="outlined"
              />
              <Chip
                icon={<CheckCircle />}
                label="Active"
                color="primary"
                variant="filled"
              />
              <Chip
                icon={<RadioButtonUnchecked />}
                label="Error"
                color="error"
                variant="outlined"
              />
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Interactive Controls
            </Typography>
            <ButtonGroup variant="outlined" size="small">
              <Button startIcon={<Pause />}>
                Set Idle
              </Button>
              <Button startIcon={<PlayArrow />} color="primary">
                Activate
              </Button>
              <Button startIcon={<Error />} color="error">
                Trigger Error
              </Button>
            </ButtonGroup>
          </Box>

          <Box sx={{ 
            p: 2, 
            bgcolor: 'primary.50', 
            borderRadius: 1, 
            border: '1px solid',
            borderColor: 'primary.200',
            mb: 2
          }}>
            <Typography variant="body2" color="primary.dark">
              <strong>Agent "DataProcessor-01" is currently ACTIVE</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Processing batch 127/200 • Estimated completion: 2 minutes
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Real-time visibility into agent operational status with clear visual indicators.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}