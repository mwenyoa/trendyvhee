import React from 'react';
import { Link } from 'react-router-dom';

const EmailConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Email Confirmation</h2>
        <p className="text-gray-600 mb-6">
          Congratulations, Your email has been confirmed
        </p>
        <div className="flex justify-end">
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
