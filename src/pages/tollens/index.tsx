import React, { useState } from 'react';
import { tollens } from '../../logic/inferencia'; // Importa a função tollens do arquivo de funções lógicas
import { useNavigate } from 'react-router-dom';

const Tollens: React.FC = () => {
    const [p, setP] = useState(''); // Proposição P
    const [q, setQ] = useState(''); // Proposição Q
    const [result, setResult] = useState(''); // Resultado da inferência
    const [isTestDone, setIsTestDone] = useState(false);
    const navigate = useNavigate();

    // Função para realizar o Modus Tollens
    const handleTollens = () => {
        const result = tollens(p, q, '->');
        setResult(result);
        setIsTestDone(true);
    };

    const handleNavigation = () => {
        if (isTestDone) {
            navigate('/siloHipo'); // Navega para a página da adição
        }
    };
    return (
        <div>
            {/* Header */}
            <header style={headerStyle}>
                <h1>Modus Tollens</h1>
            </header>

            {/* Explicação sobre Modus Tollens */}
            <div style={containerStyle}>
                <h2>Entenda o Modus Tollens</h2>
                <p>
                    O Modus Tollens é uma regra de inferência lógica que afirma: se "P implica Q" (P -{'>'} Q) é verdadeiro e "Q" é falso, então podemos concluir que "P" também é falso.
                </p>

                {/* Formulário para realizar o teste */}
                <div style={quizStyle}>
                    <h3>Teste o Modus Tollens</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleTollens(); }}>
                        <div>
                            <label>Proposição P:</label>
                            <input 
                                type="text" 
                                value={p} 
                                onChange={(e) => setP(e.target.value)} 
                                placeholder="Digite a proposição P" 
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
                        
                        <button type="submit">Ver Resultado</button>
                    </form>

                    {/* Exibição do Resultado */}
                    {result && (
                        <div style={resultStyle}>
                            <p>{p} -&gt; {q}</p>
                            <p>~{q}</p>
                            <h4>Resultado :- {result} </h4>
                        </div>
                    )}
                </div>

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

export default Tollens;
