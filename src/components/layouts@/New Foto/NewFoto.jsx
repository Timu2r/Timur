import { useRef } from 'react'
import './NewFoto.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import FotosData from './Fotos.jsx'

export default function NewFoto() {
	const slideRef = useRef(null)

	const scrollByAmount = amount => {
		slideRef.current.scrollBy({
			left: amount,
			behavior: 'smooth',
		})
	}

	const RecentFotos = ({ count = 10 }) => {
		const sortedFotos = [...FotosData].sort(
			(a, b) => new Date(b.date) - new Date(a.date)
		)
		return sortedFotos.slice(0, count)
	}

	const recentFotos = RecentFotos({ count: 10 })

	return (
		<div className='slide__panel'>
			<h1 className='slide__titlee'>Недавные фото</h1>
			<div className='arrows__prev'>
				<button className='prev__button' onClick={() => scrollByAmount(-1000)}>
					<FaAngleLeft className='arrows' />
				</button>
			</div>

			<div className='slide__cont' ref={slideRef}>
				<ul>
					{recentFotos.map(foto => (
						<li
							key={foto.id}
							className='slide__item'
							style={{ backgroundImage: `url(${foto.backImg})` }}
						>
							<div className='cont-d-p-d'>
								{' '}
								<div className='slide__date'>{foto.date}</div>
								<div className='slide__place'>{foto.place}</div>
								<div className='slide__discription'>{foto.discription}</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className='arrows__next'>
				<button className='next__button' onClick={() => scrollByAmount(600)}>
					<FaAngleRight className='arrows' />
				</button>
			</div>
		</div>
	)
}
