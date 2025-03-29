import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { submitQuery, setResults, setError } from "./redux/querySlice";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.query);

  const mockData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [30, 50, 70, 90, 80, 20],
  };

  const handleQuerySubmit = (query) => {
    dispatch(submitQuery(query));

    // Simulate AI query response with setTimeout
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% success rate
      if (isSuccess) {
        dispatch(setResults(mockData));
      } else {
        dispatch(setError("Failed to fetch data. Please try again."));
        dispatch(setResults(null)); // Clear results on error
      }
    }, 1000);
  };

  return (
    <div className="h-screen w-screen bg-linear-to-br from-pink-100 to-blue-200 overflow-x-hidden">
      <h1 className="text-5xl font-serif p-7 text-center font-bold mb-4">
        Gen AI Analytics Dashboard
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <QueryInput onSubmit={handleQuerySubmit} />
      </div>
      {loading && <p>Loading results...</p>}
      {error && <p className="text-red-500 text-center text-4xl font-semibold m-4 p-4">{error}</p>}
      {results && <ResultDisplay data={results} />}
    </div>
  );
}

export default App;
