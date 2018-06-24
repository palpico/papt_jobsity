# CHALLENGE 06

Backend endpoints

**Generate a backend rest service with the necessary endpoints to use in the application**
**Integrate MongoDB to save all reservations**

Detailed specs:
- Create some JS code to populate MongoDB with books information.
- Create a method to return all books. This method could receive a QUERY parameter to filter the books by bookShelf: Quito, Medellin, Digital, etc….
- Create a method to return the info of 1 book.
- Create a method to lend a Book. This method should validate the book is not lent.
- The backend should Have users.
- Create a login endpoint for a user to authenticate and receive a token
- All the endpoints except Login are secured. Use a JWT approach
- Create a Detailed Readme on how to run the backend

Create at least 3 endpoints to be consumed
Use express architecture to mount all services
Push all changes to your GitHub repo

### USE

This endpoint requires [Node.js](https://nodejs.org/) to run.

Go to project folder, install the dependencies and start the server.

```sh
$ cd projectfolder
$ npm install
$ npm run nodemon
```

Server will be listening on http://localhost:3000/

### Endpoint Details

USER

| Method                        |HTTP   |Path                       |                                    URL|
|:------------------------------|:------|:--------------------------|:--------------------------------------|
|Login user                     | POST  |/user/login                | http://localhost:3000/user/login      |
|Create user                    |POST   |/user/signup               |http://localhost:3000/user/signup      |
|Delete a specific user         |DELETE |/user/userId               |http://localhost:3000/user/id          |

Required fields for user creation
    
    "email": "email@email.com",
    "password": "12345",
    "name": "example",
    "surname": "example",
    "nick": "ex"
    
Required fields for user login
    
    "email": "email@email.com",
    "password": "12345"
_____

BOOKS

| Method                        |HTTP   |Path                       |                                    URL|
|:------------------------------|:------|:--------------------------|:--------------------------------------|
|Get all books                  |GET    |/book/                     | http://localhost:3000/book/           |
|Create book                    |POST   |/book/                     | http://localhost:3000/book/           |
|Get books by location          |GET    |/book/location/locationId/ | http://localhost:3000/book/location/id|
|Get a single book              |GET    |/book/bookId               | http://localhost:3000/book/id         |
|Update book Information        |PATCH  |/book/bookId               | http://localhost:3000/book/id         |
|Delete book                    |DELETE |/book/bookId               | http://localhost:3000/book/id         |

Required fields for book creation

    "isbn":"1234567890123",
    "title":"example book",
    "author": "example author",
    "location": "quito",
    "rating": "4",
    "pages": "455",
    "summary": "lorem ipsum",
    "available": "true",
    "book_type": "hard cover"
_____

RESERVATION

| Method                        |HTTP   |Path                       |                                    URL|
|:------------------------------|:------|:--------------------------|:--------------------------------------|
|Get all book reservations      |GET    |/reservation/              | http://localhost:3000/reservation/    |
|Register book reservation      |POST   |/reservation/              | http://localhost:3000/reservation/    |
|Get book reservation details   |GET    |/reservation/reservationId | http://localhost:3000/reservation/id  |
|Delete reservation             |DELETE |/reservation/reservationId | http://localhost:3000/reservation/id  |

Required fields for reservation creation (book and user should be ids of existing items)

	"user": "5b2d273dab1c0116404ed48b",
    "book": "5b2d23bc24051a296c353c57",
    "lend_date": "",
    "return_date": ""
___

