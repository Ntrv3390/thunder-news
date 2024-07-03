import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewsByCategory = createAsyncThunk(
  "news/fetchByCategory",
  async (
    { country, category, apiKey, page, pageSize },
    { rejectWithValue }
  ) => {
    if (!country) {
      country = "in";
    }
    try {
      const response = await fetch(
        `/api/news/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  news: [],
  error: false,
  errorMessage: "",
  length: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = "";
      })
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload.articles;
        state.error = false;
        state.errorMessage = "";
        state.length = action.payload.length;
      })
      .addCase(fetchNewsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload || "Failed to fetch news";
      });
  },
});

export default newsSlice.reducer;
