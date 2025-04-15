import axios from "axios";
import React, { useState, useEffect } from "react";

const NewValue = () => {
      const postPerPage = 10;
      const [posts, setPosts] = useState([]);
      const [currentPage, setcurrentPage] = useState(1);
      const [loading, setLoading] = useState(false);

      const totalPages = Math.ceil(posts.length / postPerPage);
      const lastIndex = currentPage * postPerPage;
      const firstIndex = lastIndex - postPerPage;
      const currentItems = posts?.slice(firstIndex, lastIndex) || [];

      useEffect(() => {
            const fetchData = async () => {
                  setLoading(true);
                  try {
                        const res = await axios.get('https://dummyjson.com/products')
                        setPosts(res.data.products);
                        setLoading(false);
                        
                  } catch (error) {
                        console.log(error);
                        setLoading(false);
                  } finally {
                        setLoading(false);
                  }
            }
            if (posts.length === 0) {
                  fetchData();
            }
      }, [posts]);

      console.log('posts', posts);

      if (loading) return <div>Loading...</div>

      return (
            <>
                  <div className="my-5 ">
                        <ul>{currentItems.length > 0 && currentItems.map((post, index) => (
                              <li className="text-lg font-medium text-gray-600" key={index}>{ post.title}</li>
                        ))}</ul>
                  </div>
                  <div className="flex justify-center items-center w-[500px]">

                        <button className={`cursor-pointer rounded-md border mx-1 px-2 py-1 bg-gray-500 disabled:cursor-not-allowed  text-gray-200 `} disabled={currentPage === 1} onClick={()=> setcurrentPage(currentPage - 1)}>
                              Prev
                        </button>
                        <div>
                              {Array.from({ length: totalPages }, (_, i) => (
                                    <button key={i} onClick={() => setcurrentPage(i + 1)} className={`px-3 py-1 border mx-1 rounded cursor-pointer ${currentPage === i + 1
                                                ? "bg-blue-500 cursor-pointer text-white"
                                                : ""
                                          }`}>
                                          {i+1}
                                    </button>
                              ))}
                        </div>
                        <button className="border px-2 text-gray-200 rounded-md mx-1 py-1 bg-gray-500 cursor-pointer disabled:cursor-not-allowed " disabled={currentPage === totalPages} onClick={()=> setcurrentPage(currentPage + 1)}>
                                    Next
                        </button>
                  </div>

            </>
      )
};

export default NewValue;
