import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-grey-50)',
      borderTop: '1px solid var(--color-border-light)',
      padding: 'var(--space-16) var(--space-6) var(--space-8)',
      marginTop: 'var(--space-20)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-xl)',
              fontWeight: '700',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              TripTastic
            </h5>
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-base)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-4)'
            }}>
              Discover your next escape with our curated travel experiences.
              Let's turn your vision into an unforgettable journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Explore
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Destinations', 'Tours', 'Experiences', 'About Us'].map((item, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
                  <a href="#!" style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Support
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms'].map((item, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
                  <a href="#!" style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Company
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About', 'Careers', 'Blog', 'Partners'].map((item, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
                  <a href="#!" style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)'
            }}>
              Get Started
            </h6>
            <Link to="/user/login">
              <button style={{
                background: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-base)',
                padding: 'var(--space-3) var(--space-5)',
                fontSize: 'var(--text-sm)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                width: '100%'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-hover)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          marginTop: 'var(--space-12)',
          paddingTop: 'var(--space-6)',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: 'var(--text-sm)',
            margin: 0
          }}>
            © 2024 TripTastic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
