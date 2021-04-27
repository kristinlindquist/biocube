-- CreateTable
CREATE TABLE "DashboardGraph" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,
    "layout" JSONB NOT NULL,
    "vizState" JSONB[],

    PRIMARY KEY ("id")
);
