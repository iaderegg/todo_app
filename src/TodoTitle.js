import React from 'react';
import './TodoTitle.css';

function TodoTitle(props) {
    return (
        <h1 className='title'> { props.text } </h1>
    );
}

export { TodoTitle };
