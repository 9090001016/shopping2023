import React from 'react'
import Navbar from './Navbar'
import '../styles/main.css'
import Carousel from './Carousel'
import shirts from '../Images/shirts.jfif';
import jeans from '../Images/jeans.jfif';
import shorts from '../Images/shorts.jfif'
import { NavLink } from 'react-router-dom';



const HomeScreen = () => {
    const array1 = [
        { image: shirts, id: 1, price: "50$", ratings: 4.5, desc: "Van heusen shirt" },
        { image: jeans, id: 2, price: "50$", ratings: 4.5, desc: "Van heusen shirt" },
        { image: shorts, id: 3, price: "50$", ratings: 4.5, desc: "Van heusen shirt" }
    ]

    return (
        <>
            <Carousel />
            <h3 className='heading'>
                Products
            </h3>

            {/* {array1.map((curElem, index) => {
                    <div className='grid grid_three_columns'>
                        <div className='card'>
                            <img src={curElem.image} />
                            <p>
                                {curElem.desc}
                            </p>
                        </div>
                    </div>
                })} */}
            <div className='grid grid_three_columns'>
                <NavLink to="/productdetails">
                    <div className='card'>
                        <img src={shirts} />
                        <p>Shirts</p>
                    </div>
                </NavLink>
                <NavLink to="/productdetails1">
                    <div className='card'>
                        <img src={jeans} />
                        <p>
                            Jeans
                        </p>
                    </div>
                </NavLink>
                <NavLink to="/productdetail2">
                    <div className='card'>
                        <img src={shorts} />
                        <p>Shorts</p>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default HomeScreen