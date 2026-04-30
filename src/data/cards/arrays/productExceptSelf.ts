import { FlashCard } from '../../../types/card';

export const productExceptSelf: FlashCard = {
  id: 'lc-238-product-except-self',
  leetcodeNumber: 238,
  title: 'Product of Array Except Self',
  pattern: 'Prefix & Suffix Products',
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['array', 'prefix-product', 'suffix-product', 'no-division'],
  realWorldScenario:
    'On an assembly line, each station\'s output multiplier depends on every other station\'s rate — but never its own. Station 3\'s combined rate = (stations 1 & 2\'s rates) × (stations 4 & 5\'s rates). Two passes replace the need for division.',
  vizType: 'ProductExceptSelfViz',
  keyIdea:
    'A left pass builds prefix products (product of everything to the left), a right pass multiplies in suffix products (product of everything to the right). The result at each index = prefix × suffix — no division required.',
  approach: [
    'Initialize result array with 1s. Set a running prefix = 1.',
    'Left pass: for each index i, result[i] = prefix; then prefix *= nums[i].',
    'Set a running suffix = 1.',
    'Right pass (right to left): result[i] *= suffix; then suffix *= nums[i]. Return result.',
  ],
  complexity: { time: 'O(n)', space: 'O(1) extra (output array not counted)' },
  codeSnippet: `function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}`,
  hints: [
    'result[i] needs product of all elements except nums[i] = (product of 0..i-1) × (product of i+1..n-1).',
    'The left pass handles the left portion; the right pass handles the right portion in-place.',
    'This avoids the division trick which breaks when zeros are present.',
  ],
  commonMistakes: [
    'Using division — fails when the array contains zeros.',
    'Allocating separate prefix and suffix arrays — unnecessary, you can do it in O(1) extra space.',
    'Starting the prefix/suffix running product at 0 instead of 1.',
  ],
};
