import { useEffect } from 'react';
import { fetchBooks } from './BookSlader.js';
import { Link } from 'react-router-dom';

export default function BookList({ books, setBooks }) {
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const bookData = await fetchBooks('React');
        setBooks(bookData || []);
      } catch (error) {
        console.error('Ошибка при загрузке книг:', error);
      }
    };
    loadBooks();
  }, [setBooks]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <Link to={`book${book.id}`}>Читать книгу</Link>
        </div>
      ))}
    </div>
  );
}
