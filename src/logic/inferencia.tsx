// Simplificação: p ∧ q <-> p
export function simplificacao(p: string, q: string, simbol: string): string {
    // Se o símbolo for uma conjunção (∧), retorna o primeiro termo (p)
    if (simbol === '∧')
        return p;

    return '';
}

export function limpa_premissa(p: string): string {

    //verifica a existencia de parenteses na premissa
    if( p.includes( '(' ) || p.includes( ')' ) ){

        p = p.replace( '(', '' ); // remove parenteses à esquerda
        p = p.replace( ')', '' ); // remove parenteses à direita
        return p;                  //retorna premissa sem parenteses

    }

    return ''
}

// Adição: p <-> p v q
export function adicao(p: string, q: string): string {
    // Retorna a disjunção de p com q (p v q)
    return p + 'v' + q;
}

// Conjunção: p, q <-> p ∧ q
export function conjuncao(p: string, q: string): string {
    // Retorna a conjunção de p com q (p ∧ q)
    return p + '∧' + q;
}

// Modus Ponens: p -> q, p <-> q
export function ponens(p: string, q: string, simbol: string): string {
    // Se o símbolo for uma implicação (->), retorna q
    if (simbol === '->')
        return q;
    return '';
}

// Modus Tollens: p -> q, ~q <-> ~p
export function tollens(p: string, q: string, simbol: string): string {
    // Se o símbolo for uma implicação (->), retorna a negação de p (~p)
    if (simbol === '->')
        return '~' + p;
    return '';
}

// Silogismo Hipotético: p -> q, q -> r <-> p -> r
export function silogismo_hipotetico(p1: string, q1: string, q2: string, r: string, simbol1: string, simbol2: string): string {
    // Se q1 == q2 e ambas as relações forem implicações (->), retorna p1 -> r
    if (q1 === q2 && simbol1 === '->' && simbol2 === '->')
        return p1 + '->' + r;
    return '';
}

// Silogismo Disjuntivo: p v q, ~q <-> p
export function silogismo_disjuntivo(p: string, q: string, negacao: string, simbol: string): string {
    // Se o símbolo for disjunção (v) e o segundo termo for negado (~q), retorna a negação de p (~p)
    if (simbol !== 'v')
        return '';
    if( negacao.includes('~' + p))
        return q
        
    return p
}

// Dilema Construtivo: p -> q, r -> s, p v r <-> q v s
export function dilema_construtivo(p: string, q: string, r: string, s: string, simbol1: string, simbol2: string, simbol3: string): string {
    // Verifica se as duas primeiras relações são implicações (->) e a última é disjunção (v)
    if (simbol1 !== '->' || simbol2 !== '->' || simbol3 !== 'v')
        return '';
    // Se as premissas forem p v r, retorna q v s
    return q + 'v' + s;
}

// Dilema Destrutivo: p -> q, r -> s, ~q v ~s <-> ~p v ~r
export function dilema_destrutivo(p: string, q: string, r: string, s: string, negacao_q_s: string, simbol1: string, simbol2: string, simbol3: string): string {
    // Verifica se as duas primeiras relações são implicações (->) e a última é disjunção (v)
    if (simbol1 !== '->' || simbol2 !== '->' || simbol3 !== 'v')
        return '';
    // Verifica se as negações envolvem ~q ou ~s, retornando ~p v ~r
    if (negacao_q_s.includes('~' + q) && negacao_q_s.includes('~' + s))
        return ( '~' + p + 'v~' + r );
    return '';
}