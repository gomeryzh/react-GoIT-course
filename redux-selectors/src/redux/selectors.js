export const getSelectedUserId = state => state.users.selectedId;

export const getAllUsers = state => state.users.items;

export const getUserIds = state => {
    const allUsers = getAllUsers(state);
    return allUsers.map(({ id }) => id);
};

export const getAllPosts = state => state.posts;

export const getPostsWithSelectedAuthor = state => {
    const selectedId = getSelectedUserId(state);
    const allPosts = getAllPosts(state);
    return allPosts.filter(post => post.userId === selectedId);
};

export const getPostsWithAuthor = (state, ownProps) => {
    const allPosts = getAllPosts(state);
    return allPosts.filter(post => post.userId === ownProps.id);
};
