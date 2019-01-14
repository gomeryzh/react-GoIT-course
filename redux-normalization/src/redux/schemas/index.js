import { schema } from 'normalizr';

const authorSchema = new schema.Entity('authors');

export const postsSchema = new schema.Entity('posts', {
    author: authorSchema,
});
