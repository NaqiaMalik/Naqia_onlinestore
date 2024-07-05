import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const baseURL = "http://localhost:6090/customers"

export const fetchCustomerData = createAsyncThunk("data/fetchCustomerData" , async() =>{
    try {
        const response =await axios.get(`${baseURL}`)
        console.log("fetch customer log", response)
        return response.data
    } catch (error) {
        console.log("ERROR", error);
    }
})

export const createNewCustomer = createAsyncThunk("data/createNewCustomer" , async(customerArray ) =>{
    console.log("Customer being sent to API:", customerArray);  
    try {
        const response =await axios.post(`${baseURL}/customers` , customerArray)
        console.log("create customer log", response)
        return response.data; // Return an object with a 'data' property
    }
    catch (error) {
        console.log("ERROR", error);
        throw error; // Rethrow the error so that it can be caught by the error handler
    }
    
})

export const updateCustomerData = createAsyncThunk("data/updateCustomerData" , async ({ full_name, email }, { getState, rejectWithValue }) => {
    try {
        // const response = await axios.get(`${baseURL}`);
        //   const customers = response.data.data;
        const state = getState();
        const customers = state.Form.data;
        const customer = customers.find((customer) => customer.email === email);

        if (!customer) {
            throw new Error("Customer not found");
        }
        const customerId = customer.id;
        const updateResponse = await axios.put(`${baseURL}/${customerId}`, {
            full_name,
            email,
        });
        console.log("Update response:", updateResponse);
        return updateResponse.data;

    }
    catch (error) {
        console.error(error);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
})

export const deleteCustomer = createAsyncThunk("data/deleteCustomerData" ,  async ({ full_name, email }, { getState, rejectWithValue }) => {
    try {
        const state = getState();
        const customers = state.Form.data;
        const customer = customers.find((customer) => customer.email === email);

        if (!customer) {
            throw new Error("Customer not found");
        }
        const customerId = customer.id;
        const deleteCustomer = await axios.delete(`${baseURL}/${customerId}`);
        console.log("Delete Customer response:", deleteCustomer);
        return deleteCustomer.data;

    }
    catch (error) {
        console.error(error);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
})

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
            })
            .addCase(createNewCustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [...state.data, action.payload]; // Append new customer data to existing array
            })
            .addCase(createNewCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateCustomerData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCustomerData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(updateCustomerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteCustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});


export default formSlice.reducer
