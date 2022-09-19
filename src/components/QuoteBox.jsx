import React from 'react'
import Button from './Button';

const QuoteBox = ({ randomQuote, randomColor, randomAll }) => {

    return (
        <div className='card' style={{ color: randomColor }}>
            <p>{randomQuote.quote}</p>
            <h1>{randomQuote.author}</h1>
            <Button randomAll={randomAll} randomColor={randomColor} />
        </div>
    )
}

export default QuoteBox