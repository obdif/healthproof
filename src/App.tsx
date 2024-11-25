import React from 'react';
import { ShieldCheck, LockKeyhole, FileCheck, UserCircle } from 'lucide-react';
import HealthDataForm from './components/HealthDataForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">HealthProof</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <UserCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Health Data Sharing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your health information securely using zero-knowledge proofs.
            Maintain privacy while providing necessary verification to healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <LockKeyhole className="w-6 h-6 text-emerald-600" />
              <h3 className="font-semibold text-gray-900">Privacy First</h3>
            </div>
            <p className="text-gray-600">
              Your health data remains private. Only share what's necessary using zero-knowledge proofs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="font-semibold text-gray-900">Secure Verification</h3>
            </div>
            <p className="text-gray-600">
              Cryptographic proofs ensure data authenticity without revealing sensitive information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="font-semibold text-gray-900">Easy Sharing</h3>
            </div>
            <p className="text-gray-600">
              Generate and share proofs with healthcare providers quickly and securely.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <HealthDataForm />
        </div>
      </main>

      <footer className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 HealthProof. Powered by zkPass.</p>
            <p className="mt-2">Secure, private, and compliant health data sharing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;