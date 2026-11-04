import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip,
  IconButton
} from '@mui/material';
import { Dashboard, TextFields, Image, Code, Add, Link as LinkIcon, Clear } from '@mui/icons-material';
import { useState } from 'react';

export function MixedMediaCanvas() {
  const [canvasItems, setCanvasItems] = useState([
    { id: 1, type: 'text', content: 'Product Launch Plan', position: { x: 20, y: 20 } },
    { id: 2, type: 'image', content: '📊 Analytics Chart', position: { x: 180, y: 60 } },
    { id: 3, type: 'code', content: 'data.json', position: { x: 50, y: 120 } }
  ]);
  const [isLinked, setIsLinked] = useState(false);

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'text': return <TextFields sx={{ fontSize: 16 }} />;
      case 'image': return <Image sx={{ fontSize: 16 }} />;
      case 'code': return <Code sx={{ fontSize: 16 }} />;
      default: return null;
    }
  };

  const getItemColor = (type: string) => {
    switch (type) {
      case 'text': return 'primary';
      case 'image': return 'warning';
      case 'code': return 'error';
      default: return 'default';
    }
  };

  const handleLinkItems = () => {
    setIsLinked(true);
    setTimeout(() => {
      setIsLinked(false);
    }, 3000);
  };

  const addRandomItem = () => {
    const types = ['text', 'image', 'code'];
    const contents = {
      text: ['Meeting Notes', 'Project Goals', 'User Stories'],
      image: ['📈 Graph', '🎨 Mockup', '📷 Photo'],
      code: ['script.js', 'styles.css', 'data.xml']
    };
    
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomContent = contents[randomType as keyof typeof contents][Math.floor(Math.random() * 3)];
    
    const newItem = {
      id: Date.now(),
      type: randomType,
      content: randomContent,
      position: { 
        x: Math.random() * 200 + 20, 
        y: Math.random() * 100 + 20 
      }
    };
    
    setCanvasItems([...canvasItems, newItem]);
  };

  const removeItem = (id: number) => {
    setCanvasItems(canvasItems.filter(item => item.id !== id));
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'primary.light',
        bgcolor: 'primary.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Dashboard sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" color="primary.dark">
              Mixed Media Canvas
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
              sql
            </Typography>
            
            <Typography variant="body1" gutterBottom>
              Canvas: <Box component="span" sx={{ color: 'secondary.main' }}>Drop</Box>{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>text</Box>,{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>image</Box>, or{' '}
              <Box component="span" sx={{ color: 'error.main' }}>code</Box>
            </Typography>
            <Typography variant="body1">
              AI <Box component="span" sx={{ color: 'info.main' }}>links them</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>into one</Box> unified project
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Interactive Canvas:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={addRandomItem}
                  color="primary"
                >
                  Add Item
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<LinkIcon />}
                  onClick={handleLinkItems}
                  color="success"
                  disabled={isLinked || canvasItems.length < 2}
                >
                  Link All
                </Button>
              </Box>
            </Box>
            
            <Paper sx={{ 
              p: 2, 
              bgcolor: 'white',
              border: '2px solid',
              borderColor: isLinked ? 'success.main' : 'grey.300',
              minHeight: '200px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease'
            }}>
              {canvasItems.map((item) => (
                <Paper
                  key={item.id}
                  sx={{
                    position: 'absolute',
                    left: item.position.x,
                    top: item.position.y,
                    p: 1,
                    border: '1px solid',
                    borderColor: `${getItemColor(item.type)}.light`,
                    bgcolor: `${getItemColor(item.type)}.50`,
                    minWidth: '100px',
                    cursor: 'move',
                    transition: 'all 0.3s ease',
                    transform: isLinked ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isLinked ? 2 : 1
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {getItemIcon(item.type)}
                      <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                        {item.content}
                      </Typography>
                    </Box>
                    <IconButton
                      size="small"
                      onClick={() => removeItem(item.id)}
                      sx={{ 
                        width: 16, 
                        height: 16,
                        '& .MuiSvgIcon-root': { fontSize: 12 }
                      }}
                    >
                      <Clear />
                    </IconButton>
                  </Box>
                </Paper>
              ))}

              {isLinked && (
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'success.50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.9
                }}>
                  <Paper sx={{ p: 2, bgcolor: 'success.100', border: '1px solid', borderColor: 'success.main' }}>
                    <Typography variant="body2" color="success.dark" sx={{ textAlign: 'center' }}>
                      <strong>✓ AI Linking Items...</strong><br />
                      Creating unified project structure
                    </Typography>
                  </Paper>
                </Box>
              )}
              
              {canvasItems.length === 0 && (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'text.secondary'
                }}>
                  <Typography variant="body2">
                    Canvas is empty - click "Add Item" to get started
                  </Typography>
                </Box>
              )}
            </Paper>

            <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip
                label={`${canvasItems.length} Items`}
                size="small"
                color="primary"
                variant="outlined"
              />
              {canvasItems.length > 0 && (
                <Chip
                  label={`${new Set(canvasItems.map(item => item.type)).size} Types`}
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              )}
            </Box>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Drop different media types onto a canvas where AI intelligently connects them into a unified project.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}