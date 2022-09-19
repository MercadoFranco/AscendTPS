import React from 'react';
import './index.css';

const TodoItem = ({ title = "", description = "", value, onClick }) => {
    const newOnClick = () => {
        console.log('Clickeaste');
        onClick();
    }

    if (value) {
        return (
            <div className="TodoItem CheckedItem" onClick={newOnClick}>
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
                    <p className="TodoItemDescription DescriptionChecked">
                        {description}
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="TodoItem" onClick={newOnClick}>
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
                    <p className="TodoItemDescription">
                        {description}
                    </p>
                </div>
            </div>
        )
    }

}

export default TodoItem;