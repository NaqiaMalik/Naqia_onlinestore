import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerData, createNewCustomer, updateCustomerData, deleteCustomer } from "../redux/Slices/FormSlices";
import moment from "moment";
 
function Home() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [full_name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const [dialogBox, setDialogBox] = useState("");
    const customerData = useSelector((state)=> {   
        JSON.stringify( state.Form?.data)
        return state.Form?.data;
    });

    useEffect(() => {
        // Fetch customer data when the component mounts
        dispatch(fetchCustomerData());
    }, [dispatch]);  

    const displayhandler = ()=>{
        dispatch(fetchCustomerData())
        setDisplay(true)
    }

    const createhandler = (event) => {
        event.preventDefault();
        const newCustomer = { full_name, email };
        dispatch(createNewCustomer(newCustomer));
        setDialogBox("Customer added successfully!")

    };
    const updatehandler = (event)=>{
        event.preventDefault();
        const updateCustomer = { full_name, email };
        setDialogBox("Customer updated successfully!")
        dispatch(updateCustomerData(updateCustomer))
    }
    
    const deletehandler = (event)=>{
        event.preventDefault();
        const deletecustomer = { full_name, email };
        setDialogBox("Customer deleted successfully!")
        dispatch(deleteCustomer(deletecustomer))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" >
                <form className="">
                    <h2 className="text-2xl font-bold mb-4">Simple Form</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="input1">
                          Name
                        </label>
                        <input
                            type="text"
                            id="input1"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            name="full_name" onChange={(event) => setName(event.target.value)}
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="input2">
                        Email
                        </label>
                        <input
                            type="text"
                            id="input2"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            name="email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                  

                    <div className="flex space-x-4">
                        <button
                            onClick= {displayhandler}
                            type="button"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Show
                        </button>
                        <button
                            onClick={createhandler}
                            type="button"
                            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Add
                        </button>
                        <button
                            onClick={updatehandler}
                            type="button"
                            className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                        >
                          Update
                        </button>
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={deletehandler}
                        >
                          Delete
                        </button>
                    </div>
                </form>
                <div className="text-2xl mt-12 p-4 border-2 border-red-300 ">
                    <p>{dialogBox} </p>
                  
                    <ol>
                        { display && customerData?.map((item) => (
                            <li key={item.id}>
                        Name: {item.fullName}
                                <br />
                        Email: {item.email}
                                <br />
                        Date: {item.createDt}
                            </li>
                        ))}

                    </ol> 
                </div>
                
            </div>
           
        </div>
    );
}

export default Home;
