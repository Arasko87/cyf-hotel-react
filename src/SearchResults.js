import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col>">Number Of Nights</th>
        </tr>
      </thead>

      <tbody>{props.results.map(renderRow)}</tbody>
    </table>
  );
};

function renderRow(roomBooking, index) {
  return <SearchRow key={index} booking={roomBooking} />;
}
const SearchRow = props => {
  const booking = props.booking;
  const [selected, setSelected] = useState(false);
  const changeColor = () => {
    setSelected(!selected);
  };
  let selectedClassName;
  if (selected) {
    selectedClassName = "rowSelected";
  } else {
    selectedClassName = "";
  }
  return (
    <tr onClick={changeColor} className={selectedClassName}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate).diff(moment(booking.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default SearchResults;
