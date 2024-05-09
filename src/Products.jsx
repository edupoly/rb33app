import React from 'react'
import { connect } from 'react-redux'

function Products(props) {
  console.log("Products rendered")
  return (
    <div className='border border-2 border-warning m-2 p-2' style={{height:"200px",overflow:'scroll'}}>
        <h1>Products</h1>
        <ul className='d-flex flex-wrap'>
            {
                props.products.map((p)=>{
                    return <li className='w-25 p-5 d-flex  flex-column justify-content-between'>
                                <p>{p.title.slice(0,20)}</p>
                                <img src={p.image} className='w-100' alt="" />
                                <h3>{p.price}</h3>
                                <button className='btn btn-success' onClick={()=>{props.addToCart(p)}}> Add To Cart</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default connect(function(state){
  return state.productsReducer
},function(dispatch){
  return {
    addToCart:(product)=>{
      dispatch({type:"ADDTOCART",payload:product})
    }
  }
})(Products)