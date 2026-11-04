import { Invoice } from '../types/invoice';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InvoiceViewerProps {
  invoice: Invoice;
}

export function InvoiceViewer({ invoice }: InvoiceViewerProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Invoice Document</CardTitle>
          <Badge className={getStatusColor(invoice.status)}>
            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
          </Badge>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">File:</span> {invoice.filename}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Uploaded:</span> {new Date(invoice.uploadDate).toLocaleDateString()}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">ID:</span> {invoice.id}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="w-full h-full border border-border rounded-lg overflow-hidden bg-white">
          <div className="w-full h-full overflow-auto bg-white p-6">
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">TechCorp Solutions</h2>
                <p className="text-sm text-gray-600 mt-1">123 Business Ave, Suite 100</p>
                <p className="text-sm text-gray-600">San Francisco, CA 94107</p>
                <p className="text-sm text-gray-600">Phone: (555) 123-4567</p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Invoice #:</span> {invoice.extractedFields.find(f => f.fieldName === 'Invoice Number')?.extractedValue || 'INV-2024-001'}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date:</span> {invoice.extractedFields.find(f => f.fieldName === 'Invoice Date')?.extractedValue || '2024-01-15'}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Due Date:</span> {invoice.extractedFields.find(f => f.fieldName === 'Due Date')?.extractedValue || '2024-02-15'}
                </p>
              </div>
            </div>

            {/* Bill To Section */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bill To:</h3>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Acme Corporation</p>
                  <p>456 Client Street</p>
                  <p>New York, NY 10001</p>
                  <p>billing@acmecorp.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Purchase Order:</h3>
                <p className="text-sm text-gray-600">
                  {invoice.extractedFields.find(f => f.fieldName === 'Purchase Order')?.extractedValue || 'PO-2024-456'}
                </p>
              </div>
            </div>

            {/* Invoice Items Table */}
            <div className="mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-900">Qty</th>
                    <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium text-gray-900">Rate</th>
                    <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium text-gray-900">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Software Development Services</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-sm">40</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-sm">$25.00</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-sm">$1,000.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Project Management</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-sm">10</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-sm">$30.00</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-sm">$300.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">$1,100.00</span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-gray-600">Tax Amount:</span>
                  <span className="text-gray-900">{invoice.extractedFields.find(f => f.fieldName === 'Tax Amount')?.extractedValue || '$150.00'}</span>
                </div>
                <div className="border-t border-gray-300 mt-2 pt-2">
                  <div className="flex justify-between py-2 text-lg font-bold">
                    <span className="text-gray-900">Total:</span>
                    <span className="text-gray-900">{invoice.extractedFields.find(f => f.fieldName === 'Total Amount')?.extractedValue || '$1,250.00'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
              <p className="text-sm text-gray-600">Payment is due within 30 days of invoice date.</p>
              <p className="text-sm text-gray-600 mt-1">Thank you for your business!</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}