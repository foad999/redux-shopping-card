const initialState={
    products:[],
    error:"",
    loading:false
}

const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                laoding:true
            }
        case "SUCCESS_DATA":
            return{
                products:action.payload,
                laoding:false,
            }
        case "FAILED_DATA":
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export default productReducer