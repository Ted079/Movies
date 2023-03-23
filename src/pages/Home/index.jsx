import Card from "../../components/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }


  return <div>
    <Navbar isScrolled={isScrolled}/>
  </div>;
};
  
export default Home;
