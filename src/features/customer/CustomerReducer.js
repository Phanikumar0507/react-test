const initialState={
    customerList:[]

}

export const customerReducer = (state=initialState,action) =>{
    switch(action.type){
        case "CUSTOMER_DATA":
            return {
                ...state,
                customerList : action.payload
            }
            default:
                return state;
            
    }
}