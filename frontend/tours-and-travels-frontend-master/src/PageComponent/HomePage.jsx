import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import TourCard from "../TourComponent/TourCard";
import "./HomePage.css";

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  const [eventName, setEventName] = useState("");
  const [eventFromLocationId, setEventFromLocationId] = useState("");
  const [eventToLocationId, setEventToLocationId] = useState("");

  const [tempEventName, setTempEventName] = useState("");
  const [tempEventFromLocationId, setTempEventFromLocationId] = useState("");
  const [tempEventToLocationId, setTempEventToLocationId] = useState("");

  const [tours, setTours] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const retrieveAllLocations = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/location/fetch/all`
    );
    return response.data;
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const allEvents = await retrieveAllEvents();
      if (allEvents) {
        setTours(allEvents.tours);
      }
    };

    const getSearchedEvents = async () => {
      const allEvents = await searchEvents();
      if (allEvents) {
        setTours(allEvents.tours);
      }
    };

    const getAllLocations = async () => {
      const resLocation = await retrieveAllLocations();
      if (resLocation) {
        setLocations(resLocation.locations);
      }
    };

    if (
      eventFromLocationId !== "" ||
      eventToLocationId !== "" ||
      eventName !== ""
    ) {
      getSearchedEvents();
    } else {
      getAllEvents();
    }

    getAllLocations();
  }, [eventFromLocationId, eventToLocationId, eventName]);

  const retrieveAllEvents = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/tour/fetch/all/active`
    );
    return response.data;
  };

  const searchEvents = async () => {
    try {
      if (eventName !== "") {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/api/tour/fetch/name-wise?tourName=` + eventName
        );

        return response.data;
      } else if (
        (eventFromLocationId !== "" && eventFromLocationId !== "0") ||
        (eventToLocationId !== "" && eventToLocationId !== "0")
      ) {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/api/tour/fetch/location-wise?fromLocationId=` +
          eventFromLocationId +
          "&toLocationId=" +
          eventToLocationId
        );
        return response.data;
      }
    } catch (error) {
      console.error("Error searching tours:", error);
      return null;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    if (tempEventName) {
      setEventName(tempEventName);
      setEventFromLocationId("");
      setEventToLocationId("");
    } else {
      setEventFromLocationId(tempEventFromLocationId);
      setEventToLocationId(tempEventToLocationId);
      setEventName("");
    }
  };

  const handleClearSearch = () => {
    setTempEventName("");
    setTempEventFromLocationId("");
    setTempEventToLocationId("");
    setEventName("");
    setEventFromLocationId("");
    setEventToLocationId("");
    setHasSearched(false);
  };

  return (
    <div className="homepage">
      <Carousel />

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <h2 className="search-title">Find Your Perfect Tour</h2>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-inputs">
              <div className="search-input-group">
                <label htmlFor="tourName" className="search-label">Tour Name</label>
                <input
                  type="text"
                  id="tourName"
                  className="search-input"
                  placeholder="Search by tour name..."
                  value={tempEventName}
                  onChange={(e) => setTempEventName(e.target.value)}
                />
              </div>

              <div className="search-divider">
                <span className="search-divider-text">OR</span>
              </div>

              <div className="search-input-group">
                <label htmlFor="fromLocation" className="search-label">From</label>
                <select
                  id="fromLocation"
                  className="search-select"
                  value={tempEventFromLocationId}
                  onChange={(e) => setTempEventFromLocationId(e.target.value)}
                >
                  <option value="">Select origin</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="search-input-group">
                <label htmlFor="toLocation" className="search-label">To</label>
                <select
                  id="toLocation"
                  className="search-select"
                  value={tempEventToLocationId}
                  onChange={(e) => setTempEventToLocationId(e.target.value)}
                >
                  <option value="">Select destination</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="search-actions">
              <button type="submit" className="btn-search">
                Search Tours
              </button>
              {hasSearched && (
                <button
                  type="button"
                  className="btn-clear"
                  onClick={handleClearSearch}
                >
                  Clear Search
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Tours Section */}
      <div className="tours-section">
        <div className="tours-container">
          {tours.length === 0 && hasSearched ? (
            <div className="no-tours">
              <h3 className="no-tours-title">No tours found</h3>
              <p className="no-tours-text">
                Try searching with different locations or check back later for new tours.
              </p>
            </div>
          ) : tours.length > 0 ? (
            <>
              <div className="tours-header">
                <h2 className="tours-title">
                  {hasSearched ? "Search Results" : "Featured Tours"}
                </h2>
                <p className="tours-subtitle">
                  {tours.length} {tours.length === 1 ? "tour" : "tours"} available
                </p>
              </div>
              <div className="tours-grid">
                {tours.map((tour) => (
                  <TourCard item={tour} key={tour.id} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
