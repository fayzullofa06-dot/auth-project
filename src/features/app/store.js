import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../service/TransactionSlice.js";
export const store=configureStore({
    reducer:{
        transactions:transactionReducer
    }
})