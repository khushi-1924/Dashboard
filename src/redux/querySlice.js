import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    history: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      if (state.history[0] !== action.payload) {
        state.history.unshift(action.payload); // Add query to the start of the history
      }
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { submitQuery, setResults, setError, clearHistory } =
  querySlice.actions;
export default querySlice.reducer;
