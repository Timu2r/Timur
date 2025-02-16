import './InfoPanel.css'
import {
	RiTelegram2Line,
	RiDiscordLine,
	RiPhoneLine,
	RiGithubLine,
	RiArrowRightSLine
} from 'react-icons/ri'

export default function InfoPanel({ scrollDis, refs }) {
	return (
		<div className='cont'>
			<div className='container-info'>
				<h1 className='info-title'>Кратко о себе</h1>
				<p className='info-discriptoin'>
					Меня зовут Тимур. Я увлекаюсь веб-разработкой и активно изучаю
					JavaScript и React с сентября 2024 года. Мне нравится создавать
					интерфейсы, работать с DOM и создавать собственные проекты, такие как
					онлайн-библиотеки и калькуляторы. В свободное время я совершенствую
					навыки фронтенд-разработки и экспериментирую с созданием интерактивных
					компонентов для сайтов.
					<button
						className='buttin-info'
						onClick={() => scrollDis(refs.discRef, 'dis')}
					>
					<RiArrowRightSLine className='arrow-dis'/>	Узнать больше
					</button>
				</p>

				<span>
					<a
						href='https://t.me/timu2r'
						className='telegram-link'
						target='_blank'
					>
						<RiTelegram2Line className='telegram-icon' />
					</a>
					<a
						href='https://discord.gg/BPRgVfeH'
						className='discord-link'
						target='_blank'
					>
						<RiDiscordLine className='discord-icon' />
					</a>
					<a href='tel:+79953004459' className='phone-link' target='_blank'>
						<RiPhoneLine className='phone-icon' />
					</a>
					<a
						href='https://github.com/Timu2r'
						className='phone-link'
						target='_blank'
					>
						<RiGithubLine className='git-icon' />
					</a>
				</span>
			</div>

			<div className='figure1'></div>
			<div className='figure2'></div>
			<div className='figure3'></div>
			<div className='figure4'></div>

			<div className='container-img'></div>
		</div>
	)
}
