import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./request";

const initialState = {
  data: {},
  
  status: "idle",
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setField(state, { payload }: { payload: { key: string; value: string | number | string[] } }) {
      state.data = { ...state.data, [payload.key]: payload.value };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, { payload = {} }) => {
      state.data = payload;
      state.status = "success";
    });

    builder.addCase(getData.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getData.rejected, (state, { payload }) => {
      console.log("getData error", payload);
      state.status = "error";
    });
  },
});

export const { setField } = slice.actions;
export default slice.reducer;
