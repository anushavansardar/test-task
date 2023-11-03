import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../utils/helpers";

export const getData = createAsyncThunk(
  "data/get",
  async () => {
    await delay(1000);
    return {
      phone: "",
      operator: null,
      minute: 100,
      sms: 0,
      internet: 0,
      wifi: null,
      services: []
    }
  }
);

