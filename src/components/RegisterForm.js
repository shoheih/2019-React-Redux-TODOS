import React from 'react';

class RegisterForm extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment" onClick={this.onInputClick}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Regist TODO</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterForm;