const request = require('supertest');
const app = require('../exercise');

describe('/exercises route', () => {
    it('should return all exercises', async () => {
        const response = await request(app).get('/exercises');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('/exercises/:id route', () => {
    it('should return a specific exercise by id', async () => {
        const response = await request(app).get('/exercises/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            exerciseID: 1, 
            exerciseName: "Squats", 
            muscleGroup: "Legs"
        });
    });
    

    it('should return 404 for a non-existent exercise', async () => {
        const response = await request(app).get('/exercises/999');
        expect(response.statusCode).toBe(404);
    });
});

// it('should pass the CI', async () => {
//     const response = 1 + 1;
//     expect(response).toBe(2);
// });
