// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import StatusBar from 'components/StatusBar';
import Login from 'components/Login';

import Catcher from 'components/Catcher';
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import { Provider } from 'components/HOC/withProfile';

import avatar from 'theme/assets/lisa.png';

const options = {
    avatar,
    currentUserFirstName: 'Сергей',
    currentUserLastName:  'Курильчик',
};

@hot(module)
export default class App extends Component {
    state = {
        isLogedIn: false,
    }

    _login = () => {
        this.setState({
            isLogedIn: true,
        });
    }

    _logout = () => {
        this.setState({
            isLogedIn: false,
        });
    }

    render() {
        const { isLogedIn } = this.state;

        if (isLogedIn) {
            return (
                <Catcher>
                    <Provider value = { options }>
                        <StatusBar _logout = { this._logout }/>
                        <Switch>
                            <Route
                                component = { Feed }
                                path = '/feed'
                            />
                            <Route
                                component = { Profile }
                                path = '/profile'
                            />
                            <Redirect to = '/feed' />
                        </Switch>
                    </Provider>
                </Catcher>
            );
        }

        return <Login _login = { this._login }/>;
    }
}
