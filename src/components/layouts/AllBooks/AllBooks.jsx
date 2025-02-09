import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AllBooks.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function AllBooks({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: '*',
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
    slideRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="slide__panel">
      <h1>Список популярных книг</h1>
      <div className="arrows__prev">
        <button
          className="prev__button"
          onClick={() => scrollByAmount(-600)}
        >
          <FaAngleLeft className="arrows" />
        </button>
      </div>

      <div className="slide__cont" ref={slideRef}>
        <ul>
          {books.map((book) => (
            <li key={book.id} onClick={() => onBookClick(book)}>
              {book.volumeInfo?.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="slide__img"
                />
              )}
              <h3 className="slide__title">
                {book.volumeInfo?.title || 'Без названия'}
              </h3>
              <p className="slide__author">
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
