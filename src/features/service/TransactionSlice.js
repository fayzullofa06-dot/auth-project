 import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 const initialState={
items: [
  { id: 1, title: 'Supermarket', category: 'Ovqat', amount: -45000, date: '2026-05-15' },
  { id: 2, title: 'Ish haqi', category: 'Daromad', amount: 5000000, date: '2026-05-14' },
  { id: 3, title: 'Transport', category: 'Transport', amount: -25000, date: '2026-05-14' },
  { id: 4, title: 'Kafe', category: 'Ovqat', amount: -60000, date: '2026-05-13' },
  { id: 5, title: 'Kommunal', category: "To'lovlar", amount: -350000, date: '2026-05-12' },
  { id: 6, title: 'Benzin', category: 'Transport', amount: -120000, date: '2026-05-11' },
  { id: 7, title: 'Restoran', category: 'Ovqat', amount: -180000, date: '2026-05-10' },
  { id: 8, title: 'Internet', category: "To'lovlar", amount: -100000, date: '2026-05-09' },
  { id: 9, title: 'Kino', category: "O'yin-kulgi", amount: -45000, date: '2026-05-08' },
  { id: 10, title: 'Freelance', category: 'Daromad', amount: 800000, date: '2026-05-07' },
],
  loading:false,
  error:null
 }
export const getData=createAsyncThunk('transaction/getData',
   async (API,{rejectWithValue})=>{
    try {
      const response= await axios.get(API)
     return response.data
    } catch (error) {
  return rejectWithValue(error.message); 
    }
   }
)
const transactionSlice=createSlice({
  name:'transactions',
   initialState,
   reducers:{},
   
  extraReducers:(builder)=>{
    builder
    .addCase(getData.pending,(state)=>{
        state.loading=true
    })
    .addCase(getData.fulfilled,(state,action)=>{
        state.loading=false
        state.items=action.payload

    })
    .addCase(getData.rejected,(state,action)=>{
        state.loading=false
      state.error=action.payload
    })
  }

})

 export default transactionSlice.reducer;