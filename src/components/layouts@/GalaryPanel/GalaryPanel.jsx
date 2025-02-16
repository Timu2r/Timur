import { useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import FotosData from '../New Foto/Fotos.jsx'
import './GalaryPanel.css'

export default function GalaryPanel() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	const slideRef = useRef(null)

	const scrollByAmount = amount => {
		slideRef.current.scrollBy({
			left: amount,
			behavior: 'smooth',
		})
	}

	const RecentFotos = ({ count = 100 }) => {
		const sortedFotos = [...FotosData].sort(
			(a, b) => new Date(b.date) - new Date(a.date)
		)
		return sortedFotos.slice(0, count)
	}

	const recentFotos = RecentFotos({ count: 100 })

	return (
					<div className='galary__panel'>
						<h1 className='galary__titlee'>Недавные фото</h1>
						<div className='arrows__prev'>
							<button className='prev__button' onClick={() => scrollByAmount(-1000)}>
								<FaAngleLeft className='arrows' />
							</button>
						</div>
			
						<div className='galary__cont' ref={slideRef}>
							<ul>
								{recentFotos.map(foto => (
									<li
										key={foto.id}
										className='galary__item'
										style={{ backgroundImage: `url(${foto.backImg})` }}
									>
										<div className='cont-d-p-d'>
											{' '}
											<div className='galary__date'>{foto.date}</div>
											<div className='galary__place'>{foto.place}</div>
											<div className='galary__discription'>{foto.discription}</div>
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
};
