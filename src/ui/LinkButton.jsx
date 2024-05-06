import { Link } from "react-router-dom";
function LinkButton({ to, children }) {
  return (
    <Link
      className="text-text hover:bg-accent transition-colors duration-300 hover:text-primary bg-secondary text-center py-5 capitalize tracking-wide font-semibold rounded-xl"
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
