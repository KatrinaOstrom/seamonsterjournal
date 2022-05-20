// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EntriesPage } = initSchema(schema);

export {
  EntriesPage
};