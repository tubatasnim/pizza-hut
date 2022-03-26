import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Choose.css';
const Choose = (props) => {
    const { img, name } = props.choose;
    return (
        <div className="choose">
            <img src={img} alt="" />

            <h2>{name}</h2>

            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

        </div>

    );
};

export default Choose;
