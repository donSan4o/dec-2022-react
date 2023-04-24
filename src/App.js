import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Home from './components/home/Home';
import Todos from './components/todos/Todos';
import Albums from './components/albums/Albums';
import CommentDetails from './components/comments-details/CommentDetails';

function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/todos'}>Todos</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>Albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>Comments</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':id'} element={<CommentDetails/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
