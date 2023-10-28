# Exercise Microservice

The Exercise Microservice is a component of the Workout Tracker web application responsible for managing and providing information about various exercises.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Examples](#examples)

## Prerequisites

- Node.js and npm installed on your development machine.
- A running database (e.g., PostgreSQL) configured for use with Prisma.
- Basic knowledge of JavaScript, Node.js, and Prisma.

## Installation

1. Clone this repository.

   ```shell
   git clone https://github.com/ASE-WS23-GruppeA/exercise-service.git
   cd exercise-service
    ```
2. Install dependencies.   
    ```shell
    npm install
    ```
3. Initialize the database tables.
    ```shell
    npx prisma migrate dev
    ```

## Database Configuration

To configure the database connection, create a `.env` file in the project root directory with the following content:

```plaintext
DATABASE_URL=your_database_connection_string
```

## API Endpoints

The Exercise Microservice provides the following API endpoints:

- `GET /exercises`: Retrieve a list of all exercises.
- `GET /exercises/:id`: Retrieve a specific exercise by ID.

## Usage

To start the microservice, run:

```shell
npm run devStart
```

## Examples

### Get All Exercises

To retrieve a list of all exercises:

```shell
curl http://localhost:3000/exercises
```
### Get a Specific Exercise

To retrieve a specific exercise by ID (replace 1 with the desired exercise ID):

```shell
curl http://localhost:3000/exercises/1
```
