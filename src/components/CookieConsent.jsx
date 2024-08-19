import React, { useState } from "react";

const CookiePreferencesModal = ({ isOpen, onClose, onSave }) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={preferences.necessary}
              disabled
              className="mr-2"
            />
            <span>Necessary (Always active)</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) =>
                setPreferences({ ...preferences, analytics: e.target.checked })
              }
              className="mr-2"
            />
            <span>Analytics</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) =>
                setPreferences({ ...preferences, marketing: e.target.checked })
              }
              className="mr-2"
            />
            <span>Marketing</span>
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            onClick={() => onSave(preferences)}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferencesModal;
