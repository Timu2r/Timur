import './footer.css'

export default function Footer() {
	return (
<div className='footer__panel'>
  <div className='sait__info'>
    <h2 className='footer__title'>О нашей библиотеке</h2>
    <p className='footer__description'>
      Добро пожаловать в нашу онлайн-библиотеку, где вы найдете множество книг для чтения на любой вкус.
    </p>
    <p className='footer__description'>
      Мы стремимся создать удобное пространство для любителей книг и предоставляем доступ к качественному контенту.
    </p>
    <p className='footer__description'>
      Читайте, исследуйте и наслаждайтесь литературой в любое время и в любом месте.
    </p>
    <p className='footer__description'>
      Поддержка и обратная связь всегда доступны для вас.
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