import { useState, useEffect } from 'react'
import './App.css'
import IconButton from './components/iconButtons/IconButtons'
import QuoteBox from './components/QuoteBox/QuoteBox'
import MyQuote from './page/MyQuote/MyQuote'
import PageTransition from './components/PageTransition/PageTransition'

type Quote = {
	text: string
	author: string
	date: string
}

function App() {
	const [currentPage, setCurrentPage] = useState<'home' | 'myquote'>('home')
	const [savedQuotes, setSavedQuotes] = useState<Quote[]>([])
	const [currentQuote, setCurrentQuote] = useState<Quote>({
		text: 'Click the random button to see your saved quotes',
		author: 'Quote Generator',
		date: new Date().toLocaleDateString(),
	})
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		setIsTransitioning(true)
	}, [currentPage])

	const handleQuoteIconClick = () => {
		setCurrentPage(currentPage === 'home' ? 'myquote' : 'home')
	}

	const handleRandomQuote = () => {
		if (savedQuotes.length > 0) {
			const randomIndex = Math.floor(Math.random() * savedQuotes.length)
			setCurrentQuote(savedQuotes[randomIndex])
		}
	}

	return (
		<div className='app'>
			<div
				className={`quote-icon ${currentPage === 'myquote' ? 'rotated' : ''}`}
			>
				<IconButton
					icon='quote.svg'
					alt='Navigation icon'
					onClick={handleQuoteIconClick}
				/>
			</div>

			<PageTransition
				isVisible={currentPage === 'home'}
				direction={currentPage === 'home' ? 'left' : 'right'}
			>
				<QuoteBox
					quote={currentQuote}
					onRandomClick={handleRandomQuote}
					hasQuotes={savedQuotes.length > 0}
				/>
			</PageTransition>

			<PageTransition
				isVisible={currentPage === 'myquote'}
				direction={currentPage === 'home' ? 'right' : 'left'}
			>
				<MyQuote
					quotes={savedQuotes}
					onQuoteAdd={quote => setSavedQuotes([...savedQuotes, quote])}
					onQuoteDelete={index => {
						setSavedQuotes(savedQuotes.filter((_, i) => i !== index))
					}}
				/>
			</PageTransition>
		</div>
	)
}

export default App
