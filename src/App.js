import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { CharacterPage } from './pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route index element={<Navigate to={'characters'} />} />
                    <Route path={'characters'} element={<CharacterPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
