import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "./instance";

const initialState = {};

export const __joinUser = createAsyncThunk(
  "__joinUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.patch(
        process.env.REACT_APP_SERVER_URL + "/users/modProfile",
        payload,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const joinSlice = createSlice({
  name: "joinSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__joinUser.fulfilled]: (state, action) => {
      alert("회원가입 완료");
    },
  },
});

export default joinSlice;
