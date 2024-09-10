
# Blog API

---------------------------------------------------------------------------------------------

This project is a simple Blog API built using Node.js, Express, and MongoDB. It allows you to create, read, update, and delete blog posts, as well as search blogs by title or content.

### Project URL
[![Project Page](https://img.shields.io/badge/Project%20Page-Click%20Here-brightgreen)](https://roadmap.sh/projects/blogging-platform-api)

## Requirements
To run this project, you need to have the following installed:

* Node.js: Download and install from Node.js Official Website
* MongoDB Compass: Download and install from MongoDB Compass Official Website
* Nodemon: This project uses nodemon to automatically restart the server when code changes are detected.


## Getting Started
Follow these steps to get the project running on your local machine:

1. Clone the Repository
```
    git clone https://github.com/yourusername/blog-api.git
    cd blog-api

```

2. Install Dependencies
Install the necessary dependencies by running:
```

npm install

```

3. Set Up Environment Variables
Create a .env file in the root of the project and add the following variables:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/blogsDB

```
PORT: The port on which your API will run (default is 3000).
MONGO_URI: The connection string for your local MongoDB database.


4. Running the Application
Start the server using nodemon:
```

nodemon src/index.js

```

The application should now be running on http://localhost:3000.

5. Using MongoDB Compass
Ensure you have MongoDB Compass running and connected to your MongoDB instance on mongodb://localhost:27017. This will allow you to visually manage and inspect your MongoDB databases and collections.

## API Endpoints
1. Get All Blogs
```
GET /api/v1/getBlogs
```

Optional query parameter:
term: Search term to filter blogs by title or content.
Example:
```
GET /api/v1/getBlogs?term=tech
```
2. Get Blog by ID
```
GET /api/v1/getBlog/:id
```
:id: The ID of the blog post to retrieve.

3. Create a New Blog
```
POST /api/v1/createBlog
```
___Request Body:__
```
{
  "title": "My First Blog",
  "content": "This is the content of my first blog.",
  "tags": ["tech", "javascript"]
}
```
4. Update Blog by ID
```
PUT /api/v1/updateBlog/:id
:id: The ID of the blog post to update.
```

___Request Body:__
```
{
  "title": "Updated Blog Title",
  "content": "Updated content for the blog post.",
  "tags": ["newtag", "tech"]
}
```

5. Delete Blog by ID
```
DELETE /api/v1/deleteBlog/:id
```

## Project Structure

```
├── src
│   ├── controller
│   │   └── blogcontroller.js   # Blog controller functions
│   ├── model
│   │   └── blogs.js            # Mongoose Blog schema
│   ├── routes
│   │   └── blogRoutes.js       # Blog routes
│   └── index.js                # Entry point of the application
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation

```