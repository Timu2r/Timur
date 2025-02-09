import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Введите название книги или автора..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Поиск
      </button>
    </div>
  );
}
