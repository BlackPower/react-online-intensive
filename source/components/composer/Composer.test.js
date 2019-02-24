import React from 'react';
import { mount } from 'enzyme';
import { Composer } from './';

const comment = 'Merry christmas!';
const avatar = '/avatar.png';
const currentUserFirstName = 'User Name';

const props = {
    _createPost: jest.fn(),
    avatar,
    currentUserFirstName,
};

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer { ...props } />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');

describe('composer component:', () => {
    test('should have 1 <section> element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have 1 <form> element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have 1 <textarea> element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have 1 <input> element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should have 1 <img> element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea value should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('textarea respont to state change properly', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });
        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea <change> event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);
    });

    test('should handle form <submit> event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });

    test('_createPost prop should be invoked once after form submission', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit class methods should be invoked once after form is submitted', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    test('_createPost prop should not be invoked after form submission with empty comment', () => {
        _submitCommentSpy.mockClear();
        props._createPost.mockClear();
        result.find('form').simulate('submit');

        expect(props._createPost).not.toHaveBeenCalled();
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
    });

    test('<img> should have correct value for attribute src', () => {
        expect(result.find('img').prop('src')).toEqual(avatar);
    });

    test('<textarea> should have correct value for attribute placeholder', () => {
        expect(result.find('textarea').prop('placeholder')).toEqual(`What's on your mind, ${ currentUserFirstName}?`);
    });

    test('should handle textarea <keyPress> event', () => {
        _submitCommentSpy.mockClear();
        result.setState({
            comment,
        });
        result.find('textarea').simulate('keyPress', {
            key: 'Enter',
        });

        expect(result.state()).toEqual(initialState);
        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
    });

    test('should not handle textarea <keyPress> event if key not Enter', () => {
        _submitOnEnterSpy.mockClear();
        _submitCommentSpy.mockClear();
        result.find('textarea').simulate('keyPress', {
            key: 'space',
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
        expect(_submitCommentSpy).not.toHaveBeenCalled();
    });
});
