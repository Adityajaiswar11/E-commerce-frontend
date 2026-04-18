import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  className = '', 
  disabled = false,
  icon = null,
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f172a]";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 focus:ring-indigo-500",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 focus:ring-gray-600",
    danger: "bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 focus:ring-red-500",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size] || sizes.md} ${disabled ? 'opacity-50 cursor-not-allowed active:scale-100' : ''} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
