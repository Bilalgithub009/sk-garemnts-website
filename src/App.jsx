
import Header from "./components/Header";

import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Carousalha from "./components/Carousal";
import Testimonials from "./components/Testimonial";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ProductDetail from "./components/ProductDetail";
// import { Route, Routes } from "react-router";
// import ProductDetail from "./components/ProductDetail";



function App() {

  
  return (
    <>

   <Header/>
   <Carousalha/>
    <Hero/>
    <Cards/>
    <Testimonials/>
{/* 
      <Routes>
        <Route path="/"   />        
         <Route path="/product-detail" element={<ProductDetail />} />
         <Route path="/testimonials" element={<Testimonials />} /> 
         <Route path="/carousalha" element={<Carousalha />} /> 
        <Route path="/hero" element={<Hero />} />
      </Routes> */}
   <div>





   {/* <Carousalha/> */}
   {/* <Hero/> */}
   {/* <Cards/> */}
   {/* <Testimonials/> */}
    {/* <ProductDetail/>  */}
   </div>

   





    
  
    </>
  )
}

export default App
