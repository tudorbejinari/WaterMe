import React from 'react';
import './style.css';
import DateUpdate from '../DateUpdate/DateUpdate';

function PlantCard(props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.photo} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li className='date'>
            <strong>Water after:</strong> {props.water_after}
            <strong> days</strong>
          </li>
          <div>
            <DateUpdate />
          </div>
          <li>
            <button
              onClick={() => props.removePlant(props.id)}
              className='remove'
            >
              Delete Plant
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlantCard;
