import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ExerciseCart from '../ExerciseCart/ExerciseCart';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [userCart, setUserCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, []);

    const handleAddToList = (exercise) =>{
        // console.log(exercise);
        const newCart = [...userCart, exercise];
        setUserCart(newCart);
    }

    return (
        <div className='Exercise-container'>
            <div className='cart-container'>
    
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleAddToList={handleAddToList}></Exercise>)
                }
            </div>

            <div className='user-cart-container'>
                <div className='position'>
                    <ExerciseCart userCart={userCart}></ExerciseCart>
                </div>
            </div>

            
        </div>
    );
};

export default Exercises;