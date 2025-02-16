import { useState, useRef } from 'react' // Добавлен useState
import Header from './components/Heder/Header.jsx'
import './App.css'
import InfoPanel from './components/layouts@/InfoPanel/InfoPanel.jsx'
import NewFoto from './components/layouts@/New Foto/NewFoto.jsx'
import DescriptionPanel from './components/layouts@/DiscriptionPanel/DiscriptionPanel.jsx'
import Footer from './components/layouts@/footer/footer.jsx'
import GalaryPanel from './components/layouts@/GalaryPanel/GalaryPanel.jsx'

function App() {
	const [tab, setTab] = useState('main') 

	const discRef = useRef(null)

	const offsets = {
		dis: -100,
	}

	const handleScroll = (ref, panel) => {
		if (ref && ref.current) {
			const yOffset = offsets[panel] || 0
			const yPosition =
				ref.current.getBoundingClientRect().top + window.scrollY + yOffset
			window.scrollTo({ top: yPosition, behavior: 'smooth' })
		}
	}

	return (
		<>
			<Header active={tab} onChange={setTab} />

			{tab === 'main' && (
				<>
					<InfoPanel scrollDis={handleScroll} refs={{ discRef }} />
					<NewFoto />
					<div ref={discRef}>
						<DescriptionPanel />
					</div>
				</>
			)}

			{tab === 'galary' && <GalaryPanel />}

			<Footer />
		</>
	)
}

export default App
