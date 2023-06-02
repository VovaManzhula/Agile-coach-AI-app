import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        history: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.history.push(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
