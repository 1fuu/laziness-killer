import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from 'pages';

const Navigation: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Main />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
