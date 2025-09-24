import { FC, forwardRef, HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const OldButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-700 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
