# books-react

Welcome to ReadingList. This React application will be used by people who would like to keep track of books that they want to read and ones that they have read already.
Users have the ability to search through all of the books that exist within the Google Books database (via Google Books API) and can add these books to a "Reading List" where they will be persisted to a SQL database, via a Rails API, using fetch. These books can be added and deleted from the Reading List, and marked as complete, and appear in a different route of completed books.


## Installation

First, you will need to migrate the database.

```
cd books-react
rails db:migrate
```

Then you will need to install npm.

```
cd client
npm install
```

The application can then be started using "foreman." This will start the rails server as well as launch the React app.
(Make sure you are in the books-react directory when using foreman.)

```
foreman start -p 3000
```

## Video Walkthrough

https://www.youtube.com/watch?v=zpwf4ZOFI3o

## Demo

https://books-react-frontend.herokuapp.com/

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/scliff6262/books-react. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
>>>>>>> 85511eeca119bf3cff2282f3c3b1c3ddcb10e37d
