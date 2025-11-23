import React from "react";

const Confirmation = ({ payload, onViewResult }) => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-4 text-slate-800">Bounty Created</h2>
      <p className="text-slate-600 mb-6">Your bounty was successfully created.</p>

      <div className="bg-gray-50 p-4 rounded border">
        <p className="text-sm text-slate-700 mb-2">
          Title: <span className="font-medium">{payload?.title}</span>
        </p>
        <p className="text-sm text-slate-700 mb-2">
          Type: <span className="font-medium">{payload?.type}</span>
        </p>
        <p className="text-sm text-slate-700">
          Reward:{" "}
          <span className="font-medium">
            {payload?.reward?.amount} {payload?.reward?.currency}
          </span>
        </p>
      </div>

      <div className="flex gap-3 justify-end mt-6">
        <button
          onClick={onViewResult}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
        >
          View Result
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
