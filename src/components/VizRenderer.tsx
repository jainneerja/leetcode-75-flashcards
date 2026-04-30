import React from 'react';
import type { FlashCard } from '../types/card';

// Arrays & Hashing
import TwoSumViz from '../visualizations/arrays/TwoSumViz';
import ContainsDuplicateViz from '../visualizations/arrays/ContainsDuplicateViz';
import ValidAnagramViz from '../visualizations/arrays/ValidAnagramViz';
import GroupAnagramsViz from '../visualizations/arrays/GroupAnagramsViz';
import TopKFrequentViz from '../visualizations/arrays/TopKFrequentViz';
import ProductExceptSelfViz from '../visualizations/arrays/ProductExceptSelfViz';
import LongestConsecutiveViz from '../visualizations/arrays/LongestConsecutiveViz';
import MaxSubarrayViz from '../visualizations/arrays/MaxSubarrayViz';
import ValidSudokuViz from '../visualizations/arrays/ValidSudokuViz';
// Two Pointers
import ValidPalindromeViz from '../visualizations/twoPointers/ValidPalindromeViz';
import TwoSumIIViz from '../visualizations/twoPointers/TwoSumIIViz';
import ThreeSumViz from '../visualizations/twoPointers/ThreeSumViz';
import ContainerWaterViz from '../visualizations/twoPointers/ContainerWaterViz';
import TrappingRainViz from '../visualizations/twoPointers/TrappingRainViz';
// Sliding Window
import BestTimeBuySellViz from '../visualizations/slidingWindow/BestTimeBuySellViz';
import LongestSubstringViz from '../visualizations/slidingWindow/LongestSubstringViz';
import LongestRepeatingViz from '../visualizations/slidingWindow/LongestRepeatingViz';
import PermutationStringViz from '../visualizations/slidingWindow/PermutationStringViz';
import MinWindowSubstringViz from '../visualizations/slidingWindow/MinWindowSubstringViz';
import SlidingWindowMaxViz from '../visualizations/slidingWindow/SlidingWindowMaxViz';
// Stack
import ValidParenthesesViz from '../visualizations/stack/ValidParenthesesViz';
import MinStackViz from '../visualizations/stack/MinStackViz';
import EvaluateRPNViz from '../visualizations/stack/EvaluateRPNViz';
import GenerateParenthesesViz from '../visualizations/stack/GenerateParenthesesViz';
import DailyTemperaturesViz from '../visualizations/stack/DailyTemperaturesViz';
import CarFleetViz from '../visualizations/stack/CarFleetViz';
import LargestRectangleViz from '../visualizations/stack/LargestRectangleViz';
// Binary Search
import BinarySearchViz from '../visualizations/binarySearch/BinarySearchViz';
import SearchMatrixViz from '../visualizations/binarySearch/SearchMatrixViz';
import KokoEatingViz from '../visualizations/binarySearch/KokoEatingViz';
import FindMinRotatedViz from '../visualizations/binarySearch/FindMinRotatedViz';
import SearchRotatedViz from '../visualizations/binarySearch/SearchRotatedViz';
import TimeBasedKVViz from '../visualizations/binarySearch/TimeBasedKVViz';
import MedianTwoArraysViz from '../visualizations/binarySearch/MedianTwoArraysViz';
// Linked List
import ReverseLinkedListViz from '../visualizations/linkedList/ReverseLinkedListViz';
import MergeTwoListsViz from '../visualizations/linkedList/MergeTwoListsViz';
import LinkedListCycleViz from '../visualizations/linkedList/LinkedListCycleViz';
import ReorderListViz from '../visualizations/linkedList/ReorderListViz';
import RemoveNthFromEndViz from '../visualizations/linkedList/RemoveNthFromEndViz';
import LRUCacheViz from '../visualizations/linkedList/LRUCacheViz';
import MergeKListsViz from '../visualizations/linkedList/MergeKListsViz';
// Trees
import InvertTreeViz from '../visualizations/trees/InvertTreeViz';
import MaxDepthViz from '../visualizations/trees/MaxDepthViz';
import SameTreeViz from '../visualizations/trees/SameTreeViz';
import SubtreeViz from '../visualizations/trees/SubtreeViz';
import LCABSTViz from '../visualizations/trees/LCABSTViz';
import LevelOrderViz from '../visualizations/trees/LevelOrderViz';
import RightSideViewViz from '../visualizations/trees/RightSideViewViz';
import ValidateBSTViz from '../visualizations/trees/ValidateBSTViz';
import MaxPathSumViz from '../visualizations/trees/MaxPathSumViz';
import SerializeDeserializeViz from '../visualizations/trees/SerializeDeserializeViz';
// Tries
import ImplementTrieViz from '../visualizations/tries/ImplementTrieViz';
import AddSearchWordsViz from '../visualizations/tries/AddSearchWordsViz';
import WordSearchIIViz from '../visualizations/tries/WordSearchIIViz';
// Heap
import KthLargestArrayViz from '../visualizations/heap/KthLargestArrayViz';
import KClosestPointsViz from '../visualizations/heap/KClosestPointsViz';
import TaskSchedulerViz from '../visualizations/heap/TaskSchedulerViz';
import LastStoneWeightViz from '../visualizations/heap/LastStoneWeightViz';
import FindMedianStreamViz from '../visualizations/heap/FindMedianStreamViz';
// Graphs
import NumberOfIslandsViz from '../visualizations/graphs/NumberOfIslandsViz';
import CloneGraphViz from '../visualizations/graphs/CloneGraphViz';
import MaxAreaIslandViz from '../visualizations/graphs/MaxAreaIslandViz';
import PacificAtlanticViz from '../visualizations/graphs/PacificAtlanticViz';
import SurroundedRegionsViz from '../visualizations/graphs/SurroundedRegionsViz';
import RottingOrangesViz from '../visualizations/graphs/RottingOrangesViz';
import CourseScheduleViz from '../visualizations/graphs/CourseScheduleViz';
import CourseScheduleIIViz from '../visualizations/graphs/CourseScheduleIIViz';
import ConnectedComponentsViz from '../visualizations/graphs/ConnectedComponentsViz';
// DP
import ClimbingStairsViz from '../visualizations/dp/ClimbingStairsViz';
import HouseRobberViz from '../visualizations/dp/HouseRobberViz';
import CoinChangeViz from '../visualizations/dp/CoinChangeViz';
import LISViz from '../visualizations/dp/LISViz';
import UniquePathsViz from '../visualizations/dp/UniquePathsViz';
import JumpGameViz from '../visualizations/dp/JumpGameViz';
import WordBreakViz from '../visualizations/dp/WordBreakViz';

