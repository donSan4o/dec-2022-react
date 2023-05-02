import { useReducer, useState } from 'react';
import './App.css';
import Users from './components/Users';
import Comments from './components/Comments';

const initialState = {
    cats: [],
    dogs: [],
};

const baseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return { ...state, cats: [...state.cats, action.payload] };
        case 'ADD_DOG':
            return { ...state, dogs: [...state.dogs, action.payload] };
        // case "RESET":
        //   return 0;
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(baseReducer, initialState);
    const [cat, setCat] = useState('');
    const [dog, setDog] = useState('');
    const addCat = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_CAT', payload: cat });
        setCat('');
    };
    const addDog = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_DOG', payload: dog });
        setDog('');
    };
    // const res = () => {
    //   dispatch({type: 'RESET'})
    // }
    return (
        <div>
            <Users />
            <Comments />
            <div>
                <form onSubmit={addCat}>
                    <input
                        type="text"
                        placeholder="add cat"
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <button type='submit'>Add Cat</button>
                </form>
                <form onSubmit={addDog}>
                    <input
                        type="text"
                        placeholder="add dog"
                        value={dog}
                        onChange={(e) => setDog(e.target.value)}
                    />
                    <button type='submit'>Add Dog</button>
                </form>
            </div>
            <div className="result">
                <div>
                <h3>Cats:</h3>
                <ul>
                    {state.cats.map((cat, index) => (
                        <li key={index}>{cat}</li>
                    ))}
                </ul>
                </div>
                <div>
                    <h3>Dogs:</h3>
                <ul>
                    {state.dogs.map((dog, index) => (
                        <li key={index}>{dog}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
