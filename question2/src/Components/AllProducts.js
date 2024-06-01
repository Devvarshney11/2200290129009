import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [sortType, setSortType] = useState("name"); // Default sort type
  const [filterAvailability, setFilterAvailability] = useState("all"); // Default filter

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product?page=${count}&sort=${sortType}&availability=${filterAvailability}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count, sortType, filterAvailability]);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterAvailability(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortType} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter">Availability:</label>
          <select
            id="filter"
            value={filterAvailability}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="outofstock">Out of Stock</option>
          </select>
        </div>
      </div>
      <table className="min-w-full bg-gray-100 shadow rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Product Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Price
            </th>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Rating
            </th>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Discount
            </th>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Availability
            </th>
            <th className="py-2 px-4 border-b border-gray-200 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        {products.length > 0 ? (
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="py-3 px-4 border-b border-gray-200">
                  {product.name_pro}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {product.rating} stars
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {product.discount}% off
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {product.availability === "yes" ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">Out of stock</span>
                  )}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <Link
                    to={`/product/${product.id_products}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Product
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="6" className="text-center py-4">
                No products found
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <div className="flex justify-end mt-4">
        {count > 1 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Prev
          </button>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
