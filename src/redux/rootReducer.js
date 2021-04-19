import authSlice from 'context/auth/authSlice';

const rootReducer = {
  auth: authSlice.reducer,
  //cart: cartSlice.reducer,
  //product: productSlice.reducer,
};

export default rootReducer;
