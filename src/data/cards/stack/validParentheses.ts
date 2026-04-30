import { FlashCard } from '../../../types/card';

export const validParentheses: FlashCard = {
  id: 'stack-valid-parentheses',
  leetcodeNumber: 20,
  title: 'Valid Parentheses',
  pattern: 'Stack',
  difficulty: 'Easy',
  category: 'Stack',
  tags: ['string', 'stack'],
  realWorldScenario:
    'Code editor — validate that all brackets in code are properly matched and closed. Every opening bracket must have a corresponding closing bracket in the correct order.',
  vizType: 'ValidParenthesesViz',
  keyIdea:
    'Push opening brackets onto the stack. For each closing bracket, check that the top of the stack is the matching opener — if not (or stack is empty), the string is invalid.',
  approach: [
    'Build a map of closing → opening bracket pairs.',
    'Iterate characters: push opening brackets; for closing brackets pop and check match.',
    'If mismatch or empty stack on a closing bracket, return false.',
    'At the end, stack must be empty for the expression to be valid.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const ch of s) {
    if (ch in map) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
}`,
  hints: [
    'Map closing brackets to their openers for clean O(1) lookup.',
    'stack.pop() on an empty stack returns undefined — that safely handles mismatches.',
    'A non-empty stack at the end means unclosed opening brackets.',
  ],
  commonMistakes: [
    'Forgetting to check that the stack is empty at the end.',
    'Checking stack.top() without popping, leaving the opener on the stack.',
    'Not handling edge cases like a string that starts with a closing bracket.',
  ],
};
