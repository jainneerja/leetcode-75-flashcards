import { FlashCard } from '../../../types/card';

export const reverseLinkedList: FlashCard = {
  id: 'lc-206',
  leetcodeNumber: 206,
  title: 'Reverse Linked List',
  pattern: 'Two Pointers / In-place',
  difficulty: 'Easy',
  category: 'Linked List',
  tags: ['linked list', 'two pointers', 'iterative', 'recursive'],
  realWorldScenario: 'Reversing a train — each car must be disconnected and reconnected in opposite direction',
  vizType: 'ReverseLinkedListViz',
  keyIdea: 'Three pointers (prev, curr, next): save next, reverse curr.next to prev, advance all three',
  approach: [
    'Initialize prev = null, curr = head',
    'Save next = curr.next',
    'Reverse: curr.next = prev',
    'Advance: prev = curr, curr = next; repeat until curr is null, return prev',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
  hints: [
    'Always save curr.next before overwriting it',
    'At the end, prev points to the new head',
    'Recursive version: reverseList(head.next) then head.next.next = head, head.next = null',
  ],
  commonMistakes: [
    'Losing the reference to next before saving it',
    'Returning curr instead of prev at the end',
    'Not setting head.next = null in recursive version (creates a cycle)',
  ],
};
