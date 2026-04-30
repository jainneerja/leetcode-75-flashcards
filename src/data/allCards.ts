import { twoSum } from './cards/arrays/twoSum';
import { containsDuplicate } from './cards/arrays/containsDuplicate';
import { validAnagram } from './cards/arrays/validAnagram';
import { groupAnagrams } from './cards/arrays/groupAnagrams';
import { topKFrequent } from './cards/arrays/topKFrequent';
import { productExceptSelf } from './cards/arrays/productExceptSelf';
import { longestConsecutive } from './cards/arrays/longestConsecutive';
import { maximumSubarray } from './cards/arrays/maximumSubarray';
import { validSudoku } from './cards/arrays/validSudoku';

import { validPalindrome } from './cards/twoPointers/validPalindrome';
import { twoSumII } from './cards/twoPointers/twoSumII';
import { threeSum } from './cards/twoPointers/threeSum';
import { containerWithMostWater } from './cards/twoPointers/containerWithMostWater';
import { trappingRainWater } from './cards/twoPointers/trappingRainWater';

import { bestTimeBuySell } from './cards/slidingWindow/bestTimeBuySell';
import { longestSubstringNoRepeat } from './cards/slidingWindow/longestSubstringNoRepeat';
import { longestRepeatingCharReplacement } from './cards/slidingWindow/longestRepeatingCharReplacement';
import { permutationInString } from './cards/slidingWindow/permutationInString';
import { minimumWindowSubstring } from './cards/slidingWindow/minimumWindowSubstring';
import { slidingWindowMaximum } from './cards/slidingWindow/slidingWindowMaximum';

import { validParentheses } from './cards/stack/validParentheses';
import { minStack } from './cards/stack/minStack';
import { evaluateRPN } from './cards/stack/evaluateRPN';
import { generateParentheses } from './cards/stack/generateParentheses';
import { dailyTemperatures } from './cards/stack/dailyTemperatures';
import { carFleet } from './cards/stack/carFleet';
import { largestRectangleHistogram } from './cards/stack/largestRectangleHistogram';

import { binarySearch } from './cards/binarySearch/binarySearch';
import { searchMatrix } from './cards/binarySearch/searchMatrix';
import { kokoEatingBananas } from './cards/binarySearch/kokoEatingBananas';
import { findMinRotated } from './cards/binarySearch/findMinRotated';
import { searchRotated } from './cards/binarySearch/searchRotated';
import { timeBasedKeyValue } from './cards/binarySearch/timeBasedKeyValue';
import { medianTwoArrays } from './cards/binarySearch/medianTwoArrays';

import { reverseLinkedList } from './cards/linkedList/reverseLinkedList';
import { mergeTwoSortedLists } from './cards/linkedList/mergeTwoSortedLists';
import { linkedListCycle } from './cards/linkedList/linkedListCycle';
import { reorderList } from './cards/linkedList/reorderList';
import { removeNthFromEnd } from './cards/linkedList/removeNthFromEnd';
import { lruCache } from './cards/linkedList/lruCache';
import { mergeKSortedLists } from './cards/linkedList/mergeKSortedLists';

import { invertBinaryTree } from './cards/trees/invertBinaryTree';
import { maxDepth } from './cards/trees/maxDepth';
import { sameTree } from './cards/trees/sameTree';
import { subtreeOfAnotherTree } from './cards/trees/subtreeOfAnotherTree';
import { lcaBST } from './cards/trees/lcaBST';
import { levelOrderTraversal } from './cards/trees/levelOrderTraversal';
import { rightSideView } from './cards/trees/rightSideView';
import { validateBST } from './cards/trees/validateBST';
import { binaryTreeMaxPathSum } from './cards/trees/binaryTreeMaxPathSum';
import { serializeDeserialize } from './cards/trees/serializeDeserialize';

import { implementTrie } from './cards/tries/implementTrie';
import { addSearchWords } from './cards/tries/addSearchWords';
import { wordSearchII } from './cards/tries/wordSearchII';

import { kthLargestArray } from './cards/heap/kthLargestArray';
import { kClosestPoints } from './cards/heap/kClosestPoints';
import { taskScheduler } from './cards/heap/taskScheduler';
import { lastStoneWeight } from './cards/heap/lastStoneWeight';
import { findMedianStream } from './cards/heap/findMedianStream';

import { numberOfIslands } from './cards/graphs/numberOfIslands';
import { cloneGraph } from './cards/graphs/cloneGraph';
import { maxAreaIsland } from './cards/graphs/maxAreaIsland';
import { pacificAtlantic } from './cards/graphs/pacificAtlantic';
import { surroundedRegions } from './cards/graphs/surroundedRegions';
import { rottingOranges } from './cards/graphs/rottingOranges';
import { courseSchedule } from './cards/graphs/courseSchedule';
import { courseScheduleII } from './cards/graphs/courseScheduleII';
import { numberOfConnectedComponents } from './cards/graphs/numberOfConnectedComponents';

import { climbingStairs } from './cards/dp/climbingStairs';
import { houseRobber } from './cards/dp/houseRobber';
import { coinChange } from './cards/dp/coinChange';
import { longestIncreasingSubsequence } from './cards/dp/longestIncreasingSubsequence';
import { uniquePaths } from './cards/dp/uniquePaths';
import { jumpGame } from './cards/dp/jumpGame';
import { wordBreak } from './cards/dp/wordBreak';

export const FLASHCARD_DATA = [
  // Arrays & Hashing
  twoSum, containsDuplicate, validAnagram, groupAnagrams, topKFrequent,
  productExceptSelf, longestConsecutive, maximumSubarray, validSudoku,
  // Two Pointers
  validPalindrome, twoSumII, threeSum, containerWithMostWater, trappingRainWater,
  // Sliding Window
  bestTimeBuySell, longestSubstringNoRepeat, longestRepeatingCharReplacement,
  permutationInString, minimumWindowSubstring, slidingWindowMaximum,
  // Stack
  validParentheses, minStack, evaluateRPN, generateParentheses,
  dailyTemperatures, carFleet, largestRectangleHistogram,
  // Binary Search
  binarySearch, searchMatrix, kokoEatingBananas, findMinRotated,
  searchRotated, timeBasedKeyValue, medianTwoArrays,
  // Linked List
  reverseLinkedList, mergeTwoSortedLists, linkedListCycle, reorderList,
  removeNthFromEnd, lruCache, mergeKSortedLists,
  // Trees
  invertBinaryTree, maxDepth, sameTree, subtreeOfAnotherTree, lcaBST,
  levelOrderTraversal, rightSideView, validateBST, binaryTreeMaxPathSum, serializeDeserialize,
  // Tries
  implementTrie, addSearchWords, wordSearchII,
  // Heap
  kthLargestArray, kClosestPoints, taskScheduler, lastStoneWeight, findMedianStream,
  // Graphs
  numberOfIslands, cloneGraph, maxAreaIsland, pacificAtlantic, surroundedRegions,
  rottingOranges, courseSchedule, courseScheduleII, numberOfConnectedComponents,
  // Dynamic Programming
  climbingStairs, houseRobber, coinChange, longestIncreasingSubsequence,
  uniquePaths, jumpGame, wordBreak,
];
