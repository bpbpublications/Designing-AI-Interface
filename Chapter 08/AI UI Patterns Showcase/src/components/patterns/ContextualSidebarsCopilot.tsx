import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Assistant, Summarize, Title, Link } from '@mui/icons-material';

export function ContextualSidebarsCopilot() {
  const sidebarOptions = [
    "Summarize Section",
    "Generate Headline", 
    "Suggest References"
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'info.light',
        bgcolor: 'info.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Assistant sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Contextual Sidebars / Copilot Panels
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
              csharp
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'secondary.main' }}>Sidebar</Box>:
            </Typography>
            <Typography variant="body1" gutterBottom>
              [<Box component="span" sx={{ color: 'info.main' }}>Summarize Section</Box>]
            </Typography>
            <Typography variant="body1" gutterBottom>
              [<Box component="span" sx={{ color: 'info.main' }}>Generate Headline</Box>]
            </Typography>
            <Typography variant="body1">
              [<Box component="span" sx={{ color: 'info.main' }}>Suggest References</Box>]
            </Typography>
          </Box>

          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Box sx={{ display: 'flex', gap: 2, height: 300 }}>
              {/* Main Content Area */}
              <Paper sx={{ 
                flex: 2, 
                p: 2, 
                border: '1px solid',
                borderColor: 'grey.300',
                bgcolor: 'white'
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Main Document
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Your main workspace content goes here. As you work, the sidebar 
                  offers contextual AI assistance based on your current task.
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </Typography>
              </Paper>

              {/* AI Copilot Sidebar */}
              <Paper sx={{ 
                flex: 1, 
                p: 2, 
                border: '2px solid',
                borderColor: 'info.light',
                bgcolor: 'info.50'
              }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'info.dark' }}>
                  AI Copilot
                </Typography>
                
                <List dense sx={{ p: 0 }}>
                  <ListItem sx={{ p: 0, mb: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      startIcon={<Summarize />}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      Summarize Section
                    </Button>
                  </ListItem>
                  
                  <ListItem sx={{ p: 0, mb: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      startIcon={<Title />}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      Generate Headline
                    </Button>
                  </ListItem>
                  
                  <ListItem sx={{ p: 0, mb: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      startIcon={<Link />}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      Suggest References
                    </Button>
                  </ListItem>
                </List>

                <Paper sx={{ 
                  p: 1.5, 
                  mt: 2,
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'info.200'
                }}>
                  <Typography variant="caption" color="info.dark">
                    💡 <strong>Context-aware suggestions</strong> based on your current section
                  </Typography>
                </Paper>
              </Paper>
            </Box>

            <Paper sx={{ 
              p: 2, 
              mt: 2,
              bgcolor: 'success.50',
              border: '1px solid',
              borderColor: 'success.200'
            }}>
              <Typography variant="body2" color="success.dark">
                <strong>Flow Integration:</strong> A companion panel sits alongside the main workspace, 
                offering AI assistance tied to the current context and task. This just-in-time support 
                ensures users stay focused without breaking flow.
              </Typography>
            </Paper>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}