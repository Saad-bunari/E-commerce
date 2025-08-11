// src/store/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    return data.products;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    entered: false, // 👈 Track enter key
    status: 'idle',
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.results = [];
      state.entered = false;
    },
    setEntered: (state, action) => {
      state.entered = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setQuery, clearSearch, setEntered } = searchSlice.actions;
export default searchSlice.reducer;
