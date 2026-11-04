import { useState } from 'react';
import { ExtractedField } from '../types/invoice';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AlertTriangle, CheckCircle, Edit3, Filter } from 'lucide-react';

interface ExtractedFieldsProps {
  fields: ExtractedField[];
}

export function ExtractedFields({ fields }: ExtractedFieldsProps) {
  const [filter, setFilter] = useState<'all' | 'review' | 'approved'>('all');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const filteredFields = fields.filter(field => {
    if (filter === 'review') return field.needsReview;
    if (filter === 'approved') return !field.needsReview;
    return true;
  });

  const reviewCount = fields.filter(f => f.needsReview).length;
  const approvedCount = fields.filter(f => !f.needsReview).length;

  const handleEdit = (field: ExtractedField) => {
    setEditingField(field.id);
    setEditValue(field.extractedValue);
  };

  const handleSave = () => {
    // Here you would typically update the field value
    setEditingField(null);
    setEditValue('');
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValue('');
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600';
    if (confidence >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Extracted Fields</CardTitle>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="review">Needs Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs value={filter} onValueChange={(value: any) => setFilter(value)} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all" className="text-xs">
              All ({fields.length})
            </TabsTrigger>
            <TabsTrigger value="review" className="text-xs">
              Review ({reviewCount})
            </TabsTrigger>
            <TabsTrigger value="approved" className="text-xs">
              Approved ({approvedCount})
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-auto space-y-3">
        {filteredFields.map((field) => (
          <div
            key={field.id}
            className={`p-3 border rounded-lg ${
              field.needsReview ? 'border-yellow-200 bg-yellow-50' : 'border-green-200 bg-green-50'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {field.needsReview ? (
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                )}
                <span className="font-medium text-sm">{field.fieldName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {field.fieldType}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEdit(field)}
                  className="h-6 w-6 p-0"
                >
                  <Edit3 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              {editingField === field.id ? (
                <div className="space-y-2">
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="text-sm"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSave} className="text-xs">
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancel} className="text-xs">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm font-mono bg-white p-2 rounded border">
                  {field.extractedValue}
                </p>
              )}
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Confidence:</span>
                <span className={`font-medium ${getConfidenceColor(field.confidence)}`}>
                  {(field.confidence * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            
            {field.needsReview && (
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs">
                  Approve
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Flag for Review
                </Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}