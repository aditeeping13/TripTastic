import { Link } from "react-router-dom";
import "./TourCard.css";

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
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="col">
      <Link
        to={`/tour/${tour.item.id}/detail`}
        className="tour-card"
        style={{ textDecoration: "none" }}
      >
        <div className="tour-card-image-wrapper">
          <img
            src={`${process.env.REACT_APP_URL}/api/tour/` + tour.item.image1}
            className="tour-card-image"
            alt={tour.item.name}
          />
          <div className="tour-card-overlay">
            <span className="tour-card-view-details">View Details →</span>
          </div>
        </div>

        <div className="tour-card-content">
          <h3 className="tour-card-title">{tour.item.name}</h3>

          <p className="tour-card-description">
            {descriptionToShow(tour.item.description, 85)}
          </p>

          <div className="tour-card-locations">
            <div className="tour-card-location">
              <span className="tour-card-label">From</span>
              <span className="tour-card-value">{tour.item.fromLocation.name}</span>
            </div>
            <div className="tour-card-location">
              <span className="tour-card-label">To</span>
              <span className="tour-card-value">{tour.item.toLocation.name}</span>
            </div>
          </div>

          <div className="tour-card-info">
            <div className="tour-card-info-item">
              <span className="tour-card-label">Departure</span>
              <span className="tour-card-value-small">
                {formatDateFromEpoch(tour.item.startDate)}
              </span>
            </div>
          </div>

          <div className="tour-card-footer">
            <div className="tour-card-tickets">
              <span className="tour-card-label">Available</span>
              <span className="tour-card-value">{tour.item.availableTickets} tickets</span>
            </div>
            <div className="tour-card-price">
              ₹{tour.item.ticketPrice.toLocaleString()}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
