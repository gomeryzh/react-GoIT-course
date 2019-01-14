import { normalize } from 'normalizr';
import * as schemas from './schemas/index';

export const actionTypes = {
    FETCH_DATA: 'FETCH_DATA',
    SELECT_AUTHOR: 'SELECT_AUTHOR',
};

export const fetchPosts = posts => {
    const normalizedPosts = normalize(posts, [schemas.postsSchema]);
    console.log(normalizedPosts);
    return {
        type: actionTypes.FETCH_DATA,
        payload: {
            ids: {
                posts: Object.keys(normalizedPosts.entities.posts),
                authors: Object.keys(normalizedPosts.entities.authors),
            },
            entities: normalizedPosts.entities,
        },
    };
};

export const selectAuthor = id => ({
    type: actionTypes.SELECT_AUTHOR,
    payload: id,
});
