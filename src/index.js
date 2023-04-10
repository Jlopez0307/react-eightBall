import React from 'react';
import ReactDOM from 'react-dom/client';
import EightBall from './EightBall';
import eightBallAnswers from './EightBallAnswers';


const App = () => {
    return (
        <>
            <EightBall answers={eightBallAnswers}/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);