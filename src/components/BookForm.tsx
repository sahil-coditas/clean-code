// src/components/BookForm.tsx
import React, { useState } from 'react';
import { Book } from '../models/Book';
import { Library } from '../models/Library';

interface BookFormProps {
  library: Library;
  onBookAdded: () => void;
}

const BookForm: React.FC<BookFormProps> = ({ library, onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');

  const handleAddBook = () => {
    if (title && author && publicationYear) {
      const book = new Book(title, author, parseInt(publicationYear));
      library.addBook(book);
      onBookAdded()
      setTitle('');
      setAuthor('');
      setPublicationYear('');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Publication Year" 
        value={publicationYear} 
        onChange={(e) => setPublicationYear(e.target.value)} 
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
