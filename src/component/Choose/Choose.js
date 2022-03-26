import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Choose.css';
const Choose = (props) => {
    const { img, name } = props.choose;
    return (
        <div className="choose-container">
            <div className="choose">
                <img src={img} alt="" />

                <h2>{name}</h2>
            </div>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Choose;
