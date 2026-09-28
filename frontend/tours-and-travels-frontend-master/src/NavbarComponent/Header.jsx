import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white border-bottom" style={{
        borderBottom: '1px solid var(--color-border-light)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        padding: '1rem 0'
      }}>
        <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="d-flex align-items-center">
            <img
              src={logo}
              height="50"
              width="auto"
              className="d-inline-block align-top"
              alt="TripTastic Logo"
              style={{ marginRight: '1rem' }}
            />
            <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em'
              }}>
                TripTastic
              </span>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
