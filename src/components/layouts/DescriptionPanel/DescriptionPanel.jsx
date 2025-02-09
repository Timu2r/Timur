import './DescriptionPanel.css';
import { useEffect } from 'react';

export default function DescriptionPanel({ book, onBackClick }) {
  if (!book) return null; // Если книги нет, ничего не показываем

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="description-panel">
      <button onClick={onBackClick} className="back-button">Назад</button>
      <h1>{book.volumeInfo?.title}</h1>
      <img
        src={book.volumeInfo?.imageLinks?.thumbnail}
        alt={book.volumeInfo?.title}
        className="book-image"
      />
      <p><strong>Автор:</strong> {book.volumeInfo?.authors?.join(', ') || 'Автор неизвестен'}</p>
      <p><strong>Описание:</strong> {book.volumeInfo?.description || 'Описание отсутствует.'}</p>
      
      <a 
        href={book.volumeInfo?.infoLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="read-button"
      >
        Читать
      </a>
      
      {book.volumeInfo?.previewLink && (
        <a 
          href={book.volumeInfo?.previewLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="preview-link"
        >
          Предварительный просмотр
        </a>
      )}
    </div>
  );
}
