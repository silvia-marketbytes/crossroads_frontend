import React from 'react';

const Button = ({ 
  label, 
  className = '', 
  isVertical = false, 
  verticalDirection = 'bottom-to-top',
  variant = 'primary' // New prop for button variants
}) => {
  const defaultStyles = 'px-4 py-2 rounded transition-colors duration-300';

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-orange-400 text-white hover:bg-orange-500',
    // You can add more variants as needed
  };

  // Vertical button styles
  const verticalStyles = isVertical 
    ? 'absolute right-0 top-1/2 transform -translate-y-1/2 rounded-l-md'
    : '';

  // Text rotation for vertical orientation
  const textRotation = isVertical
    ? verticalDirection === 'top-to-bottom'
      ? 'inline-block transform rotate-270'
      : 'inline-block transform rotate-90'
    : '';

  const combinedClassName = `${defaultStyles} ${variantStyles[variant] || ''} ${verticalStyles} ${className}`;

  return (
    <button className={combinedClassName}>
      <span className={textRotation}>{label}</span>
    </button>
  );
};

export default Button;