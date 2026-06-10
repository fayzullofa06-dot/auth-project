 import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const Api='http://localhost:3000/transactions'
 const initialState={
items: [],
  loading:false,
  error:null
 }
export const getData=createAsyncThunk('transaction/getData',
   async (_,{rejectWithValue})=>{
    try {
      const response= await axios.get(Api)
     return response.data
    } catch (error) {
  return rejectWithValue(error.message); 
    }
   }
)
export const deleteData=createAsyncThunk('transaction/deleteData',async(id,{rejectWithValue})=>{
  try {
     await axios.delete(`${Api}/${id}`)
    return id
  } catch (error) {
   return  rejectWithValue(error.message)
  }
})
export const addData=createAsyncThunk('transaction/addData',async(newTransaction,{rejectWithValue})=>{
  try {
    const re=  await axios.post(Api,newTransaction)
    return re.data
  } catch (error) {
    rejectWithValue(error.message)
    
  }
})

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
    .addCase(deleteData.pending,(state)=>{
      state.loading=true
    })
    .addCase(deleteData.fulfilled,(state,action)=>{
      state.items=state.items.filter(item=>item.id!==action.payload)
      state.loading=false
    })
    .addCase(deleteData.rejected,(state,action)=>{
      state.loading=false
      state.error=action.payload
    })
    .addCase(addData.pending,(state)=>{
      state.loading=true
    })
    .addCase(addData.fulfilled,(state,action)=>{
      state.loading=false
      state.items.push(action.payload)
    })
    .addCase(addData.rejected,(state,action)=>{
      state.loading=false
      state.error = action.payload;

    })
  }

})

 export default transactionSlice.reducer;