import { useParams } from 'react-router-dom';

const ReadingPanel = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) return <p>Книга не найдена.</p>;

  return (
    <div>
      <h1>{book.volumeInfo.title}</h1>
      <h3>Автор(ы): {book.volumeInfo.authors?.join(', ')}</h3>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default ReadingPanel;
