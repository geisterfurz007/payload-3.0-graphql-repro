This is a reproduction for a potential issue with Payload 3.0.

## Reproduction steps

1. Clone the repository `git clone --branch issue/crop-true-metadata-undefined git@github.com:geisterfurz007/payload-3.0-graphql-repro.git`
2. Install dependencies `yarn`
3. Start the database `./start-database.sh`
4. Start the dev server `yarn dev`
5. Login at http://localhost:3000/admin, start creating a new Media entity, select a file, click edit image, then apply changes
6. Try to save the entity
7. *poof*
