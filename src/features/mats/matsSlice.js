import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    material: "Madera",
    cantidad: 20,
    poderCal: 4.4,
    estado: false,
  },
  {
    id: 2,
    material: "Carton",
    cantidad: 100,
    poderCal: 10,
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
    editMat: (state, action) => {
      const { id, material, cantidad, poderCal} = action.payload
      const foundMat = state.find(mat => mat.id === id)
      if (foundMat){
        foundMat.material = material
        foundMat.cantidad = cantidad
        foundMat.poderCal = poderCal
      }
    },
    deleteMat: (state, action) => {
      const matFound = state.find(mat => mat.id === action.payload)
      if (matFound){
        state.splice(state.indexOf(matFound),1)
      }
    },
  },
});

export const { addMat, deleteMat, editMat } = matsSlice.actions;
export default matsSlice.reducer;
