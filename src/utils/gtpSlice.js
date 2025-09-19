import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
    },
    reducers: {
        toggelGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
});

export const { toggelGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;