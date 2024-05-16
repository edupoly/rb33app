import React, { useState } from 'react'
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../service/productsApi'

function Products() {
    // var {isLoading,data}=useGetAllProductsQuery(); 
    // console.log("isLoading::",isLoading)
    // console.log("data::",data)
    var [isLoading,setIsLoading] = useState(true);
    var [data,setData ] = useState({})
    var [getAllProdFn] = useLazyGetAllProductsQuery();
    function getProducts(){
        getAllProdFn().then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
    }
  return (
    <div>
        <h1>Products</h1>
        <button onClick={()=>{getProducts()}}>Load Our Products</button>
        {isLoading && (<button class="btn btn-primary" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
        </button>)}
                <ul>
                    {isLoading===false && (

                        data.map(function(product){
                            return <li>{product.title}</li>
                        })
                    )}
                </ul>
    </div>
  )
}

export default Products