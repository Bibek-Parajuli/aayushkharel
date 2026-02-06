const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false 
}) => {
  const baseStyles = 'font-elegant font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variants = {
    primary: 'bg-valentine-red text-white hover:bg-valentine-darkred focus:ring-valentine-pink shadow-lg hover:shadow-valentine-red/50',
    secondary: 'bg-white text-valentine-red border-2 border-valentine-red hover:bg-valentine-red hover:text-white focus:ring-valentine-pink shadow-lg',
  };
  
  const sizes = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
