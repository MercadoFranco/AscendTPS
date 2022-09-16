import React from 'react';
import './index.css';

const TodoItem = ({ title = "", description = "", value, onClick }) => {
    const newOnClick = () => {
        console.log('Clickeaste');
        onClick();
    }
    return (
        <div className={`TodoItem ${ value ? 'CheckedItem' : ''}`} onClick={newOnClick}>
            <input 
                type="checkbox" 
                id={title}
                checked={value}
                className="Checkbox"
                readOnly
            />
            <div className='TextContainer'>
                <p className='TodoItemTitle'>
                    {title}
                </p>
                <p className={`TodoItemDescription ${ value ? 'DescriptionChecked' : ''}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default TodoItem;