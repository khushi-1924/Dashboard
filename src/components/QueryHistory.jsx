import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../redux/querySlice";

const QueryHistory = ({ history, onHistoryClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-4 flex flex-col jusitfy-center">
      <h3 className="text-xl text-center font-semibold mb-2">Query History</h3>

      {history.length === 0 ? (
        <p className="text-gray-500 text-center">No queries found.</p>
      ) : (
        <>
          <ul className="mb-4 border border-gray-500 text-center rounded-lg shadow-md max-h-56 overflow-y-auto">
            {history.map((query, index) => (
              <li key={index} onClick={() => onHistoryClick(query)} className="py-2 px-10 hover:bg-gray-200 hover:cursor-pointer">
                {query}
              </li>
            ))}
          </ul>
          <button
            onClick={() => dispatch(clearHistory())}
            className="bg-red-400 mx-auto text-white p-3 rounded-md hover:cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out font-semibold"
          >
            Clear History
          </button>
        </>
      )}
    </div>
  );
};

export default QueryHistory;
