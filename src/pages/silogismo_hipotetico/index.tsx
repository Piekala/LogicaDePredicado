import React, { useState } from 'react';
import { silogismo_hipotetico } from '../../logic/inferencia'; // Importa a função silogismo_hipotetico do arquivo de funções lógicas
import { useNavigate } from 'react-router-dom';

const SilogismoHipotetico: React.FC = () => {
    const [p1, setP1] = useState(''); // Proposição P1
    const [q1, setQ1] = useState(''); // Proposição Q1
    const [q2, setQ2] = useState(''); // Proposição Q2
    const [r, setR] = useState(''); // Proposição R
    const [result, setResult] = useState(''); // Resultado da inferência
    const [isTestDone, setIsTestDone] = useState(false);
    const navigate = useNavigate();

    // Função para realizar o Silogismo Hipotético
    const handleSilogismoHipotetico = () => {
        const result = silogismo_hipotetico(p1, q1, q2, r, '->', '->');
        setResult(result);
        setIsTestDone(true);
    };

    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/siloDisju'); // Navega para a próxima página
        }
    };

    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Silogismo Hipotético</h1>
            </header>

            {/* Explicação sobre Silogismo Hipotético */}
            <div style={containerStyle}>
                <h2>Entenda o Silogismo Hipotético</h2>
                <p>
                    O Silogismo Hipotético é uma regra de inferência lógica que afirma: se "P implica Q" (P -{'>'} Q) e "Q implica R" (Q -{'>'} R), então podemos concluir que "P implica R" (P -{'>'} R).
                </p>

                {/* Formulário para realizar o teste */}
                <div style={quizStyle}>
                    <h3>Teste o Silogismo Hipotético</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleSilogismoHipotetico(); }}>
                        <div>
                            <label>Proposição P1:</label>
                            <input 
                                type="text" 
                                value={p1} 
                                onChange={(e) => setP1(e.target.value)} 
                                placeholder="Digite a proposição P1" 
                                required 
                            />
                        </div>
                        <div>
                            <label>Proposição Q1:</label>
                            <input 
                                type="text" 
                                value={q1} 
                                onChange={(e) => setQ1(e.target.value)} 
                                placeholder="Digite a proposição Q1" 
                                required 
                            />
                        </div>
                        <div>
                            <label>Proposição Q2:</label>
                            <input 
                                type="text" 
                                value={q2} 
                                onChange={(e) => setQ2(e.target.value)} 
                                placeholder="Digite a proposição Q2" 
                                required 
                            />
                        </div>
                        <div>
                            <label>Proposição R:</label>
                            <input 
                                type="text" 
                                value={r} 
                                onChange={(e) => setR(e.target.value)} 
                                placeholder="Digite a proposição R" 
                                required 
                            />
                        </div>
                        
                        <button type="submit">Ver Resultado</button>
                    </form>

                    {/* Exibição do Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p1} -&gt; {q1}</p>
                            <p>{q1} -&gt; {r}</p>
                            <h4>Resultado: {result} </h4>
                        </div>
                    )}
                </div>

                <div style={buttonContainerStyle}>
                    <button 
                        onClick={handleNavigation} 
                        disabled={!isTestDone} // O botão só é habilitado após o teste ser realizado
                        style={buttonStyle}
                    >
                        Próxima Página
                    </button>
                </div>
            </div>
        </div>
    );
};

// Estilos da página
const headerStyle: React.CSSProperties = {
    backgroundColor: '#343a40',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '800px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const quizStyle: React.CSSProperties = {
    marginTop: '20px',
};

const resultStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #007bff',
    borderRadius: '8px',
    backgroundColor: '#e9f5ff',
};

const buttonContainerStyle: React.CSSProperties = {
    marginTop: '20px',
    textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    opacity: '1',
    transition: 'opacity 0.3s',
};

export default SilogismoHipotetico;
