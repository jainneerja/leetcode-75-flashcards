import { FlashCard } from '../../../types/card';

export const linkedListCycle: FlashCard = {
  id: 'lc-141',
  leetcodeNumber: 141,
  title: 'Linked List Cycle',
  pattern: "Floyd's Cycle Detection (Tortoise & Hare)",
  difficulty: 'Easy',
  category: 'Linked List',
  tags: ['linked list', 'two pointers', 'cycle detection', 'floyd'],
  realWorldScenario: 'Race track detector — is the runner going in circles, or will they eventually finish the race?',
  vizType: 'LinkedListCycleViz',
  keyIdea: 'Slow pointer moves 1 step, fast moves 2; if they ever meet → cycle exists',
  approach: [
    'Initialize slow = head, fast = head',
    'While fast and fast.next are not null: slow = slow.next, fast = fast.next.next',
    'If slow === fast at any point, a cycle exists — return true',
    'If fast reaches null, no cycle — return false',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
  hints: [
    'If there is a cycle, fast will lap slow inside the cycle — they must meet',
    'Check fast AND fast.next before advancing fast two steps',
    'LC142 extends this to find the entry point of the cycle',
  ],
  commonMistakes: [
    'Not checking fast.next before fast.next.next (causes null dereference)',
    'Starting slow and fast at different positions (both should start at head)',
    'Using a HashSet — it works but uses O(n) space',
  ],
};
