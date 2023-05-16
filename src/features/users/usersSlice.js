import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/MOCK_DATA.json";

const initialState = {
  users: data,
  //   users: [
  //     {
  //       FirstName: "Beyonce",
  //       LastName: "Knowles",
  //       StartDate: "2010",
  //       Department: "Marketing",
  //       Street: "Avenue",
  //       DateOfBirth: 4091971,
  //       City: "Huston",
  //       ZipCode: "1234",
  //       State: "Texas",
  //     },
  //   ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    ADD_USER: (state, action) => {
      const newArr = [...state.users];
      newArr.unshift(action.payload);
      return { users: newArr };
    },
  },
});

export const { increment, decrement, ADD_USER } = usersSlice.actions;
export default usersSlice.reducer;
