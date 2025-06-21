import { useForm } from 'react-hook-form'
import './ModalQuoteForm.css'

type QuoteFormData = {
	text: string
	author: string
}

interface ModalQuoteFormProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: QuoteFormData) => void
}

function ModalQuoteForm({ isOpen, onClose, onSubmit }: ModalQuoteFormProps) {
	const { register, handleSubmit, reset } = useForm<QuoteFormData>()

	const handleFormSubmit = (data: QuoteFormData) => {
		onSubmit(data)
		reset()
		onClose()
	}

	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<button className='modal-close' onClick={onClose}>
					×
				</button>
				<h2>Add New Quote</h2>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div className='form-group'>
						<label htmlFor='text'>Quote</label>
						<textarea
							id='text'
							{...register('text', { required: true })}
							placeholder='Enter your quote'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='author'>Author</label>
						<input
							type='text'
							id='author'
							{...register('author', { required: true })}
							placeholder='Enter author name'
						/>
					</div>

					<div className='modal-actions'>
						<button type='submit' className='submit-button'>
							Add Quote
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ModalQuoteForm
