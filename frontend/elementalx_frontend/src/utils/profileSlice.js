import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        userProfile:(state,action) => {
            return action.payload;
        }
    }
});

export const { userProfile } = profileSlice.actions;
export default profileSlice.reducer;