import { FlashCard } from '../../../types/card';

export const generateParentheses: FlashCard = {
  id: 'stack-generate-parentheses',
  leetcodeNumber: 22,
  title: 'Generate Parentheses',
  pattern: 'Backtracking / DFS',
  difficulty: 'Medium',
  category: 'Stack',
  tags: ['string', 'backtracking', 'recursion'],
  realWorldScenario:
    "Architect's blueprint — generate all valid ways to nest n pairs of rooms. Each opening room must be properly closed before or alongside others.",
  vizType: 'GenerateParenthesesViz',
  keyIdea:
    "Add '(' if open < n; add ')' if close < open. Base case: both open and close equal n — the string is complete and valid.",
  approach: [
    'Use recursive backtracking with open and close counters.',
    "Add '(' whenever open < n.",
    "Add ')' whenever close < open.",
    'When open == close == n, append the current string to results.',
  ],
  complexity: { time: 'O(4^n / sqrt(n))', space: 'O(n)' },
  codeSnippet: `function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number): void {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
}`,
  hints: [
    'You never need to backtrack a string — just pass current + char to avoid mutation.',
    'The constraint close < open ensures you never close more than you have opened.',
    'The number of valid combinations is the nth Catalan number: C(2n, n) / (n+1).',
  ],
  commonMistakes: [
    "Adding ')' without checking close < open, producing invalid strings.",
    'Mutating a shared string instead of passing a new one — causes incorrect results.',
    'Using open <= n (off by one) instead of open < n.',
  ],
};
