import React from 'react';
import axios from 'axios';

class Form extends React.Component {

	state = {username: ''};
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`)
        this.props.onSubmit(response.data);
        this.setState({ username: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={event => this.setState( {username: event.target.value })} placeholder="@username" required/>

                <button>Add new card</button>
            </form>
        );
    };
};

export default Form;
