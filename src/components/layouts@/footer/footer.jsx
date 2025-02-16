import './footer.css'

export default function Footer() {
	return (
		<div className='footer__panel'>
			<div className='sait__info'>
				<h2 className='footer__title'>О сайте</h2>
				<p className='footer__description'>
					Этот сайт посвящён Тимуру — молодому и увлечённому веб-разработчику,
					родившемуся 21 марта 2008 года в Москве.
				</p>
				<p className='footer__description'>
					Тимур активно изучает JavaScript и React.js с сентября 2024 года,
					создавая уникальные проекты и развивая свои навыки.
				</p>
				<p className='footer__description'>
					Здесь вы можете узнать больше о его пути в программировании, текущих
					проектах и планах на будущее.
				</p>
				<p className='footer__description'>
					Следите за развитием, вдохновляйтесь и поддерживайте Тимура в его
					стремлении стать профессиональным веб-разработчиком.
				</p>
			</div>

			<div className='footer__divider'></div>

			<div className='creator__info'>
				<h2 className='footer__title'>Информация о создателе</h2>
				<p className='creator__text'>Создано в 2025 году</p>
				<p className='creator__text'>Все права защищены</p>
				<p className='creator__text'>Политика конфиденциальности</p>

				<div className='creator__line'>
					<h3 className='creator__contact-title'>Контакты</h3>
					<p className='creator__text'>
						<span>Номер телефона:</span>{' '}
						<a
							href='tel:+79953004459'
							target='_blank'
							rel='noopener noreferrer'
							className='creator__link'
						>
							+7 (995) 300-44-59
						</a>
					</p>
					<p className='creator__text'>
						<span>Телеграм:</span>{' '}
						<a
							href='https://t.me/Timu2r'
							target='_blank'
							rel='noopener noreferrer'
							className='creator__link'
						>
							@Timu2r
						</a>
					</p>
					<p className='creator__text'>
						<span>Email:</span>{' '}
						<a
							href='mailto:hamidovtimur123@gmail'
							target='_blank'
							rel='noopener noreferrer'
							className='creator__link'
						>
							hamidovtimur123@gmail.com
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
