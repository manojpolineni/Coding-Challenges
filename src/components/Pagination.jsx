import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
      const productsPerPage = 10;
      const [items, setItems] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          setError(null);
          try {
            const response = await axios.get("https://dummyjson.com/products");
            setItems(response.data.products);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
          }
        };
        if (items.length === 0) {
          fetchData();
        }
      }, [items]);

      const totalPages = Math.ceil(items.length / productsPerPage) ;
      
      const lastIndex = currentPage * productsPerPage;
      const firstIndex = lastIndex - productsPerPage;
      const currentItems = items?.slice(firstIndex, lastIndex) || [];

      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <ul className=" p-3 rounded-lg flex flex-col justify-center ">
              {loading && (
                <li className="text-lg font-bold animate-bounce delay-150 duration-500 ">
                  Loading...
                </li>
              )}
              {error && (
                <li className="text-lg text-red-600 font-bold">{error}</li>
              )}
              {currentItems &&
                currentItems?.map((post, index) => (
                  <li key={index} className="py-2 text-lg font-bold ">
                    {post?.title}
                  </li>
                ))}
            </ul>
            <div className="flex justify-center space-x-2 mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-blue-500 cursor-pointer text-white"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      );
};

export default Pagination;
