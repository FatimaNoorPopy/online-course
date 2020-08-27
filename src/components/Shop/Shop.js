import React, { useState } from 'react';
import fakeData from '../../fakeData/book';
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';


    const Shop = () => {

    const first12 = fakeData.slice(0,12);
    const [ courses , setCourses]  = useState(first12);

     const [cart , setCart] = useState([]);


    const handleAddCourse = (course) =>{
     const newCart =  [...cart , course];
     setCart(newCart);
    }
        return (
            <div className = "shop-container">
                    <div className="course-container">
    
    {
        courses.map(course => <Course
        handleAddCourse = {handleAddCourse}
             course = {course}>
                 
             </Course> )
    }

    </div>

    <div className="cart-container" >
<Cart cart = {cart}></Cart>
        
    </div>

</div>
    );
};

export default Shop;