# Dockerized Todo App

A simple, modern **Todo App** with inline editing, built with **Express.js**, **MongoDB**, and **EJS**, and containerized using **Docker** for easy deployment. This app features full CRUD functionality: create, read, update, and delete tasks with an intuitive UI powered by **Bootstrap**.

![App Screenshot](screenshot.png) <!-- Replace this with an actual screenshot -->

## Features

- **Add new tasks** with a user-friendly interface.
- **Inline editing**: Edit tasks directly in the list without moving to a separate form.
- **Delete tasks** with a single click.
- **CRUD operations** handled with MongoDB.
- **Dockerized** for easy setup and deployment.

## Technologies Used

- **Node.js** (Express.js framework)
- **MongoDB** (for database storage)
- **EJS** (for templating)
- **Bootstrap** (for styling)
- **Docker** (for containerization)

## Prerequisites

Before you start, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Start the Docker containers**:

   Make sure Docker is running on your machine, and then start the app using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This will start both the **Express** app and the **MongoDB** database in separate containers.

3. **Access the app**:

   Open your browser and go to: [http://localhost:3000](http://localhost:3000)

## Usage

1. **Adding Tasks**: Use the input field at the top to add a new task.
2. **Editing Tasks**: Click the **Edit** button next to a task to edit it inline, and click **Update** to save the changes.
3. **Deleting Tasks**: Click the **Delete** button next to a task to remove it.

## Project Structure

```plaintext
multi-container-app/
│
├── app/
│   ├── config/
│   │   └── keys.js              # MongoDB connection string
│   ├── models/
│   │   └── Todo.js              # Mongoose schema for tasks
│   ├── routes/
│   │   └── front.js             # Routes for the app (add, edit, delete)
│   ├── views/
│   │   └── todos.ejs            # EJS template for the frontend
│   └── server.js                # Main server file
├── Dockerfile                   # Dockerfile for the app
├── docker-compose.yml            # Docker Compose setup
└── README.md                    # Documentation
```

## API Endpoints

- **GET /**: Fetches all tasks and renders them on the page.
- **POST /**: Adds a new task to the database.
- **POST /todo/update**: Updates an existing task.
- **POST /todo/destroy**: Deletes a task from the database.

## Docker Details

This project uses **Docker Compose** to set up both the application and MongoDB services. The following containers are used:

- **todo-app**: Runs the Node.js application.
- **todo-database**: Runs MongoDB as a database service.

### Running in Docker

To run the project inside Docker, simply use:

```bash
docker-compose up --build
```

This will spin up two containers and expose the app on `localhost:3000`. MongoDB will be running on the default port `27017`.

## Screenshots

![Task Manager Screenshot](screenshot.png) <!-- Replace with actual image link -->

## Contributing

Feel free to submit issues, fork the repository, and make pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
