import { FlashCard } from '../../../types/card';

export const mergeKSortedLists: FlashCard = {
  id: 'lc-23',
  leetcodeNumber: 23,
  title: 'Merge K Sorted Lists',
  pattern: 'Min Heap / Divide & Conquer',
  difficulty: 'Hard',
  category: 'Linked List',
  tags: ['linked list', 'heap', 'priority queue', 'divide and conquer', 'merge sort'],
  realWorldScenario: 'K airport queues merging — from K sorted queues, always serve the person who arrived earliest',
  vizType: 'MergeKListsViz',
  keyIdea: 'Use min-heap of size K; always extract minimum node, then push its next; repeat until heap empty',
  approach: [
    'Push all non-null list heads into a min-heap keyed by node.val',
    'Extract the minimum node, attach to result list',
    'If the extracted node has a next, push next onto the heap',
    'Repeat until heap is empty; return dummy.next',
  ],
  complexity: { time: 'O(n log k)', space: 'O(k)' },
  codeSnippet: `function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // Simulate min-heap with a sorted array for clarity
  const heap: ListNode[] = lists.filter(Boolean) as ListNode[];
  heap.sort((a, b) => a.val - b.val);
  const dummy = new ListNode(0);
  let cur = dummy;
  while (heap.length) {
    // extract min
    const node = heap.shift()!;
    cur.next = node; cur = cur.next;
    if (node.next) {
      // insert node.next in sorted position
      let i = 0;
      while (i < heap.length && heap[i].val <= node.next.val) i++;
      heap.splice(i, 0, node.next);
    }
  }
  return dummy.next;
}`,
  hints: [
    'A proper min-heap gives O(log k) insert/extract; the splice simulation is O(k) but illustrates the idea',
    'Divide & Conquer alternative: repeatedly merge pairs of lists → O(n log k) same complexity',
    'Total nodes across all lists = n; each node is pushed/popped once → O(n log k)',
  ],
  commonMistakes: [
    'Pushing all nodes upfront into the heap instead of lazily pushing next after extraction',
    'Not handling null/empty lists in the input array',
    'Naive approach (merge one-by-one left to right) is O(nk) — much worse',
  ],
};
