const getAuthorsIds = state => state.authors.authorIds;

export const getActiveAuthorId = state => state.authors.authorSelectedId;

const getauthorEntities = state => state.entities.authors;

export const getAllAuthors = state => {
    const ids = getAuthorsIds(state);
    const entities = getauthorEntities(state);

    const res = ids.map(id => entities[id]);
    return res;
};

const getAllPostsEntities = state => state.entities.posts;

const getAllPostsIds = state => state.posts;

export const getAuthorPosts = state => {
    const activeAuthorId = getActiveAuthorId(state);
    const postEntities = getAllPostsEntities(state);
    const postsIds = getAllPostsIds(state);

    const activeAuthorPosts = postsIds.reduce((acc, postId) => {
        const post = postEntities[postId];
        if (post.author === activeAuthorId) acc.push(post);
        return acc;
    }, []);

    // const activeAuthorPosts = [];

    // postsIds.forEach(postId => {
    //     const post = postEntities[postId];

    //     if (post.author === activeAuthorId) {
    //         activeAuthorPosts.push(post);
    //     }
    // });

    return activeAuthorPosts;
};
