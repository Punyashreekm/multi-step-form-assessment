import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Result = () => {
  const location = useLocation();
  const { payload } = location.state || {};

  if (!payload) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">No Data Found</h2>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Go back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-green-600 px-6 py-4 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Bounty Created Successfully!</h1>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Your bounty has been successfully created. Below is the final payload that was sent to the server.
          </p>

          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
            >
              Create Another Bounty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
