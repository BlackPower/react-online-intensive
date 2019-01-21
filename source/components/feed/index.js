import React, { Component } from 'react';

import Composer from 'components/composer';
import Post from 'components/post';

export default class Feed extends Component {
    render() {
        return (
            <section>
                <Composer />
                <Post />
            </section>
        );
    }
}
