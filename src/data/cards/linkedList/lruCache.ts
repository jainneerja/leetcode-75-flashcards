import { FlashCard } from '../../../types/card';

export const lruCache: FlashCard = {
  id: 'lc-146',
  leetcodeNumber: 146,
  title: 'LRU Cache',
  pattern: 'Hash Map + Doubly Linked List',
  difficulty: 'Medium',
  category: 'Linked List',
  tags: ['hash map', 'doubly linked list', 'design', 'cache'],
  realWorldScenario: 'Browser cache — keep the most recently visited pages, evict the least recently used when full',
  vizType: 'LRUCacheViz',
  keyIdea: 'HashMap gives O(1) lookup; DLL keeps access order; on access/insert move to front; evict from back',
  approach: [
    'Maintain a doubly linked list with sentinel head (MRU side) and tail (LRU side)',
    'get(key): if key in map, move node to front (after head), return value; else return -1',
    'put(key, value): if key exists, update and move to front; else insert after head',
    'If over capacity after insert, remove the node before tail (LRU) and delete from map',
  ],
  complexity: { time: 'O(1) get and put', space: 'O(capacity)' },
  codeSnippet: `class LRUCache {
  private cap: number;
  private map: Map<number, DLLNode> = new Map();
  private head = new DLLNode(0, 0); // MRU sentinel
  private tail = new DLLNode(0, 0); // LRU sentinel
  constructor(capacity: number) {
    this.cap = capacity;
    this.head.next = this.tail; this.tail.prev = this.head;
  }
  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.remove(node); this.insertFront(node);
    return node.val;
  }
  put(key: number, value: number): void {
    if (this.map.has(key)) this.remove(this.map.get(key)!);
    const node = new DLLNode(key, value);
    this.insertFront(node); this.map.set(key, node);
    if (this.map.size > this.cap) {
      const lru = this.tail.prev!;
      this.remove(lru); this.map.delete(lru.key);
    }
  }
  private remove(n: DLLNode) { n.prev!.next = n.next; n.next!.prev = n.prev; }
  private insertFront(n: DLLNode) {
    n.next = this.head.next; n.prev = this.head;
    this.head.next!.prev = n; this.head.next = n;
  }
}`,
  hints: [
    'Sentinel nodes eliminate null checks at the boundaries',
    'Every get and put must bring the accessed node to the MRU position',
    'JavaScript\'s Map preserves insertion order — you can use it as an LRU without a DLL, but DLL is the canonical O(1) solution',
  ],
  commonMistakes: [
    'Forgetting to update the map when evicting the LRU node',
    'Not moving an existing key to the front on put (if it already exists)',
    'Linking errors when removing or inserting nodes (draw it out!)',
  ],
};
