const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs').promises;
const path = require('path');

async function initializeExercises() {
    try {

        const exercisesData = await fs.readFile(path.join(__dirname, 'exercisesData.json'), 'utf-8');
        const exercisesToInsert = JSON.parse(exercisesData);

        for (const exerciseData of exercisesToInsert) {
            await prisma.exercises.create({ data: exerciseData });
        }

        console.log('Exercises initialized successfully');

    } catch (error) {

        console.error('Error initializing exercises:', error);

    } finally {

        await prisma.$disconnect();

    }
}

initializeExercises()
    .catch((error) => {
        console.error('Error initializing exercises:', error);
    });
