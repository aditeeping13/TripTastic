import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import { useNavigate } from "react-router-dom";
import TourCard from "../TourComponent/TourCard";

const HomePage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  const [eventName, setEventName] = useState("");
  const [eventFromLocationId, setEventFromLocationId] = useState("");
  const [eventToLocationId, setEventToLocationId] = useState("");

  const [tempEventName, setTempEventName] = useState("");
  const [tempEventFromLocationId, setTempEventFromLocationId] = useState("");
  const [tempEventToLocationId, setTempEventToLocationId] = useState("");

  const [tours, setTours] = useState([]);

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
    if (eventName !== "") {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/tour/fetch/name-wise?tourName=` + eventName
      );

      return response.data;
    } else if (
      eventFromLocationId !== "" ||
      eventFromLocationId !== "0" ||
      eventToLocationId !== "" ||
      eventToLocationId !== "0"
    ) {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/tour/fetch/location-wise?fromLocationId=` +
        eventFromLocationId +
        "&toLocationId=" +
        eventToLocationId
      );
      return response.data;
    }
  };

  const searchEventByName = (e) => {
    e.preventDefault();
    setEventName(tempEventName);

    setTempEventName("");
    setEventFromLocationId("");
    setEventToLocationId("");
  };

  const searchEventByCategory = (e) => {
    e.preventDefault();
    setEventFromLocationId(tempEventFromLocationId);
    setEventToLocationId(tempEventToLocationId);
    setTempEventFromLocationId("");
    setTempEventToLocationId("");
    setEventName("");
  };

  // Popular destinations data
  const popularDestinations = [
    { name: "Maldives", icon: "🏝️" },
    { name: "Tulum", icon: "🏖️" },
    { name: "Amalfi Coast", icon: "🌊" },
    { name: "Bora Bora", icon: "🏔️" },
    { name: "Seychelles", icon: "🌴" },
    { name: "Lake Como", icon: "⛵" }
  ];

  // Search bar component to pass to Carousel
  const searchBar = (
    <div className="row g-3 align-items-end">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search tours..."
          value={tempEventName}
          onChange={(e) => setTempEventName(e.target.value)}
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-base)',
            padding: 'var(--space-3) var(--space-4)',
            fontSize: 'var(--text-base)',
            fontFamily: 'var(--font-primary)'
          }}
        />
      </div>
      <div className="col-md-3">
        <select
          className="form-control"
          value={tempEventFromLocationId}
          onChange={(e) => setTempEventFromLocationId(e.target.value)}
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-base)',
            padding: 'var(--space-3) var(--space-4)',
            fontSize: 'var(--text-base)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          <option value="">From Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-3">
        <select
          className="form-control"
          value={tempEventToLocationId}
          onChange={(e) => setTempEventToLocationId(e.target.value)}
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-base)',
            padding: 'var(--space-3) var(--space-4)',
            fontSize: 'var(--text-base)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          <option value="">To Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-2">
        <button
          className="btn w-100"
          onClick={(e) => {
            if (tempEventName) {
              searchEventByName(e);
            } else {
              searchEventByCategory(e);
            }
          }}
          style={{
            background: 'var(--color-accent)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-base)',
            padding: 'var(--space-3) var(--space-4)',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            fontFamily: 'var(--font-primary)',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-accent-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-accent)';
          }}
        >
          Search
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--color-white)' }}>
      {/* Hero Section with Integrated Search */}
      <Carousel searchBar={searchBar} />

      {/* Popular Destinations Section */}
      <div style={{
        padding: 'var(--space-20) var(--space-6)',
        background: 'var(--color-background)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-3xl)',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            textAlign: 'center',
            marginBottom: 'var(--space-12)'
          }}>
            Popular Destinations
          </h2>
          <div className="row g-4 justify-content-center">
            {popularDestinations.map((dest, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 text-center">
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-grey-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-3)',
                  fontSize: '3rem',
                  transition: 'all var(--transition-base)',
                  cursor: 'pointer',
                  border: '2px solid var(--color-border-light)'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {dest.icon}
                </div>
                <p style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '500',
                  color: 'var(--color-text-primary)',
                  margin: 0
                }}>
                  {dest.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tours Section */}
      <div style={{
        padding: 'var(--space-20) var(--space-6)',
        background: 'var(--color-white)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-3xl)',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)'
          }}>
            {eventName || eventFromLocationId || eventToLocationId
              ? "Search Results"
              : "Featured Tours"}
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-lg)',
            marginBottom: 'var(--space-12)'
          }}>
            Discover unforgettable experiences curated just for you
          </p>

          <div className="row row-cols-1 row-cols-md-1 g-5">
            {tours.length > 0 ? (
              tours.map((tour) => {
                return <TourCard item={tour} key={tour.id} />;
              })
            ) : (
              <div className="col text-center" style={{ padding: 'var(--space-20) 0' }}>
                <p style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-lg)'
                }}>
                  No tours found. Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
