//Esto es una implementación del algoritmo Shunting yard 

class Calculation {

    constructor() {
        this._symbols = {};
        this.defineOperator("^", Math.pow,            "infix",   5, true);
        this.defineOperator("*", this.multiplication, "infix",   4);
        this.defineOperator("/", this.division,       "infix",   4);
        this.defineOperator("+", this.last,           "prefix",  3);
        this.defineOperator("-", this.negation,       "prefix",  3);
        this.defineOperator("+", this.addition,       "infix",   2);
        this.defineOperator("-", this.subtraction,    "infix",   2);
        this.defineOperator(",", Array.of,            "infix",   1);
        this.defineOperator("(", this.last,           "prefix");
        this.defineOperator(")", null,                "postfix");
    }

    // Método que permite ampliar una instancia con más operadores y funciones:
    defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {
        // Almacenar los operadores por su símbolo/nombre. Algunos símbolos pueden representar
        // diferentes usos: por ejemplo, "-" puede ser unario o binario, por lo que también
        // se clasifican por su notación (prefix, infix, postfix, func):
        if (notation === "func") precedence = 0;
        this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
            [notation]: {
                symbol, f, notation, precedence, rightToLeft, 
                argCount: 1 + (notation === "infix")
            },
            symbol,
            regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                + (/\w$/.test(symbol) ? "\\b" : "") // añadir un break si es un nombre
        });
    }
    last(...a)           { return a[a.length-1] }
    negation(a)          { return -a }
    addition(a, b)       { return a + b }
    subtraction(a, b)    { return a - b }
    multiplication(a, b) { return a * b }
    division(a, b)       { return a / b }
    factorial(a) {
        if (a%1 || !(+a>=0)) return NaN
        if (a > 170) return Infinity;
        let b = 1;
        while (a > 1) b *= a--;
        return b;
    }
    calculate(expression) {

        let match;

        const values = [],
            operators = [this._symbols["("].prefix],
            exec = _ => {
                let op = operators.pop();
                values.push(op.f(...[].concat(...values.splice(-op.argCount))));
                return op.precedence;
            },
            error = msg => {
                let notation = match ? match.index : expression.length;
                return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
            },
            pattern = new RegExp(
                // Patrón para los números
                "\\d+(?:\\.\\d+)?|" 
                // ...y patrones para operadores individuales/nombres de funciones
                + Object.values(this._symbols)
                        // los símbolos más largos deben aparecer en primer lugar
                        .sort( (a, b) => b.symbol.length - a.symbol.length ) 
                        .map( val => val.regSymbol ).join('|')
                + "|(\\S)", "g"
            );

        let afterValue = false;
        pattern.lastIndex = 0; // Reiniciar el objeto de expresión regular

        do {
            match = pattern.exec(expression);

            const [token, bad] = match || [")", undefined],
                notNumber = this._symbols[token],
                notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
                notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;

            // Comprobar si hay errores de sintaxis:
            if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error");

            if (afterValue) {
                // Tenemos un operador infix o postfix (deben ser mutuamente excluyentes)
                const curr = notNumber.postfix || notNumber.infix;

                do {
                    const prev = operators[operators.length-1];
                    if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break; 
                    // Aplicar el operador anterior, ya que tiene prioridad sobre el actual

                } while (exec()); // Salir del loop después de ejecutar un paréntesis de apertura o una función
                afterValue = curr.notation === "postfix";

                if (curr.symbol !== ")") {
                    operators.push(curr);
                    // Postfix siempre tiene precedencia por encima de cualquier operador que lo siga
                    if (afterValue) exec();
                }

            } else if (notNumber) { // prefix operador o function
                operators.push(notNumber.prefix || notNumber.func);

                if (notNumber.func) { // Necesita un paréntesis de inicio
                    match = pattern.exec(expression);
                    if (!match || match[0] !== "(") return error("La función necesita paréntesis")
                }

            } else { // Numero
                values.push(+token);
                afterValue = true;
            }
        } while (match && operators.length);

        return operators.length ? error("Falta el paréntesis de cierre")
                : match ? error("Demasiados paréntesis")
                : values.pop() // Terminado
    }
}
Calculation = new Calculation(); // Creando un singleton

// Manejo de I/O 
function perform() {
    const expr = document.getElementById('expr').value;
    let result = '0';
        if(expr > 30) result = "El tamaño no puede ser mayor que 30";

        else result = Calculation.calculate(expr);
    document.getElementById('out').textContent = isNaN(result) ? result : '=' + result;
}
document.getElementById('expr').addEventListener('input', perform);

//perform();

// Pruebas
const tests = [
    { expr: '1+2', expected: 3 },
    { expr: '1+2*3', expected: 7 },
    { expr: '1+2*3^2', expected: 19 },
    { expr: '1+2*2^3^2', expected: 1025 },
    { expr: '-3!', expected: -6 },
    { expr: '12---11+1-3', expected: -1 },
    { expr: '(2,1,3)', expected: 3 },
    { expr: '2,3,10', expected: 10 }
]

for (let {expr, expected} of tests) {
    let result = Calculation.calculate(expr);
    console.assert(result === expected, `${expr} debería ser ${expected}, pero devuelve ${result}`);
}
