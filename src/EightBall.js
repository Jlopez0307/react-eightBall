import React, { useState } from 'react';
import eightBallAnswers from './EightBallAnswers';
import './styles/EightBall.css'

const randomChoice = (arr) => {
    const randomAnswer = Math.floor(Math.random() * arr.length);
    return arr[randomAnswer]
}

const EightBall = ({ answers }) => {
    const [answer, setAnswer] = useState({
        msg: 'Think of a question',
        color: 'black'
    });

    const showAnswer = () => {
        setAnswer(randomChoice(answers));
    }

    return (
        <>
            <div className = "EightBall-container">
                <div className="EightBall-answers" onClick={showAnswer} style={{backgroundColor: answer.color}}>
                    <p>{answer.msg}</p>
                </div>
            </div>
        </>
    )
}

export default EightBall