// const { values } = require("sequelize/types/lib/operators");

// book class: Represents a book 
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author; 
        this.isbn = isbn; 
    }
}

// UI Class: hanldes UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3444444'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '555555'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
      static addBookToList(book) {
          const list = document.querySelector('#book-list');

          const row = document.createElement('tr');

          row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sml
           delete">X</a></td>        
                    
          `;

          list.appendChild(row);


      }
    }

// Store Class: handles storage

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();

    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#Author').value;
    const isbn = document.querySelector('#isbn').value;

    // instantiate book
    const book = new Book(title, author, isbn);

    console.log(Book);
    
});
// Event ; remove a book ue
