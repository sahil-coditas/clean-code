// models/Library.ts
import { Book } from './Book';

export class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Method to get all books in the library
    getBooks(): Book[] {
        return this.books; // Return the array of books
    }

    // Search for books by title
    searchByTitle(title: string): Book[] {
        return this.books.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
    }

    // Search for books by author
    searchByAuthor(author: string): Book[] {
        return this.books.filter(book => book.getAuthor().toLowerCase().includes(author.toLowerCase()));
    }

    // Get total number of books
    getTotalBooks(): number {
        return this.books.length;
    }

    // Display all books (optional, for debugging)
    displayBooks(): void {
        this.books.forEach(book => {
            console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getPublicationYear()})`);
        });
    }
}
