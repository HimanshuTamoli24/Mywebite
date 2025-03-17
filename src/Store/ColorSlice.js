import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textColor: "text-[#2cda5c]",
    textHover: "hover:text-[#71e68a]",
    textBg: "bg-[#2cda5c]/5"
};

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.textColor = action.payload.textColor;
            state.textHover = action.payload.textHover;
            state.textBg = action.payload.textBg;
        }
    }
});

export const { setTheme } = colorSlice.actions;
export default colorSlice.reducer;
