import React from 'react';
import RegisterForm from './RegisterForm';
import TodoList from './TodoList';

class App extends React.Component {
    state = {
        todos: [
            { id: 1, text: 'Good!' },
            { id: 2, text: 'Bad...' },
            { id: 3, text: 'So Good!!!' },
            { id: 4, text: 'Umm... OK!' }
        ]
    }

    onRegistSubmit = term => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px' }}>
                <RegisterForm onSubmit={this.onRegistSubmit} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;