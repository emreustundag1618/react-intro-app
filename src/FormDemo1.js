import React, { Component } from 'react';

export default class FormDemo1 extends Component {
    state = { userName: '', city: '' }
    onChangeHandler = (event) => {
        //this.setState({userName:event.target.value, city: event.target.value});
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h5>User Name:</h5>
                    <input name="userName" onChange={this.onChangeHandler} type="text"></input>
                    <h5>User Name is {this.state.userName}</h5>

                    <h5>City:</h5>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h5>City is {this.state.city}</h5>

                    <input type="submit" value="Save"></input>
                </form>

            </div>
        )
    }
}
