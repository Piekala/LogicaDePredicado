import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navegação entre páginas
import { conjuncao } from '../../logic/inferencia';

const Conjuncao: React.FC = () => {
    const [p, setP] = useState(''); // Proposição P
    const [q, setQ] = useState(''); // Proposição Q
    const [result, setResult] = useState(''); // Resultado da conjunção
    const [isTestDone, setIsTestDone] = useState(false); // Controle para saber se o teste foi concluído
    const navigate = useNavigate(); // Hook para navegação

    // Função para realizar a conjunção lógica
    const handleConjuncao = () => {
        const posConjuncao = conjuncao(p,q); // Exemplo básico de conjunção
        setResult(posConjuncao);
        setIsTestDone(true); // Marcar que o teste foi feito
    };

    // Navegar para a próxima página quando o teste for concluído
    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/ponens'); 
        }
    };

    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Conjunção Lógica</h1>
            </header>

            {/* Explicação da Conjunção */}
            <div style={containerStyle}>
                <h2>Entenda a Conjunção</h2>
                <p>
                    A conjunção lógica é uma operação que resulta verdadeira apenas quando ambas as proposições são
                    verdadeiras. Se temos "P ∧ Q", o resultado será verdadeiro se tanto "P" quanto "Q" forem verdadeiros.
                </p>

                {/* Formulário de Teste */}
                <div style={quizStyle}>
                    <h3>Teste a Conjunção</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleConjuncao(); }}>
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
                        <button type="submit">Ver Conjunção</button>
                    </form>

                    {/* Exibição do Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p}</p>
                            <p>{q}</p>
                            <h4>Resultado :- {result}</h4>
                        </div>
                    )}
                </div>

                {/* Botão para navegar */}
                <div style={buttonContainerStyle}>
                    <button 
                        onClick={handleNavigation} 
                        disabled={!isTestDone} // O botão só habilita após o teste
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

export default Conjuncao;
