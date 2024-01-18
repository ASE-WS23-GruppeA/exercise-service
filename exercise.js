const express = require('express');
const exerciseServise = require("./exerciseService");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Route to get all the exercises
// Use the function as the handler for the '/exercises' route
app.get('/exercises', exerciseServise.getExercisesHandler);

// Route to get a specific exercise by ID
// Use the function as the handler for the '/exercises/:id' route
app.get('/exercises/:id', exerciseServise.getExerciseByIdHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;