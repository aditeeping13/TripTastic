import { Link } from "react-router-dom";
import "./NormalHeader.css";

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className="nav-link-custom"
          aria-current="page"
        >
          Register
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/login"
          className="nav-link-custom nav-link-primary"
          aria-current="page"
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
