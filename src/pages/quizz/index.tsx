import React, { useState } from 'react';
import {
  simplificacao,
  adicao,
  conjuncao,
  ponens,
  tollens,
  silogismo_hipotetico,
  silogismo_disjuntivo,
  dilema_construtivo,
  dilema_destrutivo,
} from '../../logic/inferencia';

interface QuizProps {
  premissasIniciais: string[];
  conclusao: string;
}

const regras = ['Simplificação', 'Adição', 'Conjunção', 'Modus Ponens', 'Modus Tollens', 'Silogismo Hipotético', 'Silogismo Disjuntivo', 'Dilema Construtivo', 'Dilema Destrutivo'];


const Quiz: React.FC<QuizProps> = ({ premissasIniciais, conclusao }) => {
  const [premissas, setPremissas] = useState<string[]>(premissasIniciais);
  const [selectedPremissas, setSelectedPremissas] = useState<string[]>([]);
  const [selectedRule, setSelectedRule] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');


  // Função para aplicar a regra selecionada
  const aplicarRegra = () => {

    let novoResultado = '';

    // Aplicar a regra de acordo com os parâmetros necessários
    if (1) {
        // Simplificação: p ∧ q <-> p
        if (selectedRule === 'Simplificação') {
            novoResultado = simplificacao(selectedPremissas[0].split('∧')[0], selectedPremissas[0].split('∧')[1], selectedPremissas[0].includes('∧'));
        }
        
        // Adição: p <-> p v q
        else if (selectedRule === 'Adição') {
            novoResultado = adicao(selectedPremissas[0], selectedPremissas[1]);
        }
        
        // Conjunção: p, q <-> p ∧ q
        else if (selectedRule === 'Conjunção') {
            novoResultado = conjuncao(selectedPremissas[0], selectedPremissas[1]);
        }
        
        // Modus Ponens: p -> q, p <-> q
        else if (selectedRule === 'Modus Ponens') {
            if (selectedPremissas.length >= 2) {
                novoResultado = ponens(selectedPremissas[0].substring(0,selectedPremissas[0].indexOf('-')-1), selectedPremissas[0].substring(selectedPremissas[0].indexOf('>')+1), '->');
            }
        }
        
        // Modus Tollens: p -> q, ~q <-> ~p
        else if (selectedRule === 'Modus Tollens') {
            if (selectedPremissas.length >= 2) {
                novoResultado = tollens(selectedPremissas[0], selectedPremissas[1], selectedPremissas[0].includes('->'));
            }
        }
        
        // Silogismo Hipotético: p -> q, q -> r <-> p -> r
        else if (selectedRule === 'Silogismo Hipotético') {
            if (selectedPremissas.length >= 2) {
                novoResultado = silogismo_hipotetico(selectedPremissas[0].split('->')[0], selectedPremissas[0].split('->')[1], selectedPremissas[1].split('->')[0], selectedPremissas[1].split('->')[1], selectedPremissas[0].includes('->'), selectedPremissas[1].includes('->'));
            }
        }
        
        // Silogismo Disjuntivo: p v q, ~q <-> p
        else if (selectedRule === 'Silogismo Disjuntivo') {
            if (selectedPremissas.length >= 2) {
                novoResultado = silogismo_disjuntivo(selectedPremissas[0], selectedPremissas[1], '~' + selectedPremissas[1], 'v');
            }
        }
        
        // Dilema Construtivo: p -> q, r -> s, p v r <-> q v s
        else if (selectedRule === 'Dilema Construtivo') {
            if (selectedPremissas.length >= 4) {
                novoResultado = dilema_construtivo(selectedPremissas[0], selectedPremissas[1], selectedPremissas[2], selectedPremissas[3], '->', '->', 'v');
            }
        }
        
        // Dilema Destrutivo: p -> q, r -> s, ~q, ~s <-> ~p v ~r
        else if (selectedRule === 'Dilema Destrutivo') {
            if (selectedPremissas.length >= 4) {
                novoResultado = dilema_destrutivo(selectedPremissas[0], selectedPremissas[1], selectedPremissas[2], selectedPremissas[3], '~' + selectedPremissas[1] + '~' + selectedPremissas[3], '->', '->', 'v');
            }
        }
    }
    
    
    

    if (novoResultado) {
        if(!premissas.includes(novoResultado))
            setPremissas([...premissas, novoResultado]); // Adiciona a nova premissa gerada
        if (novoResultado === conclusao) {
            setResultado('Conclusão válida alcançada!');
        } else {
            setResultado('Nova premissa gerada: ' + novoResultado);
        }
    } else {
        setResultado('A regra selecionada não pôde ser aplicada.');
    }
};



  // Função para resetar o quiz
  const resetQuiz = () => {
    setPremissas(premissasIniciais);
    setSelectedPremissas([]);
    setSelectedRule('');
    setResultado('');
  };

  return (
    <div>
      <h2>Quiz de Lógica</h2>
      <h3>Premissas:</h3>
      <ul>
        {premissas.map((premissa, index) => (
          <li key={index}>{premissa}</li>
        ))}
      </ul>
      <h3>Conclusão Proposta: {conclusao}</h3>


      <h3>Selecione uma Regra:</h3>
      <select value={selectedRule} onChange={e => setSelectedRule(e.target.value)}>
        <option value="">Selecione uma regra</option>
        {regras.map((regra, index) => (
        <option key={index} value={regra}>
            {regra}
        </option>
    ))}
      </select>

      <h3>Selecione as Premissas:</h3>
      {premissas.map((premissa, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={premissa}
            onChange={e => {
              if (e.target.checked) {
                setSelectedPremissas([...selectedPremissas, premissa]);
              } else {
                setSelectedPremissas(selectedPremissas.filter(p => p !== premissa));
              }
            }}
          />
          {premissa}
        </div>
      ))}

      <button onClick={aplicarRegra}>Aplicar Regra</button>
      <button onClick={resetQuiz}>Resetar Quiz</button>

      <h3>Resultado:</h3>
      <p>{resultado}</p>
    </div>
  );
};

export default Quiz;