const VIZ_MAP: Record<string, React.ComponentType<any>> = {
  TwoSumViz, ContainsDuplicateViz, ValidAnagramViz, GroupAnagramsViz,
  TopKFrequentViz, ProductExceptSelfViz, LongestConsecutiveViz, MaxSubarrayViz, ValidSudokuViz,
  ValidPalindromeViz, TwoSumIIViz, ThreeSumViz, ContainerWaterViz, TrappingRainViz,
  BestTimeBuySellViz, LongestSubstringViz, LongestRepeatingViz, PermutationStringViz,
  MinWindowSubstringViz, SlidingWindowMaxViz,
  ValidParenthesesViz, MinStackViz, EvaluateRPNViz, GenerateParenthesesViz,
  DailyTemperaturesViz, CarFleetViz, LargestRectangleViz,
  BinarySearchViz, SearchMatrixViz, KokoEatingViz, FindMinRotatedViz,
  SearchRotatedViz, TimeBasedKVViz, MedianTwoArraysViz,
  ReverseLinkedListViz, MergeTwoListsViz, LinkedListCycleViz, ReorderListViz,
  RemoveNthFromEndViz, LRUCacheViz, MergeKListsViz,
  InvertTreeViz, MaxDepthViz, SameTreeViz, SubtreeViz, LCABSTViz,
  LevelOrderViz, RightSideViewViz, ValidateBSTViz, MaxPathSumViz, SerializeDeserializeViz,
  ImplementTrieViz, AddSearchWordsViz, WordSearchIIViz,
  KthLargestArrayViz, KClosestPointsViz, TaskSchedulerViz, LastStoneWeightViz, FindMedianStreamViz,
  NumberOfIslandsViz, CloneGraphViz, MaxAreaIslandViz, PacificAtlanticViz,
  SurroundedRegionsViz, RottingOrangesViz, CourseScheduleViz, CourseScheduleIIViz, ConnectedComponentsViz,
  ClimbingStairsViz, HouseRobberViz, CoinChangeViz, LISViz, UniquePathsViz, JumpGameViz, WordBreakViz,
};

interface VizRendererProps {
  card: FlashCard;
}

export default function VizRenderer({ card }: VizRendererProps) {
  const Component = VIZ_MAP[card.vizType];
  if (!Component) {
    return (
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 text-center text-gray-400 text-sm">
        Visualization: <span className="text-purple-300 font-mono">{card.vizType}</span>
      </div>
    );
  }
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <Component data={card} />
    </div>
  );
}
