Schema:
cd schema
cp -Rp conceptOfInterest/ dataType
cd dataType/
cd resolvers/mutations/
mv deleteConceptOfInterest.ts deleteDataType.ts
mv upsertConceptOfInterest.ts upsertDataType.ts
cd ../queries/
mv getConceptOfInterest.ts getDataType.ts
mv getConceptsOfInterest.ts getDataTypes.ts
cd ../types
mv ConceptOfInterest.ts DataType.ts
cd ../..

find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dataType/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DataType/g' {} \;

Fix types in types.graphql and mutations.graphql


Api:
cd api/mutations/
cp -Rp conceptOfInterest/ dataType
cd dataType
mv deleteConceptOfInterest.ts deleteDataType.ts
mv upsertConceptOfInterest.ts upsertDataType.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dataType/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DataType/g' {} \;

cd ../../queries/
cp -Rp conceptOfInterest/ dataType
cd dataType
mv getConceptOfInterest.ts getDataType.ts
mv getConceptsOfInterest.ts getDataTypes.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dataType/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DataTypes/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DataType/g' {} \;

Add to:
codegen.yml
api/index.ts
schema/index.ts
yarn generate:graphql
