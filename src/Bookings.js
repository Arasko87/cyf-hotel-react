import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filteredBooking = bookings.filter(name => {
      return (
        name.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        name.surname.toUpperCase().includes(searchVal.toUpperCase())
      );
    });
    setBookings(filteredBooking);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
