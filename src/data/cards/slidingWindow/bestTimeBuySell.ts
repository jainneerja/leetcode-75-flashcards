import { FlashCard } from '../../../types/card';

export const bestTimeBuySell: FlashCard = {
  id: 'sliding-window-best-time-buy-sell',
  leetcodeNumber: 121,
  title: 'Best Time to Buy and Sell Stock',
  pattern: 'Sliding Window (min tracking)',
  difficulty: 'Easy',
  category: 'Sliding Window',
  tags: ['array', 'sliding window', 'greedy'],
  realWorldScenario:
    'Stock trader checking a week of prices — buy low, sell high on different days. You want to pick one day to buy and a later day to sell for maximum profit.',
  vizType: 'BestTimeBuySellViz',
  keyIdea:
    'Track the minimum price seen so far; at each step compute profit = price - minSoFar; keep the maximum profit found.',
  approach: [
    'Initialize minPrice = Infinity and maxProfit = 0.',
    'Iterate through each price: update minPrice if current price is lower.',
    'Compute profit = price - minPrice and update maxProfit if larger.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}`,
  hints: [
    'You must buy before you sell — so track the minimum to the left of the current index.',
    'No need for a nested loop; one pass is enough.',
    'If prices are always decreasing, the answer is 0 (no profitable trade).',
  ],
  commonMistakes: [
    'Selling before buying (ignoring left-to-right order).',
    'Returning a negative profit instead of 0 when no trade is profitable.',
    'Using O(n²) brute force instead of the single-pass O(n) approach.',
  ],
};
