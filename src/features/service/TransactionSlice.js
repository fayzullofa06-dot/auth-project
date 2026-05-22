 import { createSlice } from "@reduxjs/toolkit";


 const InitialStates={
    items: [
    { id: 1, title: 'Supermarket', category: 'Ovqat', amount: -45000, date: '2026-05-15' },
    { id: 2, title: 'Ish haqi', category: 'Daromad', amount: 5000000, date: '2026-05-14' },
    { id: 3, title: 'Transport', category: 'Transport', amount: -25000, date: '2026-05-14' },
    { id: 4, title: 'Kafe', category: 'Ovqat', amount: -60000, date: '2026-05-13' },
    { id: 5, title: 'Kommunal', category: 'To\'lovlar', amount: -350000, date: '2026-05-12' },
    // Extra mock items behind the scenes to make the exact totals from your UI image
    { id: 6, title: 'Bozorlik', category: 'Ovqat', amount: -745000, date: '2026-05-10' },
    { id: 7, title: 'Yandex Taxi', category: 'Transport', amount: -395000, date: '2026-05-09' },
    { id: 8, title: 'Internet', category: 'To\'lovlar', amount: -300000, date: '2026-05-08' },
    { id: 9, title: 'Steam Game', category: 'O\'yin-kulgi', amount: -320000, date: '2026-05-05' },
  ]
 }
 const transactionSlice=createSlice({
    name:'transactions',
    InitialStates,
    reducers:{

    }
 })


 export default transactionSlice.reducer;