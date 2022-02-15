import React, { useEffect } from 'react';

// Components
import Product from './shared/Product';

// redux
import { useSelector,useDispatch } from 'react-redux';
import {fetchApi} from "../redux/products/productAction"
// Style
import styles from "./Store.module.css";

const Store = () => {
    const dispatch = useDispatch()
    const ProductsState = useSelector(state=>state.productsState)

    useEffect(()=>{
     if (!ProductsState.length)  dispatch(fetchApi())
    },[])


    return (
        <div className={styles.container} >
            {
               ProductsState.loading ?
                    <h1>Loading ...</h1> :
                    ProductsState.error ?
                        <p>{ProductsState.error}</p> :
                        ProductsState.products.map(product=><Product
                            key={product.id}
                            productData={product}
                          />      
                        )
                
            }
        </div>
    );
};

export default Store;