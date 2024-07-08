#  Task Management System

## Description
A task management system for teams.


## Prerequisites
- Docker
- Docker Compose

## Getting Started
To get started with the task management system, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/roddbrian/task-management.git
   cd task-management

2. **Build the Docker image**:

    ```sh
    
    docker build -t roddbrian/task-management .

3. **Run the Docker container**:

    ```sh
    
    docker-compose up

4. **Access the APIs**:

    The API will be available at http://localhost:3000.

5. **API Endpoints**

    ## API Endpoints

    ### Add a Tasks
    - **URL**: `POST /tasks`
    - **Description**: Creates a new task.
    - **Body**: JSON object with `name` and `description` fields.
    
    ### Get All Tasks
    -**URL**: GET /tasks
    -**Description**: Retrieves all tasks.

    ### Update a Tasks
    -**URL**: PUT /tasks/:id
    -**Description**: Updates the status of a task identified by `id`.
    -**Body**: JSON object with `status` field.

    Contributing
    Contributions are welcome! If you have any suggestions or found a bug, please open an issue or submit a pull request.

    This README file provides clear instructions for setting up and running the bookstore inventory system, as well as details about the available API endpoints and continuous integration setup.
