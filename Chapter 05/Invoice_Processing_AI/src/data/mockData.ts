import { Invoice, ExtractedField, ChatMessage, Agent } from '../types/invoice';

export const mockExtractedFields: ExtractedField[] = [
  {
    id: '1',
    fieldName: 'Invoice Number',
    extractedValue: 'INV-2024-001',
    confidence: 0.98,
    needsReview: false,
    fieldType: 'text'
  },
  {
    id: '2',
    fieldName: 'Invoice Date',
    extractedValue: '2024-01-15',
    confidence: 0.95,
    needsReview: false,
    fieldType: 'date'
  },
  {
    id: '3',
    fieldName: 'Due Date',
    extractedValue: '2024-02-15',
    confidence: 0.92,
    needsReview: true,
    fieldType: 'date'
  },
  {
    id: '4',
    fieldName: 'Total Amount',
    extractedValue: '$1,250.00',
    confidence: 0.88,
    needsReview: true,
    fieldType: 'amount'
  },
  {
    id: '5',
    fieldName: 'Vendor Name',
    extractedValue: 'TechCorp Solutions',
    confidence: 0.96,
    needsReview: false,
    fieldType: 'text'
  },
  {
    id: '6',
    fieldName: 'Tax Amount',
    extractedValue: '$150.00',
    confidence: 0.82,
    needsReview: true,
    fieldType: 'amount'
  },
  {
    id: '7',
    fieldName: 'Purchase Order',
    extractedValue: 'PO-2024-456',
    confidence: 0.75,
    needsReview: true,
    fieldType: 'text'
  }
];

export const mockInvoice: Invoice = {
  id: 'inv-001',
  filename: 'invoice_techcorp_2024.pdf',
  uploadDate: '2024-01-20T10:30:00Z',
  status: 'processing',
  imageUrl: 'https://images.unsplash.com/photo-1518893560155-b89cac6db0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwZG9jdW1lbnQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg0MjU3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  extractedFields: mockExtractedFields
};

export const mockAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'DataExtractor',
    role: 'OCR Specialist',
    status: 'active'
  },
  {
    id: 'agent-2',
    name: 'ValidatorAI',
    role: 'Data Validator',
    status: 'processing'
  },
  {
    id: 'agent-3',
    name: 'ComplianceBot',
    role: 'Compliance Checker',
    status: 'idle'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'system',
    sender: 'System',
    content: 'New invoice uploaded: invoice_techcorp_2024.pdf',
    timestamp: '2024-01-20T10:30:00Z'
  },
  {
    id: '2',
    type: 'agent',
    sender: 'DataExtractor',
    content: 'OCR processing completed. Extracted 7 fields with average confidence of 91.2%',
    timestamp: '2024-01-20T10:31:15Z'
  },
  {
    id: '3',
    type: 'agent',
    sender: 'ValidatorAI',
    content: 'Validation in progress. Found 4 fields requiring human review due to low confidence scores.',
    timestamp: '2024-01-20T10:32:30Z'
  },
  {
    id: '4',
    type: 'alert',
    sender: 'ComplianceBot',
    content: 'Alert: Due date appears to be only 31 days from invoice date. Please verify payment terms.',
    timestamp: '2024-01-20T10:33:45Z',
    actions: [
      {
        id: 'verify-terms',
        label: 'Verify Terms',
        type: 'review'
      },
      {
        id: 'approve-terms',
        label: 'Approve',
        type: 'approve'
      }
    ]
  },
  {
    id: '5',
    type: 'agent',
    sender: 'DataExtractor',
    content: 'Purchase Order number confidence is low (75%). Cross-referencing with PO database...',
    timestamp: '2024-01-20T10:35:00Z'
  }
];