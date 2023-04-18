import { useState } from 'react';
import './App.css';
import Posts from './components/posts/Posts';
import FullPostInfo from './components/fullPostInfo/FullPostInfo';
import Launches from './components/launches/Launches';

const App = () => {
    let [choosenPost, setChoosenPost] = useState(null)
    const lift = (obj) => {
        setChoosenPost({...obj})
    };
    return (
        <div>
            <div className="container">
                <Posts lift={lift} />
                {
                    choosenPost &&
                    <div className="right">
                        <FullPostInfo value={choosenPost}/>
                    </div>
                }
            </div>
            <Launches/>
        </div>
    );
};

export default App;
