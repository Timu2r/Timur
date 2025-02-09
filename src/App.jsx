import { useState } from 'react';
import Header from './components/Heder/Header.jsx';
import AllBooks from './components/layouts/AllBooks/AllBooks.jsx';
import DramaBooks from './components/layouts/DramaBooks/DramaBooks.jsx';
import FictionBooks from './components/layouts/FictionBooks/FictionBooks.jsx';
import ProgrammingBooks from './components/layouts/ProgrammingBooks/ProgrammingBooks.jsx';
import MangaBooks from './components/layouts/MangaBooks/MangaBooks.jsx';
import DescriptionPanel from './components/layouts/DescriptionPanel/DescriptionPanel.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Footer from './components/layouts/footer/footer.jsx';
import './App.css';

function App() {
  const [tab, setTab] = useState('main');
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchResults, setSearchResults] = useState([]); // Состояние для хранения результатов поиска

  const handleBackClick = () => {
    setTab('main');
    setSelectedBook(null);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setTab('DescriptionPanel');
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setTab('SearchResults'); // Переход к панели с результатами поиска
  };

  return (
    <div className='app' >
      <Header onBookSelect={handleBookClick} onSearchResults={handleSearchResults} />
      
      {tab === 'main' && (
        <>
          <AllBooks activeTab={tab} onTabChange={setTab} onBookClick={handleBookClick} />
          <DramaBooks activeTab={tab} onTabChange={setTab} onBookClick={handleBookClick} />
          <FictionBooks activeTab={tab} onTabChange={setTab} onBookClick={handleBookClick} />
          <ProgrammingBooks activeTab={tab} onTabChange={setTab} onBookClick={handleBookClick} />
          <MangaBooks activeTab={tab} onTabChange={setTab} onBookClick={handleBookClick} />
        </>
      )}

      {tab === 'DescriptionPanel' && (
        <DescriptionPanel book={selectedBook} onBackClick={handleBackClick} />
      )}

      {tab === 'SearchResults' && (
        <SearchResults books={searchResults} onBookSelect={handleBookClick} />
      )}

      <Footer />

    </div>
  );
}

export default App;
