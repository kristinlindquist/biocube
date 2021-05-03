Schema:
cd schema
cp -Rp conceptOfInterest/ aspectOfHealth
cd aspectOfHealth/
cd resolvers/mutations/
mv deleteConceptOfInterest.ts deleteAspectOfHealth.ts
mv upsertConceptOfInterest.ts upsertAspectOfHealth.ts
cd ../queries/
mv getConceptOfInterest.ts getAspectOfHealth.ts
mv getConceptsOfInterest.ts getAspectsOfHealth.ts
cd ../types
mv ConceptOfInterest.ts AspectOfHealth.ts
cd ../..

find . -type f -exec sed -i '' -e 's/conceptsOfInterest/aspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/aspectOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/AspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/AspectOfHealth/g' {} \;

Fix types in types.graphql and mutations.graphql


Api:
cd api/mutations/
cp -Rp conceptOfInterest/ aspectOfHealth
cd aspectOfHealth
mv deleteConceptOfInterest.ts deleteAspectOfHealth.ts
mv upsertConceptOfInterest.ts upsertAspectOfHealth.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/aspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/aspectOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/AspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/AspectOfHealth/g' {} \;

cd ../../queries/
cp -Rp conceptOfInterest/ aspectOfHealth
cd aspectOfHealth
mv getConceptOfInterest.ts getAspectOfHealth.ts
mv getConceptsOfInterest.ts getAspectsOfHealth.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/aspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/aspectOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/AspectsOfHealth/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/AspectOfHealth/g' {} \;

Fix types in api/mutations/aspectOfHealth/* and api/queries/aspectOfHealth/*

Add to:
codegen.yml
api/index.ts
schema/index.ts
yarn generate:graphql

find . -name '.\!*.DS_Store' -exec rm -rf {} \;
