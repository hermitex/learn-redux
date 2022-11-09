import { createSlice } from "@reduxjs/toolkit";
import cakeSlice from "../cake/cakeSlice";
const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, actions) => {
      state.numOfIcecreams += actions.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeActions.ordered, (state) => {
  //     state.numOfIcecreams--;
  //   });
  // },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
