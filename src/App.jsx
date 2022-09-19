import { useState } from 'react'
import './App.css'
import quotes from '../quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div className="App" style={{ backgroundColor: randomColor }}>
      <QuoteBox randomQuote={randomQuote} randomColor={randomColor} randomAll={getRandomAll} />
    </div>
  )
}

export default App
