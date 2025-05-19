import Header from "./components/Header";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Carousalha from "./components/Carousal";
import Testimonials from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';



function App() {

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timing based on real loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <InfinitySpin
          visible={true}
          width="200"
          color="#007bff"
          ariaLabel="grid-loading"
        />
      </div>
    );
  }

  return (
    <>

      <div className="App">
        {/* 🧾 Your full SK Garment website goes here */}
        <Header />
        <Carousalha />
        <Hero />
        <Cards />
        <Testimonials />

      </div>


















    </>
  )
}

export default App
