import React, { Component } from 'react';
import moment from 'moment';

import avatar from 'theme/assets/lisa.png';

export default class Post extends Component {
    render() {
        return (
            <section>
                <img src = { avatar } />
                <a>Lisa Simpson</a>
                <time>{moment().format('MMMM D hh:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}
