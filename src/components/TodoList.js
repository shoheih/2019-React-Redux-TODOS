import React from 'react';

const TodoList = props => {
    const todos = props.todos.map(todo => {
        return (
            <div className="item">
                <input type="text" key={todo.id} />
            </div>
        );
    });

    return <div className="ui list">{todos}</div>;
}

export default TodoList;