import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Paper,
  Button,
  ButtonGroup,
  Chip
} from '@mui/material';
import { GetApp, PictureAsPdf, Web, Code, Download } from '@mui/icons-material';
import { useState } from 'react';

export function ExportOptions() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const exportFormats = [
    {
      id: 'pdf',
      label: 'PDF with text+images',
      icon: <PictureAsPdf />,
      color: 'error',
      description: 'Complete document with text and embedded images'
    },
    {
      id: 'html',
      label: 'Web HTML',
      icon: <Web />,
      color: 'info',
      description: 'HTML file with CSS styling and assets'
    },
    {
      id: 'code',
      label: 'Code Snippet',
      icon: <Code />,
      color: 'success',
      description: 'Raw code with syntax highlighting'
    }
  ];

  const handleExport = (formatId: string) => {
    setSelectedFormat(formatId);
    setIsExporting(true);
    
    setTimeout(() => {
      setIsExporting(false);
      // Simulate download
      const format = exportFormats.find(f => f.id === formatId);
      if (format) {
        alert(`Downloaded: project.${formatId === 'html' ? 'html' : formatId === 'pdf' ? 'pdf' : 'txt'}`);
      }
    }, 2000);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Card sx={{ 
        mb: 3,
        border: '2px solid',
        borderColor: 'warning.light',
        bgcolor: 'warning.50'
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <GetApp sx={{ mr: 1, color: 'warning.main' }} />
            <Typography variant="h6" color="warning.dark">
              Export Options
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
            
            <Typography variant="body1">
              <Box component="span" sx={{ color: 'error.main' }}>Save As:</Box>{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>[PDF with text+images]</Box>{' '}
              <Box component="span" sx={{ color: 'info.main' }}>[Web HTML]</Box>{' '}
              <Box component="span" sx={{ color: 'success.main' }}>[Code Snippet]</Box>
            </Typography>
          </Box>

          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Current Project Content:
            </Typography>
            
            <Paper sx={{ 
              p: 2, 
              mb: 2, 
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white'
            }}>
              <Typography variant="body2" gutterBottom>
                <strong>Project:</strong> Marketing Dashboard
              </Typography>
              <Typography variant="body2" gutterBottom>
                • Text content: 3 sections with descriptions
              </Typography>
              <Typography variant="body2" gutterBottom>
                • Images: 2 charts, 1 hero image  
              </Typography>
              <Typography variant="body2">
                • Code: HTML/CSS structure with responsive design
              </Typography>
            </Paper>

            {isExporting && selectedFormat && (
              <Paper sx={{ 
                p: 2, 
                mb: 2, 
                bgcolor: 'info.50',
                border: '1px solid',
                borderColor: 'info.200',
                textAlign: 'center'
              }}>
                <Download sx={{ 
                  color: 'info.main', 
                  mb: 1,
                  animation: 'bounce 1s infinite'
                }} />
                <Typography variant="body2" color="info.dark">
                  Preparing {exportFormats.find(f => f.id === selectedFormat)?.label} export...
                </Typography>
              </Paper>
            )}

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Export Formats:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {exportFormats.map((format) => (
                <Button
                  key={format.id}
                  variant="outlined"
                  color={format.color as any}
                  startIcon={format.icon}
                  onClick={() => handleExport(format.id)}
                  disabled={isExporting}
                  sx={{ 
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    textTransform: 'none',
                    p: 2
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {format.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {format.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            {selectedFormat && !isExporting && (
              <Paper sx={{ 
                p: 2, 
                mt: 2,
                bgcolor: 'success.50',
                border: '1px solid',
                borderColor: 'success.200'
              }}>
                <Typography variant="body2" color="success.dark">
                  <strong>✓ Export Complete:</strong> {exportFormats.find(f => f.id === selectedFormat)?.label}
                </Typography>
              </Paper>
            )}
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Flexible export options tailored to different use cases and file formats.
          </Typography>
          
          <style>
            {`
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
              }
            `}
          </style>
        </CardContent>
      </Card>
    </Box>
  );
}