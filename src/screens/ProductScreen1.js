import React from 'react'
import jeans from '../Images/jeans.jfif';

const ProductScreen1 = () => {
  return (
    <>
    <div className='details_screen'>Product Details Screen</div>
    <div className='main_product'>
        <div className='product_left_side'>
            <img src={jeans}/>

        </div>
        <div className='product_right_side'>
            <p>Price: 70$</p>
            <p>Rating: 4.2</p>
            <p>Description: Lee cooper flexible jeans for men</p>
        </div>
    </div>
    <div className='add_to_cart'>
    <button >Add To Cart</button>
    </div>
    </>
  )
}

export default ProductScreen1