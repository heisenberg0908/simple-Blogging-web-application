import React, { useState } from 'react';

const CollapsibleItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`border-2 border-inherit p-4 rounded-xl border-solid shadow-md shadow-gray-50 ${isExpanded ? 'max-h-full' : 'max-h-40 overflow-hidden'}`}
      onClick={toggleExpand}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className={`text-base font-light ${isExpanded ? '' : 'line-clamp-3'}`}>
        {content}
      </p>
      {!isExpanded && <p className="text-blue-500">Read more...</p>}
    </div>
  );
};

export default CollapsibleItem;
