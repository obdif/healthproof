import React, { useState } from 'react';
import { Shield, Lock, Loader2 } from 'lucide-react';
import { generateProof, HealthData, ProofResult } from '../utils/zkProof';
import ProofDisplay from './ProofDisplay';

export default function HealthDataForm() {
  const [healthData, setHealthData] = useState<HealthData>({
    bloodType: '',
    allergies: '',
    conditions: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [proofGenerated, setProofGenerated] = useState<ProofResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await generateProof(healthData);
      setProofGenerated(result);
    } catch (error) {
      setError('Failed to generate proof. Please try again.');
      console.error('Error generating proof:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-800">Secure Health Data Sharing</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blood Type
          </label>
          <select
            value={healthData.bloodType}
            onChange={(e) => setHealthData({ ...healthData, bloodType: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Allergies
          </label>
          <textarea
            value={healthData.allergies}
            onChange={(e) => setHealthData({ ...healthData, allergies: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            rows={3}
            placeholder="List any allergies..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical Conditions
          </label>
          <textarea
            value={healthData.conditions}
            onChange={(e) => setHealthData({ ...healthData, conditions: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            rows={3}
            placeholder="List any medical conditions..."
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Lock className="w-5 h-5" />
          )}
          {isLoading ? 'Generating Proof...' : 'Generate Zero-Knowledge Proof'}
        </button>
      </form>

      {proofGenerated && (
        <ProofDisplay proof={proofGenerated} />
      )}
    </div>
  );
}