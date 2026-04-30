import { FlashCard } from '../../../types/card';

export const evaluateRPN: FlashCard = {
  id: 'stack-evaluate-rpn',
  leetcodeNumber: 150,
  title: 'Evaluate Reverse Polish Notation',
  pattern: 'Stack',
  difficulty: 'Medium',
  category: 'Stack',
  tags: ['array', 'stack', 'math'],
  realWorldScenario:
    'Calculator app — evaluate a postfix expression like a Reverse Polish Notation calculator. Operands are pushed; operators consume the top two values and push the result.',
  vizType: 'EvaluateRPNViz',
  keyIdea:
    'Numbers go onto the stack. When an operator is encountered, pop two operands (second then first), apply the operator, and push the result back. The final value on the stack is the answer.',
  approach: [
    'Iterate through each token.',
    'If it is a number, push it to the stack.',
    'If it is an operator (+, -, *, /), pop two values, compute, push the result.',
    'Return the single remaining value on the stack.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const ops = new Set(['+', '-', '*', '/']);

  for (const token of tokens) {
    if (ops.has(token)) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b)); // truncate toward zero
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}`,
  hints: [
    'Pop order matters: pop b first (top), then a — the expression is a OP b.',
    'Division must truncate toward zero, not floor — use Math.trunc.',
    'The input is guaranteed valid, so the stack always has two operands for any operator.',
  ],
  commonMistakes: [
    'Reversing operand order: b = pop(), a = pop() — b was pushed last, so a is the left operand.',
    'Using Math.floor instead of Math.trunc for division with negative numbers.',
  ],
};
