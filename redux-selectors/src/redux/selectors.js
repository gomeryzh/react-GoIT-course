import { createSelector } from 'reselect';

export const getSelectedUserId = state => state.users.selectedId;

export const getAllUsers = state => state.users.items;

export const getUserIds = createSelector(
    [getAllUsers],
    allUsers => allUsers.map(({ id }) => id),
);

export const getAllPosts = state => state.posts;

export const getPostsWithSelectedAuthor = createSelector(
    [getAllPosts, getSelectedUserId],
    (posts, selectedUserId) =>
        posts.filter(post => post.userId === selectedUserId),
);

export const makeGetPostsWithAuthor = () =>
    createSelector(
        [getAllPosts, (state, ownProps) => ownProps.id],
        (allPosts, id) => allPosts.filter(post => post.userId === id),
    );

export const getPostsWithAuthor = createSelector(
    [getAllPosts, (state, ownProps) => ownProps.id],
    (allPosts, id) => allPosts.filter(post => post.userId === id),
);
