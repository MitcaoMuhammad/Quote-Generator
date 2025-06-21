import './IconButtons.css'

type IconButtonProps = {
	icon: string
	alt?: string
	onClick?: () => void
}

function IconButton({ icon, alt = '', onClick }: IconButtonProps) {
	return (
		<button onClick={onClick} className='icon-button'>
			<img src={icon} alt={alt} className='icon-image' />
		</button>
	)
}

export default IconButton
