import React from 'react'

const Button = ({ randomAll, randomColor }) => {
    return (
        <div>
            <button onClick={randomAll} style={{ backgroundColor: randomColor }}>&#62;</button>
        </div>
    )
}

export default Button