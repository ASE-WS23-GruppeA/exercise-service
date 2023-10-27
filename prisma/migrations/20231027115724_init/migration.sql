/*
  Warnings:

  - You are about to drop the `Exercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Exercises";

-- CreateTable
CREATE TABLE "exercises" (
    "exerciseID" SERIAL NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "muscleGroup" TEXT NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("exerciseID")
);
