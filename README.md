# Dust Jacket Books – Backend API (Assignee - Narinthon)

This is the backend API for **Dust Jacket Books**, a full-stack bookstore management system. It provides endpoints for managing books, inventory, and search functionality.

Built with modern JavaScript tools and deployed using team-based GitHub collaboration.

---
## Skills Demonstrated

- RESTful API development
- NoSQL data modeling with MongoDB
- Environment-based configuration
- Git collaboration & version control
- API testing & debugging with Postman
---

## Technologies & Tools Used

Tool/Tech             | Purpose                             
----------------------|-------------------------------------
**Node.js**           | JavaScript runtime for backend logic 
**Express.js**        | Web server & API routing             
**MongoDB Atlas**     | Cloud NoSQL database                 
**Mongoose**          | MongoDB ORM for schema/data modeling 
**Postman**           | API testing and documentation        
**dotenv**            | Environment variable management      
**Nodemon**           | Auto-reloading development server    
**Git + GitHub**      | Version control and team collaboration 

---

## Project Structure

```
backend/
├── controllers/        # API logic
├── models/             # Mongoose schemas
├── routes/             # Express route definitions
├── index.js            # Entry point
├── .env                # MongoDB connection string (not committed)
├── .gitignore
├── package.json
```

---

## Setup Instructions (Run Locally)

### 1. Clone the Repository

```bash
git clone https://github.com/nmaneekhat/dust-jacket-books-bookstore-management-system.git
cd dust-jacket-books-bookstore-management-system/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```
MONGO_URI=your_mongodb_connection_string
```

> **Use MongoDB Atlas (free tier) for your connection string.**

### 4. Start the Server

```bash
npm run dev
```

---

## API Endpoints

Method | Route             | Description           
-------|-------------------|-----------------------
POST   | `/api/books`      | Add a new book        
PUT    | `/api/books/:id`  | Edit an existing book 
GET    | `/api/books`      | Get all books         

---

## Test with Postman

- Set `Content-Type: application/json`
- Use the following body for POST:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "year": 1925,
  "genre": "Fiction",
  "price": 10.99,
  "inStock": true
}
```

---

## Team & Roles
**Narinthon (Backend/APIs)**
# Grace (Frontend/UI)
# John (Logic & Testing)
# Ngbra (Database)
