const addItem=(product)=>{
    return{
        type:"ADD_ITEM",
        payload:product
    }
}

const removeItem=(product)=>{
    return{
        type:"REMOVE_ITEM",
        payload:product
    }
}

const increaseItem=(product)=>{
    return{
        type:"INCREASE_ITEM",
        payload:product
    }
}

const deacreseItem=(product)=>{
    return{
        type:"DEACREASE_ITEM",
        payload:product
    }
}

const checkOut=()=>{
    return{
        type:"CHECKOUT"
    }
}

const clear=()=>{
    return{
        type:"CLEAR"
    }
}

export {clear,checkOut,deacreseItem,increaseItem,addItem,removeItem}