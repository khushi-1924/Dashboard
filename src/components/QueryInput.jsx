import React, { useState } from "react";
import QueryHistory from "./QueryHistory";
import { useSelector } from "react-redux";
// import '../App.css'

const mockSuggestions = [
  "What was the revenue last quarter?",
  "Show me customer growth in 2024",
  "How many orders were placed last month?",
  "Display the average order value in Q1",
  "Compare the revenue of Q2 and Q3",
  "Show me top-selling products in 2023",
  "How many active users are there?",
  "What's the churn rate for this quarter?",
];

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState(mockSuggestions);
  const { history } = useSelector((state) => state.query);

  // Update suggestions based on input
  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Show suggestions that match input (case insensitive)
    if (input.trim()) {
      const matches = mockSuggestions.filter((str) =>
        str.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Submit Query
  const handleSubmit = () => {
    if (query.trim()) {
      onSubmit(query);
      setQuery("");
      setFilteredSuggestions([]);
    }
    else {
        alert("Please enter a query")
    }
  };

  // Select Suggestion
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  const handleHistoryClick = (clickedQuery) => {
    setQuery(clickedQuery); // Populate input field with the clicked query
  };

  return (
    <div className="max-h-screen w-3/4 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-y-auto">
      <h1 className="p-3 mt-6 mb-3 text-2xl text-center font-semibold">
        Ask Business Realted Questions here
      </h1>
        <input
          type="text"
          className=" relative m-2 border p-3 w-3/4 rounded-md outline-none"
          value={query}
          onChange={handleInputChange}
          placeholder="write something to see suggestions..."
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 p-3 m-4 rounded-md hover:cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out font-semibold"
        >
          Submit Query
        </button>
        <QueryHistory history={history} onHistoryClick={handleHistoryClick} />
      {/* Suggestion Dropdown */}
      {filteredSuggestions.length > 0 && (
        <div className="absolute mt-40 bg-white border w-1/2 mr-7 rounded-md shadow-lg z-10">
          {filteredSuggestions.map((s, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(s)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueryInput;
