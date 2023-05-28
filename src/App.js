import './App.css';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function handleIncClick() {
        setCount(count + 1);
    }

    function handleDecClick() {
        setCount(count - 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>{count}</h1>
                <IncButton onClick={handleIncClick}>Increment</IncButton>
                <DecButton onClick={handleDecClick}>Decrement</DecButton>
            </header>
        </div>
    );
}

function IncButton({ onClick }) {
    return (
        <button onClick={onClick}>
        +
        </button>
    )
}

function DecButton({ onClick }) {
    return (
        <button onClick={onClick}>
        -
        </button>
    )
}
