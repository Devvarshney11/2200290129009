import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const products = [
  {
    productName: "Wireless Mouse",
    price: 25.99,
    rating: 4.5,
    discount: 10,
    availability: "yes",
  },
  {
    productName: "Mechanical Keyboard",
    price: 75.49,
    rating: 4.8,
    discount: 15,
    availability: "yes",
  },
  {
    productName: "HD Monitor",
    price: 199.99,
    rating: 4.7,
    discount: 20,
    availability: "out of stock",
  },
  {
    productName: "USB-C Hub",
    price: 35.0,
    rating: 4.3,
    discount: 5,
    availability: "yes",
  },
  {
    productName: "External Hard Drive",
    price: 89.99,
    rating: 4.6,
    discount: 25,
    availability: "yes",
  },
  {
    productName: "Bluetooth Speaker",
    price: 49.99,
    rating: 4.2,
    discount: 10,
    availability: "out of stock",
  },
  {
    productName: "Smartphone Stand",
    price: 12.99,
    rating: 4.4,
    discount: 0,
    availability: "yes",
  },
  {
    productName: "Gaming Headset",
    price: 59.99,
    rating: 4.7,
    discount: 18,
    availability: "yes",
  },
  {
    productName: "Laptop Cooling Pad",
    price: 24.99,
    rating: 4.1,
    discount: 12,
    availability: "yes",
  },
  {
    productName: "Portable Charger",
    price: 29.99,
    rating: 4.5,
    discount: 10,
    availability: "yes",
  },
];

const AllProducts = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Product Name</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold ">
                <div className="flex flex-row justify-between">
                  <p>Price</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Rating</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Discount</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Availability</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                  {product.productName}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-yellow-500">
                  {product.rating} stars
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-green-600">
                  {product.discount}% off
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.availability === "yes" ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">Out of stock</span>
                  )}
                </td>
                <td>
                  <Link
                    to={`/product/${index}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Product
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
