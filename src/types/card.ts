export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Category =
  | 'Arrays & Hashing'
  | 'Two Pointers'
  | 'Sliding Window'
  | 'Stack'
  | 'Binary Search'
  | 'Linked List'
  | 'Trees'
  | 'Tries'
  | 'Heap / Priority Queue'
  | 'Graphs'
  | 'Dynamic Programming';

export interface CardComplexity {
  time: string;
  space: string;
}

export interface FlashCard {
  id: string;
  leetcodeNumber: number;
  title: string;
  pattern: string;
  difficulty: Difficulty;
  category: Category;
  tags: string[];
  realWorldScenario: string;
  vizType: string;
  keyIdea: string;
  approach: string[];
  complexity: CardComplexity;
  codeSnippet: string;
  hints: string[];
  commonMistakes?: string[];
}

export type ProgressStatus = 'unseen' | 'review' | 'known';

export interface CardProgress {
  [cardId: string]: ProgressStatus;
}
