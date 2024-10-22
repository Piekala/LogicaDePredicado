import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação
import { simplificacao } from '../../logic/inferencia';

const Simplificacao: React.FC = () => {
    const [p, setP] = useState('');   // Proposição P
    const [q, setQ] = useState('');   // Proposição Q
    const [result, setResult] = useState('');  // Resultado da simplificação
    const [isTestDone, setIsTestDone] = useState(false);  // Controle para saber se o teste foi concluído
    const navigate = useNavigate();   // Hook de navegação do React Router

    const handleSimplificacao = () => {
        const simbol = '∧';  // Simplificação sempre usa conjunção (∧)
        const simplificado = simplificacao(p, q, simbol);
        setResult(simplificado);
        setIsTestDone(true); // Marcar o teste como concluído
    };

    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/adicao'); // Navega para a página da adição
        }
    };

    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Simplificação Lógica</h1>
            </header>

            {/* Container de Explicação */}
            <div style={containerStyle}>
                <h2>Entenda a Simplificação</h2>
                <p>
                    A simplificação lógica é uma regra que permite reduzir a conjunção de duas proposições à primeira
                    proposição, ou seja, se temos "P ∧ Q", podemos simplificar isso para "P". 
                </p>

                {/* Quiz */}
                <div style={quizStyle}>
                    <h3>Teste de Simplificação</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleSimplificacao(); }}>
                        <div>
                            <label>Proposição P:</label>
                            <input 
                                type="text" 
                                value={p} 
                                onChange={(e) => setP(e.target.value)} 
                                placeholder="Digite P"
                                required 
                            />
                        </div>
                        <div>
                            <label>Proposição Q:</label>
                            <input 
                                type="text" 
                                value={q} 
                                onChange={(e) => setQ(e.target.value)} 
                                placeholder="Digite Q"
                                required 
                            />
                        </div>
                        <button type="submit">Simplificar</button>
                    </form>

                    {/* Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p}∧{q}</p>
                            <h4>Resultado :- {result}</h4>
                        </div>
                    )}
                </div>

                {/* Botão para a próxima página */}
                <div style={buttonContainerStyle}>
                    <button 
                        onClick={handleNavigation} 
                        disabled={!isTestDone} // O botão só é habilitado após o teste de 
                        style={buttonStyle}
                    >
                        Próxima Página
                    </button>
                </div>
            </div>
        </div>
    );
};

// Estilos para o layout
const headerStyle: React.CSSProperties = {
    backgroundColor: '#282c34',
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
    border: '1px solid #4caf50',
    borderRadius: '8px',
    backgroundColor: '#e8f5e9',
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

export default Simplificacao;