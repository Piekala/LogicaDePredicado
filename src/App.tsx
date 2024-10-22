import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simplificacao from './pages/simplificacao';
import Adicao from './pages/adicao';
import Conjuncao from './pages/conjuncao';
import Ponens from './pages/ponens';
import Tollens from './pages/tollens';
import SilogismoHipotetico from './pages/silogismo_hipotetico';
import SilogismoDisjuntivo from './pages/silogismo_disjuntivo';
import DilemaConstrutivo from './pages/dilema_construtivo';
import DilemaDestrutivo from './pages/dilema_destrutivo';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Simplificacao />} />
                <Route path="/adicao" element={<Adicao />} />
                <Route path="/conjuncao" element={<Conjuncao />} />
                <Route path="/ponens" element={<Ponens />} />
                <Route path="/tollens" element={<Tollens />} />
                <Route path="/siloHipo" element={<SilogismoHipotetico />} />
                <Route path="/siloDisju" element={<SilogismoDisjuntivo />} />
                <Route path="/dileCons" element={<DilemaConstrutivo />} />
                <Route path="/dileDest" element={<DilemaDestrutivo />} />

            </Routes>
        </Router>
    );
};

export default App;
