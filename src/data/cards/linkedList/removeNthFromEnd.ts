import { FlashCard } from '../../../types/card';

export const removeNthFromEnd: FlashCard = {
  id: 'lc-19',
  leetcodeNumber: 19,
  title: 'Remove Nth Node From End of List',
  pattern: 'Two Pointers (Gap of N)',
  difficulty: 'Medium',
  category: 'Linked List',
  tags: ['linked list', 'two pointers'],
  realWorldScenario: 'Cargo train — remove the nth car from the back without counting total cars first',
  vizType: 'RemoveNthFromEndViz',
  keyIdea: 'Move fast pointer n+1 steps ahead; advance both until fast reaches null; slow.next is the target',
  approach: [
    'Create a dummy node pointing to head; both slow and fast start at dummy',
    'Advance fast n+1 steps forward',
    'Advance both slow and fast until fast is null',
    'slow.next is the node to remove; set slow.next = slow.next.next',
  ],
  complexity: { time: 'O(L)', space: 'O(1)' },
  codeSnippet: `function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow: ListNode = dummy, fast: ListNode = dummy;
  for (let i = 0; i <= n; i++) fast = fast.next!;
  while (fast !== null) { slow = slow.next!; fast = fast.next!; }
  slow.next = slow.next!.next;
  return dummy.next;
}`,
  hints: [
    'Advance fast n+1 (not n) steps so that slow lands on the node BEFORE the one to delete',
    'Dummy node handles the edge case where the head itself must be removed',
    'The gap between fast and slow stays constant at n+1 throughout',
  ],
  commonMistakes: [
    'Moving fast n steps instead of n+1 (slow ends up at the target, not before it)',
    'Not using a dummy node and crashing when removing the head',
  ],
};
