import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Flashcard.css'

function Flashcard({ flashcard }) {
    return (
        <div className="flashcard">
        <div className="front">
            {flashcard.term}
        </div>
        <div className="back">
            {flashcard.definition}
        </div>
        </div>
    );
}
  
export default Flashcard;