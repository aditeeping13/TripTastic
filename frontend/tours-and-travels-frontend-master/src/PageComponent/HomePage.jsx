import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import TourCard from "../TourComponent/TourCard";
import "./HomePage.css";

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  // Filter states
  const [eventName, setEventName] = useState("");
  const [eventFromLocationId, setEventFromLocationId] = useState("");
  const [eventToLocationId, setEventToLocationId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Temporary states for form inputs
  const [tempEventName, setTempEventName] = useState("");
  const [tempEventFromLocationId, setTempEventFromLocationId] = useState("");
  const [tempEventToLocationId, setTempEventToLocationId] = useState("");
  const [tempMinPrice, setTempMinPrice] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");
  const [tempSortBy, setTempSortBy] = useState("newest");

  const [allTours, setAllTours] = useState([]); // Store all tours from API
  const [tours, setTours] = useState([]); // Filtered and sorted tours
  const [hasSearched, setHasSearched] = useState(false);

  const retrieveAllLocations = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/location/fetch/all`
    );
    return response.data;
  };

  const retrieveAllEvents = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/tour/fetch/all/active`
    );
    return response.data;
  };

  // Fetch all tours and locations on mount
  useEffect(() => {
    const getAllEvents = async () => {
      const allEvents = await retrieveAllEvents();
      if (allEvents) {
        setAllTours(allEvents.tours);
        setTours(allEvents.tours);
      }
    };

    const getAllLocations = async () => {
      const resLocation = await retrieveAllLocations();
      if (resLocation) {
        setLocations(resLocation.locations);
      }
    };

    getAllEvents();
    getAllLocations();
  }, []);

  // Apply filters and sorting whenever filter states change
  useEffect(() => {
    let filtered = [...allTours];

    // Filter by name
    if (eventName) {
      filtered = filtered.filter((tour) =>
        tour.name.toLowerCase().includes(eventName.toLowerCase())
      );
    }

    // Filter by from location
    if (eventFromLocationId && eventFromLocationId !== "0") {
      filtered = filtered.filter(
        (tour) => tour.fromLocation?.id === eventFromLocationId
      );
    }

    // Filter by to location
    if (eventToLocationId && eventToLocationId !== "0") {
      filtered = filtered.filter(
        (tour) => tour.toLocation?.id === eventToLocationId
      );
    }

    // Filter by min price
    if (minPrice) {
      const min = parseFloat(minPrice);
      filtered = filtered.filter((tour) => tour.ticketPrice >= min);
    }

    // Filter by max price
    if (maxPrice) {
      const max = parseFloat(maxPrice);
      filtered = filtered.filter((tour) => tour.ticketPrice <= max);
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.ticketPrice - b.ticketPrice);
        break;
      case "price-high":
        filtered.sort((a, b) => b.ticketPrice - a.ticketPrice);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
      default:
        // Keep original order (newest first from API)
        break;
    }

    setTours(filtered);
  }, [allTours, eventName, eventFromLocationId, eventToLocationId, minPrice, maxPrice, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    // Apply all filters
    setEventName(tempEventName);
    setEventFromLocationId(tempEventFromLocationId);
    setEventToLocationId(tempEventToLocationId);
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
    setSortBy(tempSortBy);
  };

  const handleClearAll = () => {
    // Clear all temporary states
    setTempEventName("");
    setTempEventFromLocationId("");
    setTempEventToLocationId("");
    setTempMinPrice("");
    setTempMaxPrice("");
    setTempSortBy("newest");

    // Clear all filter states
    setEventName("");
    setEventFromLocationId("");
    setEventToLocationId("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("newest");
    setHasSearched(false);
  };

  return (
    <div className="homepage">
      <Carousel />

      {/* Filter & Sort Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="filter-header">
            <h2 className="search-title">Find Your Perfect Tour</h2>
          </div>

          <div className="filter-section">
            <div className="filter-section-header">
              <h3 className="filter-section-title">Filter & Sort Tours</h3>
              <button
                type="button"
                className="btn-clear-all"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </div>

            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-inputs">
                <div className="search-input-group">
                  <label htmlFor="tourName" className="search-label">
                    Search by Name
                  </label>
                  <input
                    type="text"
                    id="tourName"
                    className="search-input"
                    placeholder="Enter tour name..."
                    value={tempEventName}
                    onChange={(e) => setTempEventName(e.target.value)}
                  />
                </div>

                <div className="search-input-group">
                  <label htmlFor="minPrice" className="search-label">
                    Min Price
                  </label>
                  <input
                    type="number"
                    id="minPrice"
                    className="search-input"
                    placeholder="Min"
                    value={tempMinPrice}
                    onChange={(e) => setTempMinPrice(e.target.value)}
                    min="0"
                  />
                </div>

                <div className="search-input-group">
                  <label htmlFor="maxPrice" className="search-label">
                    Max Price
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    className="search-input"
                    placeholder="Max"
                    value={tempMaxPrice}
                    onChange={(e) => setTempMaxPrice(e.target.value)}
                    min="0"
                  />
                </div>

                <div className="search-input-group">
                  <label htmlFor="fromLocation" className="search-label">
                    From Location
                  </label>
                  <select
                    id="fromLocation"
                    className="search-select"
                    value={tempEventFromLocationId}
                    onChange={(e) => setTempEventFromLocationId(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="search-input-group">
                  <label htmlFor="toLocation" className="search-label">
                    To Location
                  </label>
                  <select
                    id="toLocation"
                    className="search-select"
                    value={tempEventToLocationId}
                    onChange={(e) => setTempEventToLocationId(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sort-section">
                <div className="search-input-group">
                  <label htmlFor="sortBy" className="search-label">
                    Sort By
                  </label>
                  <select
                    id="sortBy"
                    className="search-select"
                    value={tempSortBy}
                    onChange={(e) => setTempSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>
              </div>

              <div className="search-actions">
                <button type="submit" className="btn-search">
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
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
