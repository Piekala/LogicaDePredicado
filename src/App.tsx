import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Simplificacao from './pages/simplificacao';
// import Adicao from './pages/adicao';
// import Conjuncao from './pages/conjuncao';
// import Ponens from './pages/ponens';
// import Tollens from './pages/tollens';
// import SilogismoHipotetico from './pages/silogismo_hipotetico';
// import SilogismoDisjuntivo from './pages/silogismo_disjuntivo';
// import DilemaConstrutivo from './pages/dilema_construtivo';
// import DilemaDestrutivo from './pages/dilema_destrutivo';
import Quiz from './pages/quizz'

const App: React.FC = () => (
    <Router>
        <Routes>

            {/* <Route path="/" element={<Simplificacao />} />
            <Route path="/adicao" element={<Adicao />} />
            <Route path="/conjuncao" element={<Conjuncao />} />
            <Route path="/ponens" element={<Ponens />} />
            <Route path="/tollens" element={<Tollens />} />
            <Route path="/siloHipo" element={<SilogismoHipotetico />} />
            <Route path="/siloDisju" element={<SilogismoDisjuntivo />} />
            <Route path="/dileCons" element={<DilemaConstrutivo />} />
            <Route path="/dileDest" element={<DilemaDestrutivo />} /> */}
            <Route path="/quiz" element={<Quiz
                premissasIniciais={[
                    'p->q', // Premissa 1
                    'p', // Premissa 2
                    'q->r',
                    'w∧z',
                    'o->j',
                    '~j'
                    // Premissa 3
                ]}
                conclusao="r" // Conclusão
            />} />

        </Routes>
    </Router>
);

export default App;
