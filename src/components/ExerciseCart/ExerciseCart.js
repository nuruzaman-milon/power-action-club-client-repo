import React, { useState } from 'react';

const ExerciseCart = (props) => {
    const {userCart} = props;

    let timesRequired = 0;
    for (const item of userCart) {
        timesRequired = timesRequired + item.timesRequired;
    }

    const [time, setTime] = useState(0);

    const breakTime = (time) =>{
        setTime(time);
        localStorage.setItem('time', JSON.stringify(time));
    }
    const items = JSON.parse(localStorage.getItem('time'));
    
    // localStorage.setItem('time', JSON.stringify(time));

    return (
        <div>
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
                        <button onClick={()=>breakTime(10)}>10<small>s</small></button>
                        <button onClick={()=>breakTime(20)}>20<small>s</small></button>
                        <button onClick={()=>breakTime(30)}>30<small>s</small></button>
                        <button onClick={()=>breakTime(40)}>40<small>s</small></button>
                    </div>
                </div>

                <div>
                    <p>Exercise Details</p>
                    <div className='exercise-details'>
                        <p>Exercise time</p>
                        <p>{timesRequired} <small>sec</small></p>
                    </div>
                <div className='exercise-details'>
                    <p>Break time</p>
                    <p>{items}<small>sec</small></p>
                </div>
                <button className='activity-btn'>Activity Completed</button>
                </div>
        </div>
    );
};

export default ExerciseCart;