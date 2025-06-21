import { useState } from 'react'
import './MyQuote.css'
import ModalQuoteForm from '../../components/ModalQuoteForm/ModalQuoteForm'
import IconButton from '../../components/iconButtons/IconButtons'

type Quote = {
	text: string
	author: string
	date: string
}

interface MyQuoteProps {
	quotes: Quote[]
	onQuoteAdd: (quote: Quote) => void
	onQuoteDelete: (index: number) => void
}

function MyQuote({ quotes, onQuoteAdd, onQuoteDelete }: MyQuoteProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddQuote = (data: { text: string; author: string }) => {
		const newQuote = {
			...data,
			date: new Date().toLocaleDateString(),
		}
		onQuoteAdd(newQuote)
		setIsModalOpen(false)
	}

	return (
		<div className='my-quote-container'>
			<button className='add-quote-button' onClick={() => setIsModalOpen(true)}>
				Add Quote
			</button>

			<div className='quotes-list'>
				{quotes
					.map((quote, index) => (
						<div key={index} className='quote-box'>
							<div className='delete-button'>
								<IconButton
									icon='delete.svg'
									alt='Delete quote'
									onClick={() => onQuoteDelete(index)}
								/>
							</div>
							<div className='quote-content'>
								<h1 className='quote'>{quote.text}</h1>
								<div className='quote-footer'>
									<div className='author-date'>
										<p className='author'>{quote.author}</p>
										<p className='date'>{quote.date}</p>
									</div>
								</div>
							</div>
						</div>
					))
					.reverse()}
			</div>

			<ModalQuoteForm
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleAddQuote}
			/>
		</div>
	)
}

export default MyQuote
