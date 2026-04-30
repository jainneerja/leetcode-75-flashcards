import { FlashCard } from '../../../types/card';

export const mergeTwoSortedLists: FlashCard = {
  id: 'lc-21',
  leetcodeNumber: 21,
  title: 'Merge Two Sorted Lists',
  pattern: 'Two Pointers (Merge)',
  difficulty: 'Easy',
  category: 'Linked List',
  tags: ['linked list', 'two pointers', 'merge sort'],
  realWorldScenario: 'Merging two sorted queues at the airport — always take the person with the lower ticket number',
  vizType: 'MergeTwoListsViz',
  keyIdea: 'Compare heads; take smaller, advance that pointer; attach remaining list at end',
  approach: [
    'Create a dummy head node to simplify edge cases',
    'While both lists are non-null: compare list1.val and list2.val',
    'Attach the smaller node to current, advance that list\'s pointer',
    'Attach whichever list remains; return dummy.next',
  ],
  complexity: { time: 'O(m+n)', space: 'O(1)' },
  codeSnippet: `function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) { cur.next = list1; list1 = list1.next; }
    else { cur.next = list2; list2 = list2.next; }
    cur = cur.next;
  }
  cur.next = list1 ?? list2;
  return dummy.next;
}`,
  hints: [
    'Dummy node eliminates special-casing the empty head',
    'At the end, one list may still have remaining nodes — attach them all at once',
    'This is the merge step of merge sort',
  ],
  commonMistakes: [
    'Forgetting to advance cur = cur.next inside the loop',
    'Not attaching the leftover list at the end',
    'Mutating the nodes unnecessarily (not needed — just redirect .next pointers)',
  ],
};
