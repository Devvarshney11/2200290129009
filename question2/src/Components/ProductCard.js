import React from "react";

const ProductCard = ({
  productName,
  price,
  rating,
  discount,
  availability,
}) => {
  return (
    <div className="w-[200px] m-auto mb-6 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-2 h-[250px]">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          {productName}
        </h1>
        <p className="text-lg font-semibold text-gray-700 mb-1">
          ${price.toFixed(2)}
        </p>
        <p className="text-lg text-yellow-500 mb-1">{rating} stars</p>
        <p className="text-lg text-green-600 mb-1">{discount}% off</p>
        {availability === "yes" ? (
          <button className="text-lg bg-green-400 border-2 border-green-100 rounded-md p-2">
            Buy Now
          </button>
        ) : (
          <p className="text-lg text-red-600 mb-1">Out of stock</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
