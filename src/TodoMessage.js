import React from 'react';
import './TodoMessage.css';

function TodoMessage(props) {
    return (
        <h1 className='message'> { props.text } </h1>
    );
}

export { TodoMessage };
