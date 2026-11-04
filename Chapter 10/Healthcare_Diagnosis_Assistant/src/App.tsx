import React from 'react';
import { DiagnosisReport } from './components/DiagnosisReport';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-2xl text-gray-900 mb-1">AI Medical Assistant</h1>
          <p className="text-gray-600">Diagnosis Report & Analysis</p>
        </div>
        <DiagnosisReport />
      </div>
    </div>
  );
}