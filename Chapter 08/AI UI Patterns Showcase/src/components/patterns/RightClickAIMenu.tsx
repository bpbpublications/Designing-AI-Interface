import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider
} from '@mui/material';
import { 
  MouseRounded, 
  AutoFixHigh, 
  Lightbulb, 
  ContentCut, 
  ContentCopy, 
  ContentPaste 
} from '@mui/icons-material';
import { useState, MouseEvent } from 'react';

export function RightClickAIMenu() {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

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
            <MouseRounded sx={{ mr: 1, color: 'info.main' }} />
            <Typography variant="h6" color="info.dark">
              Right-Click AI Menu
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
              css
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" color="success.main">
                Right-click
              </Typography>
              <Typography variant="body1">
                →
              </Typography>
              <Typography variant="body1" color="warning.main">
                [AI → Improve Clarity]
              </Typography>
              <Typography variant="body1" color="warning.main">
                [AI → Add Examples]
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50', position: 'relative' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Interactive Demo - Right-click on the text below:
            </Typography>
            
            <Box
              onContextMenu={handleContextMenu}
              sx={{
                p: 2,
                border: '2px dashed',
                borderColor: 'info.main',
                borderRadius: 1,
                cursor: 'context-menu',
                bgcolor: 'white',
                userSelect: 'none'
              }}
            >
              <Typography variant="body1">
                This is some sample text that you can right-click to see the AI-enhanced context menu.
              </Typography>
            </Box>

            <Menu
              open={contextMenu !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                contextMenu !== null
                  ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                  : undefined
              }
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose} sx={{ color: 'primary.main' }}>
                <ListItemIcon>
                  <AutoFixHigh fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>AI → Improve Clarity</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ color: 'primary.main' }}>
                <ListItemIcon>
                  <Lightbulb fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>AI → Add Examples</ListItemText>
              </MenuItem>
            </Menu>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            Seamlessly extends native editor controls with AI-powered options in the context menu.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}