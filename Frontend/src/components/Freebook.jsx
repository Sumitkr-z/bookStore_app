import React, { useState, useEffect } from "react"; // Import useState and useEffect
import list from "../../public/list.json"; // Ensure the path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]); // Initialize state

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(
          res.data.filter((data) => data.category === "Study") // Correct parenthesis
        );
        setBook(res.data.filter((data) => data.category === "Study")); // Filter data here
      } catch (error) {
        console.error(error); // Use error for better readability
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
            Explore a wide range of free books covering topics like Java, MERN,
            IoT, and more. Whether you're a student or a tech enthusiast, these
            books offer valuable knowledge to boost your skills without any cost.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} /> // Ensure Cards component handles item properly
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
