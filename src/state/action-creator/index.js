export const postCustomers = (customer) =>
{
    return (dispatch) =>
    {
        dispatch({
            type: "post",
            payload: customer

                
        })
    }
}

export const getCustomers = (customer) =>
{
    return (dispatch) =>
    {
        dispatch({
            type: "get",
            payload: customer
    
                    
        })
    }
}
