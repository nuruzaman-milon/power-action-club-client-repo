import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, []);

    return (
        <div className='Exercise-container'>
            <div className='cart-container'>
    
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
                }
            </div>

            <div className='user-cart-container'>
                <div className='position'>
                <div className='profile'>
                    <img src="https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png" alt="" />
                    <p>Md.Nuruzaman Milon</p>
                </div>
                <div className='user-description'>
                    <div>
                        <p>75kg</p>
                        <p>Weight</p>
                    </div>

                    <div>
                        <p>5.8</p>
                        <p>Height</p>
                    </div>

                    <div>
                        <p>27yrs</p>
                        <p>Age</p>
                    </div>
                </div>

                <div>
                    <p>Add A Break</p>
                    <div className='break-time'>
                        <p>10<small>s</small></p>
                        <p>20<small>s</small></p>
                        <p>30<small>s</small></p>
                        <p>40<small>s</small></p>
                    </div>
                </div>

                <div>
                    <p>Exercise Details</p>
                    <div className='exercise-details'>
                        <p>Exercise time</p>
                        <p>0 <small>sec</small></p>
                    </div>
                <div className='exercise-details'>
                    <p>Break time</p>
                    <p>0 <small>sec</small></p>
                </div>
                <button className='activity-btn'>Activity Completed</button>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default Exercises;