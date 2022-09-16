import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const TodoContainer = () => {
    const [todoItems, setTodoItems] = useState([
        { title: "Todo 1", description: "Lorem ipsum dolor sit amet", value: false },
        { title: "Todo 2", description: "Lorem ipsum dolor sit amet", value: false },
        { title: "Todo 3", description: "Lorem ipsum dolor sit amet", value: false },
        { title: "Todo 4", description: "Lorem ipsum dolor sit amet", value: true }
    ])

    const onClick = index => {
        console.log('Clickeando el ', index)
        let newState = [...todoItems];
        newState[index].value = !newState[index].value;
        console.log(newState)
        setTodoItems(newState)
    }
    return (
        <div className='TodoContainer'>
            <h1 className='Titulo'>LISTA DE COSAS POR HACER</h1>
            {
                todoItems.map((item, index) => (
                    <TodoItem 
                        title={item.title}
                        description={item.description} 
                        value={item.value} 
                        onClick={() => onClick(index)} 
                    />
                ))
            }
        </div>
    );
}

export default TodoContainer;