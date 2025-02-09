import IMG from '../../components/Books/Books IMG/Book C++.jpg'
import './InfoPanel.css'

export default function InfoPanel() {
	return (
		<div className='info__panel'>
			<div className='info__info'>
				<div className='info__line'>
					<img src={IMG} alt='Обложка книги' className='info__img' />
					<div className='info__shadow'>
						<h1 className='info__title'>Род Эвата. Мифы Аталии</h1>
						<p className='info__author'>
							Автор <span className='info__author-name'>Анна Петушкова</span>
						</p>
						<p className='info__genres'>Жанры и теги</p>
						<p className='info__tags' >
							Городское фэнтези , Детективное фэнтези , Магические академии ,
							Некромантия , Разгадка тайн , Родовое проклятье , Самиздат ,
							Семейные тайны , Темное фэнтези
						</p>
						<button className='info__read-button'>Читать</button>
					</div>
				</div>

				<h2 className='info__subtitle'>О книге</h2>
				<p className='info__description'>
					Город Иса стоит на пороге катастрофы. Ясных магов приносят в жертву в
					ритуалах, нежить прорывается через городские ворота, а Департамент
					защиты ясных скрывает истинную угрозу. <a href='#'>Далее</a>
				</p>

				<p className='info__details'>Объем 400 страниц * 16+</p>
			</div>
		</div>
	)
}
