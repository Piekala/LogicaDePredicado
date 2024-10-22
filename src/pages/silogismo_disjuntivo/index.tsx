import React, { useState } from 'react';
import { silogismo_disjuntivo } from '../../logic/inferencia'; // Importa a função silogismo_disjuntivo do arquivo de funções lógicas
import { useNavigate } from 'react-router-dom';

const SilogismoDisjuntivo: React.FC = () => {
    const [p1, setP1] = useState(''); // Proposição P1
    const [p2, setP2] = useState(''); // Proposição P2
    const [q, setQ] = useState(''); // Proposição Q
    const [result, setResult] = useState(''); // Resultado da inferência
    const [isTestDone, setIsTestDone] = useState(false);
    const navigate = useNavigate();

    // Função para realizar o Silogismo Disjuntivo
    const handleSilogismoDisjuntivo = () => {
        const result = silogismo_disjuntivo(p1, q, p2, 'v');
        setResult(result);
        setIsTestDone(true);
    };

    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/dileCons'); // Navega para a próxima página
        }
    };

    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Silogismo Disjuntivo</h1>
            </header>

            {/* Explicação sobre Silogismo Disjuntivo */}
            <div style={containerStyle}>
                <h2>Entenda o Silogismo Disjuntivo</h2>
                <p>
                    O Silogismo Disjuntivo é uma regra de inferência lógica que afirma: se "P ou Q" (P v Q) é verdadeiro e "não P" (~P) é verdadeiro, então podemos concluir que "Q" é verdadeiro.
                </p>

                {/* Formulário para realizar o teste */}
                <div style={quizStyle}>
                    <h3>Teste o Silogismo Disjuntivo</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleSilogismoDisjuntivo(); }}>
                        <div>
                            <label>Proposição P:</label>
                            <input 
                                type="text" 
                                value={p1} 
                                onChange={(e) => setP1(e.target.value)} 
                                placeholder="Digite a proposição P1" 
                                required 
                            />
                        </div>
                        <div>
                            <label>Proposição Q:</label>
                            <input 
                                type="text" 
                                value={q} 
                                onChange={(e) => setQ(e.target.value)} 
                                placeholder="Digite a proposição Q" 
                                required 
                            />
                        </div>
                        <div>
                            <label>Negação P:</label>
                            <input 
                                type="text" 
                                value={p2} 
                                onChange={(e) => setP2(e.target.value)} 
                                placeholder="Digite a proposição P2" 
                                required 
                            />
                        </div>
                        
                        <button type="submit">Ver Resultado</button>
                    </form>

                    {/* Exibição do Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p1} v {q}</p>
                            <p>{p2}</p>
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

export default SilogismoDisjuntivo;
