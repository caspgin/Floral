import './App.css';
import { Layout } from './pages/layout';
import { Landing } from './pages/landing';
import { Gallery } from './pages/gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router basename="/floral">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
