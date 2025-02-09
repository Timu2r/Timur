import './SearchResults.css';
import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export default function SearchResults({ books, onBookSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 36; 
	const indexOfLastBook = (currentIndex + 1) * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / itemsPerPage);


  const nextIMG = () => {
    if (currentIndex < books.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 3);
    }
  };

  const prevIMG = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 3);
    }
  };

  return (
    <div className="search__panel">
      <h1>Результаты поиска покниги</h1>
      <div
        className="search__container"
        style={{ transform: `translateX(-${currentIndex * 200}px)` }}
      >
        <ul>
          {books.map((book) => (
            <li
              key={book.id}
              onClick={() => onBookSelect(book)} // Обработчик клика
            >
              {book.volumeInfo?.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="search__image"
                />
              )}
              <h3 className="search__title">
                {book.volumeInfo?.title || 'Без названия'}
              </h3>
              <p className="search__author">
                {book.volumeInfo?.authors?.join(', ') || 'Автор неизвестен'}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="arrows__prev">
        <button
          className="prev__button"
          onClick={prevIMG}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <FaAngleLeft className="arrows" />
        </button>
      </div>

      <div className="arrows__next">
        <button
          className="next__button"
          onClick={nextIMG}
          disabled={currentIndex === books.length - 1}
          style={{ opacity: currentIndex === books.length - 1 ? 0.5 : 1 }}
        >
          <FaAngleRight className="arrows" />
        </button>
      </div>
    </div>
  );
}
