import axios from "axios"

const getData = ()=>{
    return {type:"GET_DATA"}
}

const successData  = (products)=>{
    return{
        type:"SUCCESS_DATA",
        payload:products
    }
}

const failedData  = (error)=>{
    return{
        type:"FAILED_DATA",
        payload:error
    }
}

export const fetchApi = ()=>{
    return (dispatch) =>{
        dispatch(getData());
        axios.get("https://fakestoreapi.com/products")
            .then(res=>{ 
                const products = res.data
                dispatch(successData(products))
            })
            .catch(err=>{
                const error = err.message
                dispatch(failedData(error))
            })
    }
}