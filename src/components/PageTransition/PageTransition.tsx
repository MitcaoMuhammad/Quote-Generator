import type { ReactNode } from 'react'
import './PageTransition.css'

interface PageTransitionProps {
	children: ReactNode
	isVisible: boolean
	direction: 'left' | 'right'
}

function PageTransition({
	children,
	isVisible,
	direction,
}: PageTransitionProps) {
	return (
		<div
			className={`page-transition ${isVisible ? 'visible' : ''} ${direction}`}
		>
			{children}
		</div>
	)
}

export default PageTransition
