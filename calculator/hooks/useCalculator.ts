import { useState, useRef } from 'react';

enum Operator {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/',
    Equal = '=',
    Clear = 'C',
    Delete = 'del',
    ChangeSign = '+/-',
    Decimal = '.',
}

const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [result, setResult] = useState('0');
    const lastOperation = useRef<Operator | null>(null);

    const isOperator = (value: string) =>
        Object.values(Operator).includes(value as Operator);

    const evaluateExpression = (expression: string): string => {
        try {
            // Reemplazar operadores de texto por operadores válidos
            const sanitizedExpression = expression
                .replace(/x/g, '*')
                .replace(/÷/g, '/');
            const calculatedResult = Function(
                `"use strict"; return (${sanitizedExpression})`,
            )();
            return Number(calculatedResult)
                .toFixed(10)
                .replace(/\.?0+$/, ''); // Redondea y elimina ceros innecesarios
        } catch {
            return 'Error';
        }
    };

    const calculateResult = (value: string) => {
        console.log('Calculating result...', value);
        if (isOperator(value[value.length - 1])) {
            console.log('Last character is an operator');
            setResult(eval(value.slice(0, -1)));
            return;
        }
        setResult(eval(value));
    };

    const buildFormula = (value: string) => {
        if (value === Operator.Clear) {
            setFormula('0');
            setResult('0');
            return;
        }

        if (value === Operator.Equal) {
            // if (isOperator(formula[formula.length - 1])) {
            //     setFormula((prev) => prev.slice(0, -1));
            //     setResult(eval(formula.slice(0, -1)));
            //     return;
            // }
            // setResult(eval(formula));
            // return;}
            setFormula(String(result));
            return;
        }

        if (value === Operator.Delete) {
            setFormula((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
            return;
        }

        if (value === Operator.Decimal) {
            const lastNumber = formula.split(/[\+\-\*\/]/).pop() || '';
            if (lastNumber.includes('.')) return;
            setFormula((prev) => prev + value);
            return;
        }

        if (value === Operator.ChangeSign) {
            setFormula((prev) =>
                prev.startsWith('-') ? prev.slice(1) : `-${prev}`,
            );
            return;
        }
        console.log('formula', formula);
        // Si el último carácter es un operador y el nuevo valor también lo es, reemplazarlo
        if (isOperator(value) && isOperator(formula?.slice(-1))) {
            setFormula((prev) => prev.slice(0, -1) + value);
            return;
        }

        // Evitar múltiples ceros al inicio
        if (value === '0' && formula === '0') return;

        setFormula((prev) => (prev === '0' ? value : prev + value));
        calculateResult(formula + value);
    };

    return {
        formula,
        result,
        buildFormula,
    };
};

export default useCalculator;
