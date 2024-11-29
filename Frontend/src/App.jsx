import React from "react";
import Home from "./home/Home";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Correcting Navigate syntax */}
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
