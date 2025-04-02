import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6 text-center">
      {/* Error Icon & Message */}
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <h2 className="text-2xl text-gray-700 mt-2">Something went wrong...</h2>

      {/* Error Details */}
      <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          {err.status} : {err.statusText}
        </h3>
      </div>

      {/* Back to Home Button */}
      <button 
        onClick={() => navigate('/')} 
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
