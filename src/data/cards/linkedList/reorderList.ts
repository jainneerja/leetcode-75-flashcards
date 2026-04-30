import { FlashCard } from '../../../types/card';

export const reorderList: FlashCard = {
  id: 'lc-143',
  leetcodeNumber: 143,
  title: 'Reorder List',
  pattern: 'Find Middle + Reverse + Merge',
  difficulty: 'Medium',
  category: 'Linked List',
  tags: ['linked list', 'two pointers', 'reverse'],
  realWorldScenario: 'Seating arrangement — interleave front and back of the guest list: 1,n,2,n-1,3,...',
  vizType: 'ReorderListViz',
  keyIdea: '1) Find mid with slow/fast. 2) Reverse second half. 3) Merge two halves alternately.',
  approach: [
    'Step 1: Find the middle using slow/fast pointers; split list into two halves',
    'Step 2: Reverse the second half in place',
    'Step 3: Merge the two halves by alternating nodes (first from left, then from right)',
    'Stop when second half is exhausted',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;
  // Step 1: find middle
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!; fast = fast.next.next;
  }
  // Step 2: reverse second half
  let prev: ListNode | null = null, curr: ListNode | null = slow.next;
  slow.next = null;
  while (curr) { const next = curr.next; curr.next = prev; prev = curr; curr = next; }
  // Step 3: merge
  let l1: ListNode | null = head, l2: ListNode | null = prev;
  while (l2) {
    const n1 = l1!.next, n2 = l2.next;
    l1!.next = l2; l2.next = n1;
    l1 = n1; l2 = n2;
  }
}`,
  hints: [
    'This problem combines three separate techniques — practice each independently first',
    'Slow/fast: when fast reaches end, slow is at the midpoint',
    'The merge step is similar to merging two lists but alternates instead of comparing values',
  ],
  commonMistakes: [
    'Not severing slow.next = null before reversing (causes infinite loop)',
    'Losing pointers during the merge step — save n1 and n2 before relinking',
  ],
};
