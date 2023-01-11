import React from 'react'
import shorts from '../Images/shorts.jfif'

const ProductScreen2 = () => {
  return (
    <>
    <div className='details_screen'>Product Details Screen</div>
    <div className='main_product'>
        <div className='product_left_side'>
            <img src={shorts}/>

        </div>
        <div className='product_right_side'>
            <p>Price: 40$</p>
            <p>Rating: 3.5</p>
            <p>Description: killer shots for women ,it,s fashion now a days</p>
        </div>
    </div>
    <div className='add_to_cart'>
    <button >Add To Cart</button>
    </div>
    </>
  )
}

export default ProductScreen2