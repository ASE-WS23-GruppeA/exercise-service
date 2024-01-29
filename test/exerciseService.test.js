const { getExercisesHandler, getExerciseByIdHandler } = require('../exerciseService');
const { PrismaClient } = require('@prisma/client');
jest.mock('@prisma/client');

describe('getExercisesHandler', () => {
    it('should fetch all exercises and return them', async () => {
        const mockExercises = [{ id: 1, name: 'Exercise 1' }, { id: 2, name: 'Exercise 2' }];
        PrismaClient.prototype.exercises = {
            findMany: jest.fn().mockResolvedValue(mockExercises)
        };

        const req = {};
        const res = { json: jest.fn() };
        await getExercisesHandler(req, res);

        expect(res.json).toHaveBeenCalledWith(mockExercises);
    });

    it('should handle errors', async () => {
        PrismaClient.prototype.exercises = {
            findMany: jest.fn().mockRejectedValue(new Error('Database error'))
        };

        const req = {};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await getExercisesHandler(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch exercises' });
    });
});


describe('getExerciseByIdHandler', () => {
    it('should fetch an exercise by ID and return it', async () => {
        const mockExercise = { id: 1, name: 'Exercise 1' };
        PrismaClient.prototype.exercises = {
            findUnique: jest.fn().mockResolvedValue(mockExercise)
        };

        const req = { params: { id: '1' } };
        const res = { json: jest.fn() };
        await getExerciseByIdHandler(req, res);

        expect(res.json).toHaveBeenCalledWith(mockExercise);
    });

    it('should return 404 when the exercise is not found', async () => {
        PrismaClient.prototype.exercises = {
            findUnique: jest.fn().mockResolvedValue(null)
        };

        const req = { params: { id: '2' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await getExerciseByIdHandler(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Exercise not found' });
    });
});

// it('should pass the CI', async () => {
//     const response = 1 + 1;
//     expect(response).toBe(2);
// });
