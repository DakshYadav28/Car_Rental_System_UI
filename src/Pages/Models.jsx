import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Models() {
  const [cars, setCars] = useState([]);

  // Fetch car data from the API
  useEffect(() => {
    fetch('https://localhost:7118/api/car/GetAllCars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car data:', error));
  }, []);

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {cars.map(car => (
              <div key={car.CarId} className="models-div__box">
                <div className="models-div__box__img">
                  <img src={car.ImageUrl} alt={`${car.Make} ${car.Model}`} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.Make} {car.Model}</p>
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>${car.PricePerDay}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.Make}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.AvailabilityStatus} &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
