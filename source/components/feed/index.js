import React, { Component } from 'react';

import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            {id: '123', comment: 'Hi there!', created: 1526825076849 },
            {id: '234', comment: 'Hi, where are you?', created: 1526825076850 },
        ],
        isSpinning: true,
    }

    render() {
        const { posts, isSpinning } = this.state;
        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <StatusBar />
                <Composer />
                { postsJSX }
            </section>
        );
    }
}
