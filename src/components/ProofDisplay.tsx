import React from 'react';
import { Share2, Copy, Check, Download, Shield, RefreshCw } from 'lucide-react';
import { ProofResult, verifyProof } from '../utils/zkProof';

interface ProofDisplayProps {
  proof: ProofResult;
}

export default function ProofDisplay({ proof }: ProofDisplayProps) {
  const [copied, setCopied] = React.useState(false);
  const [verifying, setVerifying] = React.useState(false);
  const [verified, setVerified] = React.useState<boolean | null>(null);

  const handleCopy = async () => {
    const proofData = JSON.stringify(proof, null, 2);
    await navigator.clipboard.writeText(proofData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const proofData = JSON.stringify(proof, null, 2);
    const blob = new Blob([proofData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'health-data-proof.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleVerify = async () => {
    setVerifying(true);
    try {
      const isValid = await verifyProof(proof);
      setVerified(isValid);
    } catch (error) {
      setVerified(false);
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-emerald-700">
          <Share2 className="w-5 h-5" />
          <h3 className="font-semibold">Proof Generated Successfully</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleVerify}
            disabled={verifying}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-white border border-emerald-200 rounded-md hover:bg-emerald-50 transition-colors disabled:opacity-50"
          >
            {verifying ? (
              <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" />
            ) : (
              <Shield className="w-4 h-4 text-emerald-600" />
            )}
            {verifying ? 'Verifying...' : 'Verify'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-white border border-emerald-200 rounded-md hover:bg-emerald-50 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-emerald-600" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-white border border-emerald-200 rounded-md hover:bg-emerald-50 transition-colors"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            Download
          </button>
        </div>
      </div>
      
      {verified !== null && (
        <div className={`p-3 mb-4 rounded-lg ${verified ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {verified ? (
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Proof verified successfully!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Proof verification failed. Please try again.</span>
            </div>
          )}
        </div>
      )}

      <p className="text-sm text-emerald-600 mb-4">
        Your health data proof has been generated. You can now share this proof with healthcare providers without revealing your actual data.
      </p>

      <div className="bg-white rounded border border-emerald-100 overflow-hidden">
        <div className="p-2 bg-emerald-50 border-b border-emerald-100">
          <h4 className="text-sm font-medium text-emerald-800">Zero-Knowledge Proof</h4>
        </div>
        <div className="p-3 text-xs font-mono overflow-x-auto">
          <pre className="text-gray-700">
            {JSON.stringify(proof, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}