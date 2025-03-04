import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VariableState {
  value: number;
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
const initialState: VariableState = {
  value: 0,
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
    setVariable: (state, action: PayloadAction<number>) => {
      state.value = action.payload; // Update the value
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
  },
});

export const { setVariable, resetVariable,setGlobalAddress,setNavbar } = variableSlice.actions;
export default variableSlice.reducer;
