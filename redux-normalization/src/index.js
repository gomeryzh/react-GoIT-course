// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './components/App/App';
// import store from './redux/store';
// import './index.css';

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root'),
// );

import { normalize, schema } from 'normalizr';
// import basicPosts from './posts.json';

// const authorSchema = new schema.Entity('authors');
// const postSchema = new schema.Entity('posts', {
//     author: authorSchema
// });

// const normalizedPosts = normalize(basicPosts, [postSchema]);
// console.log(normalizedPosts);

const blogPosts = [
    {
        id: 'post1',
        author: { username: 'user1', name: 'User 1' },
        body: '......',
        comments: [
            {
                id: 'comment1',
                author: { username: 'user2', name: 'User 2' },
                comment: '.....'
            },
            {
                id: 'comment2',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....'
            }
        ]
    },
    {
        id: 'post2',
        author: { username: 'user2', name: 'User 2' },
        body: '......',
        comments: [
            {
                id: 'comment3',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....'
            },
            {
                id: 'comment4',
                author: { username: 'user1', name: 'User 1' },
                comment: '.....'
            },
            {
                id: 'comment5',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....'
            }
        ]
    }
    // and repeat many times
]


const authorSchema = new schema.Entity('authors', {}, { idAttribute: 'username' });
const commentsSchema = new schema.Entity('comments');

const postsSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentsSchema]
});

const newPosts = normalize(blogPosts, [postsSchema]);
console.log(newPosts);
