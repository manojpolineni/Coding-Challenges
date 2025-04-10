import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AutoCompleteSearchForm = () => {
      const [query, setQuery] = useState("");
      const [results, setResults] = useState([]);
      const [loading, setLoading] = useState(false);
      const cacheRef = useRef({});

      useEffect(() => {
        const delayDebounce = setTimeout(() => {
          if (!query.trim()) {
            setResults([]);
            return;
          }

          if (cacheRef.current[query]) {
            setResults(cacheRef.current[query]);
          } else {
            setLoading(true);
            axios
              .get(`https://dummyjson.com/recipes/search?q=${query}`)
              .then((res) => {
                const recipes = res.data.recipes || [];
                setResults(recipes);
                cacheRef.current[query] = recipes; 
              })
              .catch((err) => {
                console.error("API Error:", err);
                setResults([]);
              })
              .finally(() => setLoading(false));
          }
        }, 400);

        return () => clearTimeout(delayDebounce);
      }, [query]);


      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded w-full flex justify-start items-start flex-col">
          <h2 className="text-xl font-semibold mb-4">
            Recipe Autocomplete Search
          </h2>
          <input
            type="text"
            placeholder="Search for recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring"
          />

          {loading && <p className="text-gray-500 text-sm">Loading...</p>}

          <ul className="list-disc list-inside">
            {results.map((recipe) => (
              <li key={recipe.id} className="text-sm text-gray-800">
                {recipe?.name}
              </li>
            ))}
          </ul>
          {/* <div>
            {results.map((recipe) => (
              <div
                key={recipe.id}
                className="flex flex-col justify-start items-start border-b border-gray-300 py-2"
              >
                <h3 className="text-lg font-semibold">{recipe?.name}</h3>
                <p className="text-sm text-gray-600">{recipe?.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      );
};

export default AutoCompleteSearchForm;
