// features/cartSlice.js
import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  key: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItem[],
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
