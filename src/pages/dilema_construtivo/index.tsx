import React, { useState } from 'react';
import { dilema_construtivo } from '../../logic/inferencia'; // Importa a função dilema_construtivo do arquivo de funções lógicas
import { useNavigate } from 'react-router-dom';

const DilemaConstrutivo: React.FC = () => {
    const [p1, setP1] = useState(''); // Proposição P1
    const [q1, setQ1] = useState(''); // Proposição Q1
    const [p2, setP2] = useState(''); // Proposição P2
    const [q2, setQ2] = useState(''); // Proposição Q2
    const [r, setR] = useState(''); // Conclusão R
    const [result, setResult] = useState(''); // Resultado da inferência
    const [isTestDone, setIsTestDone] = useState(false);
    const navigate = useNavigate();

    // Função para realizar o Dilema Construtivo
    const handleDilemaConstrutivo = () => {
        const result = dilema_construtivo(p1, q1, p2, q2, '->', '->', 'v');
        setResult(result);
        setIsTestDone(true);
    };

    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/dileDest'); // Navega para a próxima página
        }
    };

    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Dilema Construtivo</h1>
            </header>

            {/* Explicação sobre Dilema Construtivo */}
            <div style={containerStyle}>
                <h2>Entenda o Dilema Construtivo</h2>
                <p>
                    O Dilema Construtivo é uma regra de inferência lógica que afirma: se "P1 implica Q1" (P1 -{'>'} Q1) e "P2 implica Q2" (P2 -{'>'} Q2), e se "P1 ou P2" (P1 v P2) é verdadeiro, então podemos concluir que "Q1 ou Q2" (Q1 v Q2) é verdadeiro.
                </p>

                {/* Formulário para realizar o teste */}
                <div style={quizStyle}>
                    <h3>Teste o Dilema Construtivo</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleDilemaConstrutivo(); }}>
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
                            <label>Proposição P2:</label>
                            <input 
                                type="text" 
                                value={p2} 
                                onChange={(e) => setP2(e.target.value)} 
                                placeholder="Digite a proposição P2" 
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
                        
                        <button type="submit">Ver Resultado</button>
                    </form>

                    {/* Exibição do Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p1} -&gt; {q1}</p>
                            <p>{p2} -&gt; {q2}</p>
                            <p>{p1} v {p2}</p>
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

export default DilemaConstrutivo;
