import { Link } from "react-router-dom";

const TourCard = (tour) => {
  const descriptionToShow = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      const truncatedText = description.substring(0, maxLength);
      return truncatedText + "...";
    }
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  return (
    <div className="col">
      <Link
        to={`/tour/${tour.item.id}/detail`}
        className="card h-100"
        style={{
          textDecoration: "none",
          border: '1px solid var(--color-border-light)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          transition: 'all var(--transition-base)',
          background: 'var(--color-white)',
          boxShadow: 'var(--shadow-sm)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          e.currentTarget.style.borderColor = 'var(--color-border-light)';
        }}
      >
        <div className="row g-0">
          {/* Left side - Tour Image */}
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{
            background: 'var(--color-grey-50)',
            padding: '1rem'
          }}>
            <img
              src={`${process.env.REACT_APP_URL}/api/tour/` + tour.item.image1}
              className="img-fluid"
              alt="tour image"
              style={{
                height: "250px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 'var(--radius-base)'
              }}
            />
          </div>
          {/* Right side - Tour Details */}
          <div className="col-md-8">
            <div className="card-body" style={{ padding: 'var(--space-6)' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-2xl)',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-3)'
              }}>
                {tour.item.name}
              </h3>
              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--text-base)',
                marginBottom: 'var(--space-4)',
                lineHeight: '1.6'
              }}>
                {descriptionToShow(tour.item.description, 80)}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--space-3)',
                flexWrap: 'wrap',
                gap: 'var(--space-2)'
              }}>
                <div>
                  <span style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                    marginRight: 'var(--space-2)'
                  }}>From:</span>
                  <span style={{
                    color: 'var(--color-accent)',
                    fontWeight: '500',
                    fontSize: 'var(--text-sm)'
                  }}>
                    {tour.item.fromLocation.name}
                  </span>
                </div>
                <div>
                  <span style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                    marginRight: 'var(--space-2)'
                  }}>To:</span>
                  <span style={{
                    color: 'var(--color-accent)',
                    fontWeight: '500',
                    fontSize: 'var(--text-sm)'
                  }}>
                    {tour.item.toLocation.name}
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-3)' }}>
                <span style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-sm)',
                  marginRight: 'var(--space-2)'
                }}>Tour Date:</span>
                <span style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--text-sm)'
                }}>
                  {formatDateFromEpoch(tour.item.startDate)}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--color-border-light)'
              }}>
                <div>
                  <span style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                    marginRight: 'var(--space-2)'
                  }}>Available:</span>
                  <span style={{
                    color: 'var(--color-success)',
                    fontWeight: '600',
                    fontSize: 'var(--text-base)'
                  }}>
                    {tour.item.availableTickets}
                  </span>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '700',
                    color: 'var(--color-accent)'
                  }}>
                    &#8377;{tour.item.ticketPrice}
                  </span>
                  <span style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                    marginLeft: 'var(--space-1)'
                  }}>/person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
