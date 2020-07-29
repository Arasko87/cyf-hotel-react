import React from "react";

const TouristInfoCards = () => {
  return (
    <div class="cardBox">
      <div class="card">
        <h3>Glasgow</h3>
        <img
          class="card-img-top"
          src="https://cimg.visitscotland.com/cms-images/header-images/ois/glasgow?size=md"
          alt="Glasgow city"
        />
        <p>
          Get ready to shop, eat and enjoy the city . Your favourite places are
          ready to welcome you. From being a tourist at home, a long-awaited
          shopping trip to exploring our diverse neighbourhoods and enjoying the
          city's amazing food and drink scene.{" "}
        </p>
        <div class="card-body">
          <a
            class="btn btn-primary"
            href="https://peoplemakeglasgow.com/"
            target="_blank"
          >
            Discover More ...
          </a>
        </div>
      </div>
      <div class="card">
        <h3>Manchester</h3>
        <img
          class="card-img-top"
          src="https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
          alt="Manchester city"
        />
        <p>
          Manchester is one of the most exciting places to visit in the UK right
          now where everybody and anybody is very warmly welcomed. Search for
          things to do and find out what's on, as well as getting inspiration
          for your visit to this fantastic city region.{" "}
        </p>
        <div class="card-body">
          <a
            class="btn btn-primary"
            href="https://www.visitmanchester.com/"
            target="_blank"
          >
            Discover More ...
          </a>
        </div>
      </div>
      <div class="card">
        <h3>London</h3>
        <img
          class="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBv3YGRbR9HerGnjuQt6eGFGNREVEN69DFiw&usqp=CAU "
          alt="London city"
        />
        <p>
          Visit London,and find things to do in London, days out in London,
          London attractions and sightseeing, what's on, London events, theatre,
          tours, restaurants and hotels in London. Plan your trip to London with
          useful traveller information.
        </p>
        <div class="card-body">
          <a
            class="btn btn-primary"
            href="https://visitlondon.com/"
            target="_blank"
          >
            Discover More ...
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
