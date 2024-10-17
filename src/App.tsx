import "./App.css";
import { useState } from 'react';
import { Library } from './models/Library';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [library] = useState(new Library());
  const [updateFlag, setUpdateFlag] = useState(0); // State to trigger re-render

  const handleBookAdded = () => {
    setUpdateFlag((prev) => prev + 1); // Update state to trigger re-render
  };
  
  return (
    <div className="outer">
      <h1>Library Management System</h1>
      <BookForm library={library} onBookAdded={handleBookAdded} />
      <BookList library={library} />
      <h2>Total Books: {library.getTotalBooks()}</h2>
    </div>
  );
}

export default App;
