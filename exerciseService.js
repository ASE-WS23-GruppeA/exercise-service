const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Define a function to handle fetching exercises
const getExercisesHandler = async (req, res) => {
    try {
        // Query the database to retrieve all exercises
        const exercises = await prisma.exercises.findMany();

        res.json(exercises); // Send exercises as a JSON response
    } catch (error) {
        console.error('Error fetching exercises:', error);
        res.status(500).json({ error: 'Failed to fetch exercises' });
    }
};

// Define a function to handle fetching a single exercise by ID
const getExerciseByIdHandler = async (req, res) => {
    try {
        const exerciseId = parseInt(req.params.id); // Get the exercise ID from the URL parameter

        // Query the database to find the exercise by ID
        const exercise = await prisma.exercises.findUnique({
            where: { "exerciseID": exerciseId },
        });

        if (exercise) {
            res.json(exercise); // Send the exercise as a JSON response
        } else {
            res.status(404).json({ error: 'Exercise not found' });
        }
    } catch (error) {
        console.error('Error fetching exercise:', error);
        res.status(500).json({ error: 'Failed to fetch exercise' });
    }
};

module.exports = {
    getExercisesHandler,
    getExerciseByIdHandler
}