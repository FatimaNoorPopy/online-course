import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, img, price} = props.course;
    return (
        <div className ="course">

            <div>
<img src={img} alt=""/>
            </div>

            <div className =" name">
            
    <h1>{name}</h1>
    <h4>Taka: {price}</h4>
    <br/>
    <button  
    onClick = {()=> props.handleAddCourse(props.course)}
    className ="btn btn-success">Enroll Now</button>
            </div>

        </div>
    );
};

export default Course;