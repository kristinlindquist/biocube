Schema:
cd schema
cp -Rp conceptOfInterest/ dashboardGraph
cd dashboardGraph/
cd resolvers/mutations/
mv deleteConceptOfInterest.ts deleteDashboardGraph.ts
mv upsertConceptOfInterest.ts upsertDashboardGraph.ts
cd ../queries/
mv getConceptOfInterest.ts getDashboardGraph.ts
mv getConceptsOfInterest.ts getDashboardGraphs.ts
cd ../types
mv ConceptOfInterest.ts DashboardGraph.ts
cd ../..

find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dashboardGraph/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DashboardGraph/g' {} \;

Fix types in types.graphql and mutations.graphql


Api:
cd api/mutations/
cp -Rp conceptOfInterest/ dashboardGraph
cd dashboardGraph
mv deleteConceptOfInterest.ts deleteDashboardGraph.ts
mv upsertConceptOfInterest.ts upsertDashboardGraph.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dashboardGraph/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DashboardGraph/g' {} \;

cd ../../queries/
cp -Rp conceptOfInterest/ dashboardGraph
cd dashboardGraph
mv getConceptOfInterest.ts getDashboardGraph.ts
mv getConceptsOfInterest.ts getDashboardGraphs.ts
find . -type f -exec sed -i '' -e 's/conceptsOfInterest/dashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/conceptOfInterest/dashboardGraph/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptsOfInterest/DashboardGraphs/g' {} \;
find . -type f -exec sed -i '' -e 's/ConceptOfInterest/DashboardGraph/g' {} \;

Fix types in api/mutations/dashboardGraph/* and api/queries/dashboardGraph/*

Add to:
codegen.yml
api/index.ts
schema/index.ts
yarn generate:graphql

find . -name '.\!*.DS_Store' -exec rm -rf {} \;
