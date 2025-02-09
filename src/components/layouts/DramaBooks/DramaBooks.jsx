import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './DramaBooks.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function DramaBooks({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const dramaRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'drama',
          maxResults: 37,
        },
      })
      .then((response) => {
        if (response.data.items) {
          setBooks(response.data.items);
        }
      })
      .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);

  const scrollByAmount = (amount) => {
    dramaRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="drama__panel">
      <h1>Список драматических книг</h1>
      <div className="arrows__prev">
        <button
          className="prev__button"
          onClick={() => scrollByAmount(-600)}
        >
          <FaAngleLeft className="arrows" />
        </button>
      </div>

      <div className="drama__cont" ref={dramaRef}>
        <ul>
          {books.map((book) => (
            <li key={book.id} onClick={() => onBookClick(book)}>
              {book.volumeInfo?.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="drama__img"
                />
              )}
              <h3 className="drama__title">
                {book.volumeInfo?.title || 'Без названия'}
              </h3>
              <p className="drama__author">
                {book.volumeInfo?.authors?.join(', ') || 'Автор неизвестен'}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="arrows__next">
        <button
          className="next__button"
          onClick={() => scrollByAmount(600)}
        >
          <FaAngleRight className="arrows" />
        </button>
      </div>
    </div>
  );
}
