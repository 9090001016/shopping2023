import React from 'react'
import shirts from '../Images/shirts.jfif';

const ProductScreen = () => {
  return (
    <>
    <div className='details_screen'>Product Details Screen</div>
    <div className='main_product'>
        <div className='product_left_side'>
            <img src={shirts}/>

        </div>
        <div className='product_right_side'>
            <p>Price: 50$</p>
            <p>Rating: 4.5</p>
            <p>Description: Van Heusen shirt</p>
        </div>
    </div>
    <div className='add_to_cart'>
    <button >Add To Cart</button>
    </div>
    </>
  )
}

export default ProductScreen