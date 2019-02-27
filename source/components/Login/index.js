// Core
import React, { Component } from 'react';
import Styles from './styles.m.css';
import { func } from 'prop-types';

export default class Login extends Component {
    static propTypes = {
        _login: func.isRequired,
    }

    render() {
        const { _login } = this.props;

        return (
            <div className = { Styles.login }>
                <button onClick = { _login }>Login</button>
            </div>
        );
    }
}
