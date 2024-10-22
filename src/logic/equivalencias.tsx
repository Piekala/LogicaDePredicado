// Dupla Negação: p <-> ~~p
export function dupla_negacao( p: string ) : string {
    return '~~' + p;
}

// Implicação Material: p -> q <-> ~p v q
export function implicacao_material( p: string, q: string, simbol: string ) : string {
    if (simbol.includes('->'))
        return '~' + p + 'v' + q;
    if (simbol.includes('v'))
        return p.replace('~', '') + '->' + q;
    return '';
}

// Contraposição: p -> q <-> ~q -> ~p
export function contraposição( p: string, q: string ) : string {
    if(!p.includes('~') && !q.includes('~'))
        return '~' + q + '->' + '~' + p;
    
    p.replace('\~', '')
    q.replace('\~', '')
    return q + '->' + p;
        
}

// Absorção: p v (p ∧ q) <-> p; p ∧ (p v q) <-> p
export function absorcao( p: string, q: string, simbol: string ) : string {
    if (simbol.includes('v'))
        return p;
    if (simbol.includes('∧'))
        return p;
    return '';
}

// Lei de Morgan: ~(p ∧ q) <-> ~p v ~q; ~(p v q) <-> ~p ∧ ~q
export function lei_de_morgan( p: string, q: string, simbol: string ) : string {
    if (simbol.includes('∧'))
        return '~' + p + 'v' + '~' + q;
    if (simbol.includes('v'))
        return '~' + p + '∧' + '~' + q;
    return '';
}

// Comutatividade: p v q <-> q v p; p ∧ q <-> q ∧ p
export function comutatividade( p: string, q: string, simbol: string ) : string {
    if (simbol.includes('v') || simbol.includes('∧'))
        return q + simbol + p;
    return '';
}

// Associatividade: (p v (q v r)) <-> ((p v q) v r); (p ∧ (q ∧ r)) <-> ((p ∧ q) ∧ r)
export function associatividade( p: string, q: string, r: string, simbol: string ) : string {
    if (simbol.includes('v') || simbol.includes('∧'))
        return '(' + p + simbol + q + ')' + simbol + r;
    return '';
}

// Distribuição: p ∧ (q v r) <-> (p ∧ q) v (p ∧ r); p v (q ∧ r) <-> (p v q) ∧ (p v r)
export function distribuicao( p: string, q: string, r: string, simbol: string ) : string {
    if (simbol.includes('∧'))
        return '(' + p + '∧' + q + ')' + 'v' + '(' + p + '∧' + r + ')';
    if (simbol.includes('v'))
        return '(' + p + 'v' + q + ')' + '∧' + '(' + p + 'v' + r + ')';
    return '';
}


