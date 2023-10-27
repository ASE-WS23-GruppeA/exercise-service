-- CreateTable
CREATE TABLE "Exercises" (
    "exerciseID" SERIAL NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "muscleGroup" TEXT NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("exerciseID")
);
