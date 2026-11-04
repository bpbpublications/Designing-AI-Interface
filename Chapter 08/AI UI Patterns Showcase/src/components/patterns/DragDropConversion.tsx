import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  Chip
} from '@mui/material';
import { CloudUpload, Image, Code, Description } from '@mui/icons-material';
import { useState } from 'react';

export function DragDropConversion() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setHasFile(true);
    }, 2000);
  };

  const resetDemo = () => {
    setHasFile(false);
    setIsProcessing(false);
  };

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
            <CloudUpload sx={{ mr: 1, color: 'success.main' }} />
            <Typography variant="h6" color="success.dark">
              Drag-and-Drop Conversion
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
            
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ color: 'warning.main' }}>[Drop Image Here]</Box> →{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>AI generates</Box>{' '}
              <Box component="span" sx={{ color: 'error.main' }}>Caption</Box> +{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>HTML</Box>{' '}
              <Box component="span" sx={{ color: 'info.main' }}>embed</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>code</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            {!hasFile ? (
              <Paper
                sx={{
                  p: 4,
                  border: '2px dashed',
                  borderColor: isDragOver ? 'success.main' : 'grey.400',
                  bgcolor: isDragOver ? 'success.50' : 'grey.100',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  mb: 2
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {isProcessing ? (
                  <Box>
                    <CloudUpload sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
                    <Typography variant="body1" color="success.main">
                      Processing image...
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Image sx={{ fontSize: 48, color: 'grey.600', mb: 1 }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Drop Image Here
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI will generate caption + HTML embed code
                    </Typography>
                  </Box>
                )}
              </Paper>
            ) : (
              <Box>
                <Paper sx={{ 
                  p: 2, 
                  mb: 2, 
                  border: '1px solid',
                  borderColor: 'info.light',
                  bgcolor: 'info.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Image sx={{ color: 'info.main' }} />
                    <Typography variant="body2" color="info.dark">
                      Uploaded: landscape-photo.jpg
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={{ 
                  p: 2, 
                  mb: 2, 
                  border: '2px solid',
                  borderColor: 'primary.light',
                  bgcolor: 'primary.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Description sx={{ color: 'primary.main' }} />
                    <Chip label="AI Generated Caption" size="small" color="primary" />
                  </Box>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    "A breathtaking mountain landscape at sunset with golden light reflecting off pristine lake waters."
                  </Typography>
                </Paper>

                <Paper sx={{ 
                  p: 2, 
                  mb: 2, 
                  border: '2px solid',
                  borderColor: 'secondary.light',
                  bgcolor: 'secondary.50'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Code sx={{ color: 'secondary.main' }} />
                    <Chip label="HTML Embed Code" size="small" color="secondary" />
                  </Box>
                  <Box sx={{ 
                    p: 1, 
                    bgcolor: 'grey.900', 
                    borderRadius: 1,
                    color: 'white',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>
                    {`<figure>
  <img src="landscape-photo.jpg" alt="Mountain landscape at sunset" />
  <figcaption>A breathtaking mountain landscape at sunset</figcaption>
</figure>`}
                  </Box>
                </Paper>

                <Button
                  variant="text"
                  size="small"
                  onClick={resetDemo}
                  sx={{ textTransform: 'none' }}
                >
                  Try Another Image
                </Button>
              </Box>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Drop images to automatically generate captions and HTML embed code.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}