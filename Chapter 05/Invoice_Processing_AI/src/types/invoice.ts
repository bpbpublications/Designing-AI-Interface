export interface ExtractedField {
  id: string;
  fieldName: string;
  extractedValue: string;
  confidence: number;
  needsReview: boolean;
  fieldType: 'amount' | 'date' | 'text' | 'number';
  position?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface Invoice {
  id: string;
  filename: string;
  uploadDate: string;
  status: 'processing' | 'reviewed' | 'approved' | 'rejected';
  imageUrl: string;
  extractedFields: ExtractedField[];
}

export interface ChatMessage {
  id: string;
  type: 'agent' | 'user' | 'system' | 'alert';
  sender: string;
  content: string;
  timestamp: string;
  actions?: ChatAction[];
}

export interface ChatAction {
  id: string;
  label: string;
  type: 'approve' | 'reject' | 'review' | 'edit';
  variant?: 'default' | 'destructive' | 'secondary';
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'processing';
  avatar?: string;
}