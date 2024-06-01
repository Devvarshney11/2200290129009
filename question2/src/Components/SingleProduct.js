import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/singleProduct/" + id
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    product != null && (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="font-medium">Product ID</td>
                  <td>{product.id_products}</td>
                </tr>
                <tr>
                  <td className="font-medium">Name</td>
                  <td>{product.name_pro}</td>
                </tr>
                <tr>
                  <td className="font-medium">Category</td>
                  <td>{product.category_name}</td>
                </tr>
                <tr>
                  <td className="font-medium">Price</td>
                  <td>${product.price}</td>
                </tr>
                <tr>
                  <td className="font-medium">Discount</td>
                  <td>{product.discount}%</td>
                </tr>
                <tr>
                  <td className="font-medium">Rating</td>
                  <td>{"★".repeat(product.rating)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleProduct;
