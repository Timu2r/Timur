import { useState, useEffect } from 'react'
import axios from 'axios'
import './MangaBooks.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

export default function AllBooks({ onBookClick }) {
	const [books, setBooks] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		axios
			.get('https://www.googleapis.com/books/v1/volumes', {
				params: {
					q: "anime manga",
					maxResults: 36, // Оптимальное число для тестов
				},
			})
			.then(response => {
				if (response.data.items) {
					setBooks(response.data.items)
				}
			})
			.catch(error => console.error('Ошибка:', error))
	}, [])

	const nextIMG = () => {
		if (currentIndex < books.length - 1) {
			setCurrentIndex(prevIndex => prevIndex + 3)
		}
	}

	const prevIMG = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevIndex => prevIndex - 3)
		}
	}
	
	return (
		<div className='drama__panel'>
			<h1>Список манги</h1>
			<div
				className='drama__cont'
				style={{ transform: `translateX(-${currentIndex * 200}px)` }}
			>
				<ul>
					{books.map(book => (
						<li key={book.id}
						onClick={() => onBookClick(book)}
						>
							{book.volumeInfo?.imageLinks?.thumbnail && (
								<img
									src={book.volumeInfo.imageLinks.thumbnail}
									alt={book.volumeInfo.title}
									className='drama__img'
								/>
							)}
							<h3 className='drama__title'>
								{book.volumeInfo?.title || 'Без названия'}
							</h3>
							<p className='drama__author'>
								{book.volumeInfo?.authors?.join(', ') || 'Автор неизвестен'}
							</p>
						</li>
					))}
				</ul>
			</div>

			<div className='arrows__prev'>
				<button
					className='prev__button'
					onClick={prevIMG}
					disabled={currentIndex === 0}
					style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
				>
					<FaAngleLeft className='arrows' />
				</button>
			</div>

			<div className='arrows__next'>
				<button
					className='next__button'
					onClick={nextIMG}
					disabled={currentIndex === books.length - 1}
					style={{ opacity: currentIndex === books.length - 1 ? 0.5 : 1 }}
				>
					<FaAngleRight className='arrows' />
				</button>
			</div>
		</div>
	)
}
