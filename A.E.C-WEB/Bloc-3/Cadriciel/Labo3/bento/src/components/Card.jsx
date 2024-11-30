import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

const Card = ({ title, fontClass, content, bgColor, icon, image, className, disposition, textColor }) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md ${bgColor} ${className} 
      ${disposition === 'left' || disposition === 'right' ? 'flex flex-row' : 'flex flex-col'} items-center`}
    >
      {/* Conditional image placement */}
      {disposition === 'top' && image && (
        <img src={image} alt={title} className="w-full mb-4 object-cover rounded-lg" />
      )}
      {disposition === 'left' && image && (
        <img src={image} alt={title} className="w-48 h-30 mr-4 object-cover rounded-lg" />
      )}

      {/* Card Content */}
      <div className={`flex-1 ${textColor || ''} ${fontClass || ''}`}>  
        <CardHeader title={title} icon={icon} />
        {disposition === 'between' && image && (
          <img src={image} alt={title} className="w-full my-4 object-cover rounded-lg" />
        )}
        <CardContent content={content} />
      </div>

      {/* Bottom or Right Image */}
      {disposition === 'right' && image && (
        <img src={image} alt={title} className="w-48 h-30 ml-4 object-cover rounded-lg" />
      )}
      {disposition === 'bottom' && image && (
        <img src={image} alt={title} className="w-full mt-4 object-cover rounded-lg" />
      )}
    </div>
  );
};

export default Card;
