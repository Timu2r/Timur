import './Heder.css'
import { TbBrandReactNative } from 'react-icons/tb'

export default function Header({ active, onChange }) {
	return (
		<header className='title__header'>
			<p className='main__logo'>
				<TbBrandReactNative />
			</p>
			<div className='header__buttons'>
				<button
					className={`header__button ${active === 'main' ? 'active' : ''}`}
					onClick={() => onChange('main')}
				>
					Главное
				</button>

				<button
					className={`header__button ${active === 'galary' ? 'active' : ''}`}
					onClick={() => onChange('galary')}
				>
					Галерея
				</button>
			</div>
		</header>
	)
}
