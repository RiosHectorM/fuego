import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    material: "Madera",
    cantidad: 0,
    poderCal: 0,
    estado: false,
  },
  {
    id: 2,
    material: "Carton",
    cantidad: 0,
    poderCal: 0,
    estado: false,
  },
];

export const matsSlice = createSlice({
  name: "mats",
  initialState,
  reducers: {
    addMat: (state, action) => {
      state.push(action.payload);
    },
    deleteMat: (state, action) => {
      const matFound = state.find(mat => mat.id === action.payload)
      if (matFound){
        state.splice(state.indexOf(matFound),1)
      }
    },
  },
});

export const { addMat, deleteMat } = matsSlice.actions;
export default matsSlice.reducer;
