import { Carousel } from "antd";
import React from "react";

const carouselItems = [
  {
    image: "https://m.media-amazon.com/images/I/71+cdrt9FkL._AC_UY1000_.jpg",
    title: "Premium Men's Boxers",
    description: "Experience unmatched comfort and style with our latest collection."
  },
  {
    image: "https://m.media-amazon.com/images/I/71mlEalht2L._AC_UY1100_.jpg", // better resolution replacement
    title: "Under Jeans Essentials",
    description: "Seamless fit and breathable fabric for everyday wear."
  },
  {
    image: "https://m.media-amazon.com/images/I/61Oi-M7zftL._AC_UY1100_.jpg", // higher quality for ladies underwear
    title: "Ladies' Underwear",
    description: "Elegance and comfort combined in our new women's line."
  }
];

function Carousalha() {
  const onChange = (currentSlide) => {
  };

  return (
    <div className="relative">
      <Carousel autoplay afterChange={onChange} dotPosition="bottom">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-[400px]  object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-base md:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousalha;
