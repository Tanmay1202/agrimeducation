import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  isLoading,
  icon,
  onClick,
  type = 'button',
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-accent hover:bg-accent-light text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-primary hover:bg-gray-100',
    white: 'bg-white text-primary hover:bg-gray-100 shadow-md',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        'font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      ) : icon ? (
        <span className="flex items-center gap-2">
          {icon}
          {children}
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
