import { FlashCard } from '../../../types/card';

export const kokoEatingBananas: FlashCard = {
  id: 'lc-875',
  leetcodeNumber: 875,
  title: 'Koko Eating Bananas',
  pattern: 'Binary Search on Answer',
  difficulty: 'Medium',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'greedy'],
  realWorldScenario: 'Koko the monkey — eat all banana piles before the guard returns, find the minimum eating speed',
  vizType: 'KokoEatingViz',
  keyIdea: 'Binary search on speed k (1 to max pile); check if that speed finishes all piles in h hours',
  approach: [
    'Set lo = 1, hi = max(piles)',
    'For each mid speed k, compute total hours = sum of ceil(pile / k) for each pile',
    'If total hours <= h, k is feasible; try smaller (hi = mid)',
    'Else k is too slow; increase (lo = mid + 1)',
  ],
  complexity: { time: 'O(n log m) where m = max pile size', space: 'O(1)' },
  codeSnippet: `function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1, hi = Math.max(...piles);
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    const hours = piles.reduce((sum, p) => sum + Math.ceil(p / mid), 0);
    if (hours <= h) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
  hints: [
    'Think of it as: "what is the minimum k such that canFinish(k) is true?"',
    'canFinish is monotone — if speed k works, any speed > k also works',
    'Use lo < hi (not lo <= hi) since we want the leftmost valid k',
  ],
  commonMistakes: [
    'Using lo <= hi and missing the leftmost-valid-value pattern',
    'Setting hi = max(piles) + 1 unnecessarily',
    'Integer overflow when summing hours (less relevant in JS)',
  ],
};
