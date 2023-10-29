/* eslint-disable react/prop-types */
const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-blue-500 text-white text-sm rounded-full px-4 py-1 mt-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
