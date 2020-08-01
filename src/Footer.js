import React from "react";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => (
  <ul className="footAddress">
    {address.map((props, index) => {
      return <li key={index}>{props}</li>;
    })}
  </ul>
);

export default Footer;
