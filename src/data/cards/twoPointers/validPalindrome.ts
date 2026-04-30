import { FlashCard } from '../../../types/card';

export const validPalindrome: FlashCard = {
  id: 'lc-125-valid-palindrome',
  leetcodeNumber: 125,
  title: 'Valid Palindrome',
  pattern: 'Two Pointers',
  difficulty: 'Easy',
  category: 'Two Pointers',
  tags: ['string', 'two-pointers', 'palindrome', 'alphanumeric'],
  realWorldScenario:
    'The mirror test: hold a phrase up to a mirror and check if it reads the same — ignoring spaces and punctuation. "A man, a plan, a canal: Panama" passes the test. You compare outward letters inward simultaneously from both ends.',
  vizType: 'ValidPalindromeViz',
  keyIdea:
    'Two pointers start at opposite ends. Skip non-alphanumeric characters. At each valid pair, compare characters (case-insensitive). If any pair mismatches, return false. Pointers meeting in the middle means it\'s a palindrome.',
  approach: [
    'Set left = 0, right = s.length − 1.',
    'While left < right: advance left past non-alphanumeric chars, move right back past non-alphanumeric chars.',
    'Compare s[left].toLowerCase() with s[right].toLowerCase() — if they differ, return false.',
    'Advance left++, right--. If the loop completes without mismatch, return true.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphaNum = (c: string) => /[a-z0-9]/i.test(c);

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}`,
  hints: [
    'Skip non-alphanumeric characters before comparing — they\'re irrelevant.',
    'Case-insensitive comparison: toLowerCase() both sides.',
    'An empty string after cleaning is still a valid palindrome.',
  ],
  commonMistakes: [
    'Cleaning the string first with regex — works but uses O(n) extra space.',
    'Forgetting to handle mixed case.',
    'Not advancing both pointers after a successful match.',
  ],
};
