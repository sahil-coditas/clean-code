// src/components/BookList.tsx
import React, { useState } from 'react';
import { Library } from '../models/Library';
import { Book } from '../models/Book';

interface BookListProps {
  library: Library;
}

const BookList: React.FC<BookListProps> = ({ library }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter books by title or author
  const filteredBooks = library.getBooks().filter((book: Book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Book List</h2>
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author} ({book.publicationYear})
            </li>
          ))
        ) : (
          <li>No books found.</li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
