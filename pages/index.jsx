import { useState } from 'react';

// Performing object destructuring with {} to explicitly name the props
function Header({ title }) {
    // Terniary operators (example)
    return (<h1>{title ? title : 'Hello World!'}</h1>);
}

// Using props without object destructuring (example)
function Header2(props) {
    return (<h1>{props.title}</h1>);
}

export default function HomePage() {
    // React State Management 
    const [likes, setLikes] = useState(0);

    // To implement data interation
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    // Handling button click
    function handleClick(){
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <Header2 title="Hello Vignnesh!" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}