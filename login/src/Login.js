import * as React from 'react';
import { printHello } from 'alex-hello-world-pkg';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        printHello();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" ref="username" id="username" name="username"/>
                <br/>
                <br/>
                <label>Password: </label>
                <input type="password" ref="password" id="password" name="password"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}