import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import { fileURLToPath } from 'url'

import GraphQLJSON from "graphql-type-json";

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import sharp from "sharp";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  graphQL: {
    queries: (graphQL, context) => ({
      foo: {
        type: GraphQLJSON,
        args: {},
        resolve: async () => 'foo',
      }
    })
  },
  sharp,
})
