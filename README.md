## Biocube - An analysis platform for sensor and self-report health data (WIP!)
Eventually... a no-code platform for ingesting, transforming, combining, analyzing and reporting on health data.
Currently

### Dependencies
* Google developer setup
* Postgres Database

### Data Sources
* Currently, only https://developers.google.com/fit (which amongst other things, provides API access to health data otherwise trapped in Apple Health)

### Set Up
* Configure local settings in backend/.env (DATABASE_URL) and web/.env (REACT_APP_ROLLBAR_ACCESS_TOKEN, REACT_APP_CLIENT_ID) 

### Running It
* <code>yarn start:backend</code> for graphql API
* <code>yarn start:web</code> for React frontend (https://localhost:3000/)
* <code>yarn start:bi</code> for cubejs / BI backend (http://localhost:4343)
* <code>cd backend && yarn studio:prisma</code> to start Prisma data editing studio

### Codegen
* <code>cd backend && yarn generate:graphql</code> to generate graphql code (including client-side)
* <code>cd backend && yarn generate:prisma</code> to generate prisma code
* <code>cd backend && yarn format:prisma</code> to format Prisma file (required before migrate)
* <code>cd backend && yarn format:migrate</code> to migrate database according to Prisma schema def.

### Notes
* Update packages with <code>yarn upgrade-interactive --latest</code>
