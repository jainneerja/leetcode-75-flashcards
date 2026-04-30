import { FlashCard } from '../../../types/card';

export const implementTrie: FlashCard = {
  id: 'lc-208',
  leetcodeNumber: 208,
  title: 'Implement Trie (Prefix Tree)',
  pattern: 'Trie (Prefix Tree)',
  difficulty: 'Medium',
  category: 'Tries',
  tags: ['trie', 'design', 'string', 'prefix'],
  realWorldScenario:
    'Autocomplete system — a prefix tree that enables instant search-as-you-type suggestions. Typing "app" instantly narrows to apple, apply, apt.',
  vizType: 'ImplementTrieViz',
  keyIdea:
    'Each TrieNode has children[26] (or a Map) and an isEnd flag. insert/search/startsWith all traverse char by char, creating nodes on insert.',
  approach: [
    'TrieNode: children = {} (or Array(26)), isEnd = false',
    'insert(word): traverse chars, create nodes if missing, set isEnd on last',
    'search(word): traverse chars, return false if any missing, check isEnd at end',
    'startsWith(prefix): traverse chars, return false if any missing, return true at end',
  ],
  complexity: { time: 'O(m) per operation where m = word length', space: 'O(m) per insert' },
  codeSnippet: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}`,
  hints: [
    'search and startsWith are identical except for the final check (isEnd vs. true)',
    'Using a JS object {} as children is simpler than Array(26) and handles unicode',
    'The root node itself holds no character — it is just the entry point',
  ],
  commonMistakes: [
    'Confusing search (must be complete word, check isEnd) with startsWith (prefix only)',
    'Forgetting to set isEnd = true after insert — search will always return false',
  ],
};
