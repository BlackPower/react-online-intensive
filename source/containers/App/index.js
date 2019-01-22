// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from 'components/feed';

@hot(module)
export default class App extends Component {
    render() {
        return (
            <Feed />
        );
    }
}
