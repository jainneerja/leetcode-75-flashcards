import { FlashCard } from '../../../types/card';

export const minStack: FlashCard = {
  id: 'stack-min-stack',
  leetcodeNumber: 155,
  title: 'Min Stack',
  pattern: 'Two Stacks (Auxiliary Min Stack)',
  difficulty: 'Medium',
  category: 'Stack',
  tags: ['stack', 'design'],
  realWorldScenario:
    'Stock portfolio tracker — always know your cheapest holding without scanning everything. The min stack mirrors the main stack so getMin() is always O(1).',
  vizType: 'MinStackViz',
  keyIdea:
    'Maintain a second "min stack" that pushes the current minimum alongside every element. When the main stack pops, the min stack pops too — so the top of the min stack always reflects the current minimum.',
  approach: [
    'Two stacks: main and minStack.',
    'On push(val): push val to main; push min(val, minStack.top) to minStack.',
    'On pop(): pop from both stacks.',
    'getMin() returns minStack.top; top() returns main.top.',
  ],
  complexity: { time: 'O(1) all operations', space: 'O(n)' },
  codeSnippet: `class MinStack {
  private stack: number[] = [];
  private minS: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const min = this.minS.length
      ? Math.min(val, this.minS[this.minS.length - 1])
      : val;
    this.minS.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.minS.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minS[this.minS.length - 1];
  }
}`,
  hints: [
    'The min stack never stores just the new element — it stores the minimum between the new element and the previous minimum.',
    'Both stacks always have the same size.',
    'No need to iterate to find the minimum — it is always at the top of minS.',
  ],
  commonMistakes: [
    'Only pushing to the min stack when the new value is smaller — causes size mismatch on pop.',
    'Forgetting to handle the edge case where minStack is empty on the first push.',
  ],
};
