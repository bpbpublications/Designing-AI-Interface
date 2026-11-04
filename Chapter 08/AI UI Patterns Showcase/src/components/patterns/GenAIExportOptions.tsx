import { useState } from "react";
import { 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import { Download } from '@mui/icons-material';

export function GenAIExportOptions() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  
  const exportFormats = ['PDF', 'PPT', 'DOCX'];

  const handleExport = (format: string) => {
    setSelectedFormat(format);
    setTimeout(() => setSelectedFormat(null), 2000);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Chip label="less" size="small" variant="outlined" />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: 'error.main' }}>Export as:</Box>
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {exportFormats.map((format) => (
              <Button
                key={format}
                variant={selectedFormat === format ? "contained" : "outlined"}
                size="small"
                startIcon={<Download />}
                onClick={() => handleExport(format)}
                sx={{ 
                  color: 'orange',
                  borderColor: 'orange',
                  '&:hover': { borderColor: 'orange' }
                }}
              >
                [{format}]
              </Button>
            ))}
          </Box>
          
          {selectedFormat && (
            <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
              Exporting as {selectedFormat}...
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}