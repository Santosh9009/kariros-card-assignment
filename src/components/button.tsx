import "../app/globals.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const GradientButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="gradient-border-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;
