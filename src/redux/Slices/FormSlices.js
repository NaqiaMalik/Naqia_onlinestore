import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const baseURL = "http://localhost:6090"

export const fetchCustomerData = createAsyncThunk("data/fetchCustomerData" , async() =>{
    try {
        const response =await axios.get(`${baseURL}/customers`)
        console.log("create customer log", response)
        return response.data
    } catch (error) {
        console.log("ERROR", error);
    }
})

export const createNewCustomer = createAsyncThunk("data/createNewCustomer" , async(customerArray ) =>{
    try {
        const response =await axios.post(`${baseURL}/customers` , customerArray)
        console.log("create customer log", response)
        return response.data
    } catch (error) {
        console.log("ERROR", error);
    }
})

export const updateCustomer = createAsyncThunk("data/updateCustomerData" , async({fullName, email, address }, {dispatch}) =>{
    try {
    
        const response =await axios.put(`${baseURL}/customers/id` , {fullName, email, address })
        if (response.data && response.data.success) {
            dispatch(fetchCustomerData({ fullName: response.data.data[1].fullName, email:response.data.data[2].email}));
        }
        console.log("create customer log", response)
        return response.data
    } catch (error) {
        console.log("ERROR", error);
    
    }  
})

export const deleteCustomer = createAsyncThunk("data/updateCustomerData" , async({fullName, email, address }, {dispatch}) =>{
    // try {
  
    //     const response =await axios.put(`${baseURL}/customers/id` , {fullName, email, address })
    //     if (response.data && response.data.success) {
    //         dispatch(fetchCustomerData({ fullName: response.data.data[1].fullName, email:response.data.data[2].email}));
    //     }
    //     console.log("create customer log", response)
    //     return response.data
    // } catch (error) {
    //     console.log("ERROR", error);
  
    // }  
})


// Create a slice for form data
const formSlice = createSlice({
    name: "Form",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
    // Define reducers if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomerData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCustomerData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;

            })
            .addCase(fetchCustomerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});


export default formSlice.reducer
