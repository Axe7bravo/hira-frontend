import React from 'react';

const Notification = ({ message, type, onClose }) => {
  let bgColor = 'bg-blue-200';
  let textColor = 'text-blue-800';

  switch (type) {
    case 'error':
      bgColor = 'bg-red-200';
      textColor = 'text-red-800';
      break;
    case 'success':
      bgColor = 'bg-green-200';
      textColor = 'text-green-800';
      break;
    case 'warning':
      bgColor = 'bg-yellow-200';
      textColor = 'text-yellow-800';
      break;
    default:
      break;
  }

  return (
    <div
      className={`p-4 rounded-md mb-4 ${bgColor} ${textColor} flex justify-between items-center`}
    >
      <span>{message}</span>
      {onClose && (
        <button className="text-gray-600" onClick={onClose}>
          <svg
            className="h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Notification;