import React from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

import Styles from './styles.m.css';
import { withProfile } from 'components/HOC/withProfile';

const Postman = (props) => {

    const _animatePostmanEntering = (postman) => {
        fromTo(postman, 2, { x: 280 }, { x: 0 });
    };

    const _animatePostmanEntered = (postman) => {
        fromTo(postman, 2, { x: 0 }, { x: 280 });
    };

    return (
        <Transition
            appear
            in
            timeout = { 5000 }
            onEntered = { _animatePostmanEntered }
            onEntering = { _animatePostmanEntering }>
            <section className = { Styles.postman }>
                <img src = { props.avatar } />
                <span>Welcome online, {props.currentUserFirstName}</span>
            </section>
        </Transition>
    );
};

export default withProfile(Postman);
