const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    orderBurger: (state) => {
      state.burgerBuns--;
    },
  },
});

module.exports = {
  reducers: burgerSlice.reducer,
  actions: burgerSlice.actions,
};
