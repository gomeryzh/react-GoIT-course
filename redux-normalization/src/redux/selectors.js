const getAuthorsIds = state => state.authors.authorIds;

export const getActiveAuthorId = state => state.authors.authorSelectedId;

const getauthorEntities = state => state.entities.authors;

export const getAllAuthors = state => {
    const ids = getAuthorsIds(state);
    const entities = getauthorEntities(state);

    const res = ids.map(id => entities[id]);
    return res;
};

const getAllPostsEntities = state => this.state.entities.posts;
