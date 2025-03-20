import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  key: number;
  title: string;
  price: number;
  qty: number;
  img: string;
};

interface VariableState {
  value: number;
  items: CartItem[];
   Navbar:{
    title:string,
     href:string
    };
  CustAddress:{
    fullName: string;
    phone: string;
    email:string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  } // Change the type based on your needs (e.g., number, boolean, etc.)
}

const loadCart = (): CartItem[] => {
  const cartData = sessionStorage.getItem("cartItem");
  return cartData ? JSON.parse(cartData) : [];
};
const saveCart = (cart: CartItem[]) => {
  sessionStorage.setItem("cartItem", JSON.stringify(cart));
};

const initialState: VariableState = {
  value: 0,
  items:loadCart(),
  Navbar:{
    title:"Home",
    href:"/"
  },
  CustAddress: {
    fullName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  }
};


const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    setVariable: (state) => {
      // Update the value
   const totalItem=loadCart().reduce((sum, item) => sum + item.qty, 0);
 console.log(totalItem)
   state.value=totalItem
    },
    resetVariable: (state) => {
      state.value = 0; // Reset the variable to its initial value
    },
    setGlobalAddress: (state,action:PayloadAction<VariableState["CustAddress"]>)=>{
      state.CustAddress=action.payload;
    },
    setNavbar:(state, action: PayloadAction<VariableState["Navbar"]>) => {
      state.Navbar = action.payload; // Update the value
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.key === action.payload.key);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push(action.payload);
      }
      saveCart(state.items);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.key === action.payload);
      if (item) {
        item.qty += 1;
        saveCart(state.items);
        
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.key === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } 
      else {
        state.items = state.items.filter((item) => item.key !== action.payload);
      }
      saveCart(state.items);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.key !== action.payload);
      saveCart(state.items);
    },
  },
});

export const {addToCart, increaseQuantity,decreaseQuantity,removeItem, setVariable, resetVariable,setGlobalAddress,setNavbar } = variableSlice.actions;
export default variableSlice.reducer;
