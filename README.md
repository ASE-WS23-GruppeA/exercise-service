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
3. Start the server:
    ```bash
    npm start
    ```
The service should now be accessible at http://localhost:3000 by default.

## Database and Prisma Configuration

The "Workouts Service" uses a PostgreSQL database for storing workout and exercise set data, and it utilizes Prisma as an ORM (Object-Relational Mapping) tool. Follow these steps to configure the database and Prisma:

### Database Setup

1. Ensure you have PostgreSQL installed and running on your system.

2. Create a database named "exercises" in PostgreSQL. This can typically be done using a PostgreSQL command line tool or a GUI tool like pgAdmin.

3. Create a `.env` file in the project directory.

4. Add the following configuration to the `.env` file with your PostgreSQL database connection URL:
    ```env
    DATABASE_URL=your_postgresql_database_url_here
    ```
   Replace `your_postgresql_database_url_here` with the actual URL for your PostgreSQL database. The URL usually follows the format: `postgresql://username:password@localhost:5432/exercises`

5. Save the `.env` file.

### Prisma Configuration

1. Generate Prisma Client, which is used to access your database in your code:
    ```
    npx prisma generate
    ```

2. Create and apply a new migration to your database. This will set up the initial schema as defined in `schema.prisma`:
    ```
    npx prisma migrate dev --name init
    ```

3. After running the migration, verify that the tables have been created in your `exercises` database.

4. Insert data at the `exercises` table:
    ```
    node dataInsertion.js
    ```

## API Endpoints

The Exercise Microservice provides the following API endpoints:

- `GET /exercises`: Retrieve a list of all exercises.
- `GET /exercises/:id`: Retrieve a specific exercise by ID.

## Usage

To start the microservice, run:

```shell
npm start
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
