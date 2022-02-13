// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Comment } = initSchema(schema);

export {
  Blog,
  Comment
};