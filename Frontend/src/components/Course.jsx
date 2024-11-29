import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import list from "../../public/list.json";

function Course() {
  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore the endless possibilities that await as you dive into the
            world of knowledge. From groundbreaking technologies to timeless
            classics, this is a space where learning knows no bounds. Prepare
            yourself for an exciting journey where each page holds new
            discoveries, and every lesson brings you closer to mastering the
            skills that will shape your future. Embrace the challenges,
            celebrate the victories. Welcome aboard, let's make this journey
            unforgettable!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
