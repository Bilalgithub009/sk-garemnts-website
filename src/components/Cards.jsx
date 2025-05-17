import React, { useState } from "react";
import { useNavigate } from "react-router";

const productData = [
  {
    name: "Boxer",
    image: "https://m.media-amazon.com/images/I/717IJINcB2L._AC_UY1100_.jpg",
    description: "Our breathable and stretchable boxers are crafted for ultimate comfort...",
    price: "Rs 500",
    rating: 4.0,
  },
  {
    name: "Jeans",
    image: "https://static-01.daraz.pk/p/a1a97d96abf7722a017fb1ee3c88739d.jpg",
    description: "Stay sleek and supported with our underjeans...",
    price: "Rs 500",
    rating: 4.6,
  },
  {
    name: "UnderJeans",
    image: "https://cdn.aboutstatic.com/file/images/7fc945c7e70a5b63c2ed36571675f31c.jpg",
    description: "Slim-fit design that stays hidden and feels like a second skin...",
    price: "Rs 500",
    rating: 4.9,
  },
  {
    name: "Ladies Under Wear",
    image: "https://m.media-amazon.com/images/I/61Oi-M7zftL._AC_UY1100_.jpg",
    description: "Our elegant ladies’ underwear offers style, breathability, and support...",
    price: "Rs 500",
    rating: 5.0,
  },
  {
    name: "Naker",
    image: "https://m.media-amazon.com/images/I/51ef58uHevL._AC_UY1100_.jpg",
    description: "Lightweight and flexible, our nicker collection is tailored for all-day ease...",
    price: "Rs 500",
    rating: 4.2,
  },
  {
    name: "Panties",
    image: "https://m.media-amazon.com/images/I/81MNgvjR6mL._AC_UY350_.jpg",
    description: "Our elegant ladies’ underwear offers style, breathability, and support...",
    price: "Rs 500",
    rating: 3.8,
  },
];

function Cards() {
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate

  const handleAddToCart = () => {
    navigate("/product-detail");
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, productData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  const visibleCards = productData.slice(0, visibleCount);

  return (
    <div className="px-4 py-16 bg-gray-50">
      <h1 className="text-center font-extrabold text-4xl mb-12 text-gray-800">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Featured Products
        </span>
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[320px]">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                <p className="text-gray-800 font-semibold mt-4 text-lg">
                  Price: <span className="text-blue-700">{product.price}</span>
                </p>
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162L9.05 2.927z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    ({product.rating})
                  </span>
                </div>
              </div>

              <div className="flex justify-between mt-6 gap-2">
                <button
                  onClick={handleAddToCart}
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition"
                >
                  Add to Cart
                </button>
                <button className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-4">
        {visibleCount < productData.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Show More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleShowLess}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;
