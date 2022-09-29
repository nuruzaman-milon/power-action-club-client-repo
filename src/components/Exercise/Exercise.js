import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    console.log(props);
    const {img, name, timesRequired, desc, ratings} = props.exercise;
    return (
        <div className='exerciseCardContainer'>
            <div className='card'>
                <img src={img} alt=''></img>
                <p><strong>{name}</strong> </p>
                <p>{desc}</p>
                <p><strong>Ratings: </strong>{ratings}</p>
                <p><strong>Times Required:</strong> {timesRequired} sec</p>
            </div>
            <button className='card-btn'>
                Add To List
            </button>
        </div>
    );
};

export default Exercise;