import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.cartItems.push(product);
      }
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },
    removeAllFromCart: state => {
      state.cartItems = [];
    },
  },
});

export const {addToCart, updateQuantity, removeFromCart, removeAllFromCart} =
  cartSlice.actions;

export default cartSlice.reducer;
