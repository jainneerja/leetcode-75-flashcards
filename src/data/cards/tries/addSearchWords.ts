import { FlashCard } from '../../../types/card';

export const addSearchWords: FlashCard = {
  id: 'lc-211',
  leetcodeNumber: 211,
  title: 'Design Add and Search Words Data Structure',
  pattern: 'Trie + DFS for wildcards',
  difficulty: 'Medium',
  category: 'Tries',
  tags: ['trie', 'design', 'dfs', 'wildcard', 'string'],
  realWorldScenario:
    'Crossword solver — search for words where some letters are unknown (wildcards). A "." can be any letter, so ".ad" matches bad, dad, mad.',
  vizType: 'AddSearchWordsViz',
  keyIdea:
    'Same Trie structure as LC208, but search handles "." by trying all 26 (or all existing) children recursively at wildcard positions.',
  approach: [
    'addWord: standard Trie insert',
    'search(word): DFS helper with index i into word',
    'If word[i] is a letter, follow that child (or return false if missing)',
    'If word[i] is ".", try every existing child recursively',
    'Base case: i === word.length → return node.isEnd',
  ],
  complexity: { time: 'O(m) insert, O(26^m) worst case search with wildcards', space: 'O(m) per word' },
  codeSnippet: `class WordDictionary {
  constructor() { this.root = { children: {}, isEnd: false }; }

  addWord(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = { children: {}, isEnd: false };
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word) {
    const dfs = (node, i) => {
      if (i === word.length) return node.isEnd;
      const ch = word[i];
      if (ch === '.') {
        for (const child of Object.values(node.children)) {
          if (dfs(child, i + 1)) return true;
        }
        return false;
      }
      if (!node.children[ch]) return false;
      return dfs(node.children[ch], i + 1);
    };
    return dfs(this.root, 0);
  }
}`,
  hints: [
    'Only the search method changes from a plain Trie — addWord is identical',
    'Wildcards make search O(26^m) worst case — each "." branches into up to 26 paths',
    'Early return true on the first successful DFS branch avoids full traversal',
  ],
  commonMistakes: [
    'Forgetting to iterate over existing children only (not all 26) for "." — using Object.values is correct',
    'Not handling the case where all children of a "." node lead to dead ends',
  ],
};
