import './QuoteBox.css'
import IconButton from '../iconButtons/IconButtons'

interface Quote {
    text: string;
    author: string;
    date?: string;
}

interface QuoteBoxProps {
    quote: Quote;
    onRandomClick: () => void;
    hasQuotes: boolean;
}

function QuoteBox({ quote, onRandomClick, hasQuotes }: QuoteBoxProps) {
    return (
        <div className='quote-box'>
            <div className='quote-container'>
                <h1 className='quote'>{quote.text}</h1>
                <p className='author'>{quote.author}</p>
            </div>
            <div className='quote-footer'>
                <img className='line' src='line.svg' alt='line' />
                <div className='footer-icons'>
                    <IconButton icon='x.svg' alt='Twitter icon' />
                    <IconButton 
                        icon='random.svg' 
                        alt='Random icon' 
                        onClick={onRandomClick}
                    />
                </div>
            </div>
            {!hasQuotes && (
                <div className="no-quotes-message">
                    Add some quotes in My Quotes to use random button
                </div>
            )}
        </div>
    )
}

export default QuoteBox
