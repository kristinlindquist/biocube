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
