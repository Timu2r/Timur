import './Heder.css';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";
import logo from '../../img/library logo.png'

export default function Header({ onBookSelect, onSearchResults }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Состояние для фокуса
  const [bookCount, setBookCount] = useState(0); // Добавляем состояние для количества книг

  const handleInputChange = async (e) => {
    const searchText = e.target.value;
    setQuery(searchText);

    if (searchText.length > 2) {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`);
        const data = await response.json();
        setSuggestions(data.items?.slice(0, 5) || []);
      } catch (error) {
        console.error("Ошибка загрузки подсказок:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClick = async () => {
    if (query.trim().length > 0) {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();

        if (data.items) {
          setSuggestions(data.items);
          setBookCount(data.items.length); // Обновляем количество найденных книг
          onSearchResults(data.items); // Отправляем найденные книги в App
        } else {
          setBookCount(0); // Если нет книг, устанавливаем 0
          onSearchResults([]); // Если нет книг, отправляем пустой массив
        }
      } catch (error) {
        setBookCount(0); // Если произошла ошибка, устанавливаем 0
        onSearchResults([]); // Если произошла ошибка, отправляем пустой массив
      }
    }
  };

  const handleSuggestionClick = (book) => {
    setQuery(book.volumeInfo.title);
    setSuggestions([]);
  };

  return (
    <header className='title__header'>
          <img src={logo} alt="logo" className='header__logol' />
      <p className='header__logo'>Library</p>

      <div className='header__search'>
        <input
          type='text'
          placeholder='Найти книгу'
          className='header__input'
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)} // Обработчик фокуса
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Обработчик потери фокуса
        />
        <button className='header__butpoisk' onClick={handleSearchClick}>
          Найти
        </button>

        {/* Подсказки показываются только при фокусе и если есть текст */}
        {isFocused && suggestions.length > 0 && query.length > 2 && (
          <ul className='suggestions-list'>
            {suggestions.map((book) => (
              <li key={book.id} className='suggestion-item' onClick={() => handleSuggestionClick(book)}>
                {book.volumeInfo.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='conteiner__delayed'>
        <div className='delayed'>
          <FaHeart className='header__phone' size={22} />
          <p className='header__delayed'>Отложенные</p>
        </div>
        <div className='book'>
          <PiBooksFill className='header__phone' size={25} />
          <p className='header__book'>Мои книги</p>
        </div>
      </div>

    </header>
  );
}
