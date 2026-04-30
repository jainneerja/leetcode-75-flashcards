import { FlashCard } from '../../../types/card';

export const carFleet: FlashCard = {
  id: 'stack-car-fleet',
  leetcodeNumber: 853,
  title: 'Car Fleet',
  pattern: 'Monotonic Stack (Sort + Stack)',
  difficulty: 'Medium',
  category: 'Stack',
  tags: ['array', 'stack', 'sorting', 'monotonic stack'],
  realWorldScenario:
    'Highway merge — cars driving to the same destination form fleets when a faster car catches up to a slower one ahead. Count the total number of fleets that arrive.',
  vizType: 'CarFleetViz',
  keyIdea:
    'Sort cars by starting position (descending, closest to target first). Compute time for each car to reach the target. If a car arrives at the same time or later than the car ahead of it, they form the same fleet (stack top is the fleet leader).',
  approach: [
    'Pair each car with its time to target = (target - position) / speed.',
    'Sort pairs by position descending.',
    'Iterate: if current car time > stack top, it starts a new fleet (push).',
    'Otherwise it catches up and joins the fleet ahead (do not push).',
    'Stack size is the number of fleets.',
  ],
  complexity: { time: 'O(n log n)', space: 'O(n)' },
  codeSnippet: `function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position
    .map((pos, i) => [pos, (target - pos) / speed[i]])
    .sort((a, b) => b[0] - a[0]); // sort by position descending

  const stack: number[] = []; // stores arrival times

  for (const [, time] of cars) {
    if (!stack.length || time > stack[stack.length - 1]) {
      stack.push(time);
    }
    // else: car catches fleet ahead, same arrival time → no push
  }

  return stack.length;
}`,
  hints: [
    'Sorting descending by position means the car nearest the target is processed first.',
    "A car that arrives later than the one ahead can't pass it — they form a fleet.",
    'Equal arrival time means the faster car catches the slower one exactly at the destination.',
  ],
  commonMistakes: [
    'Sorting ascending instead of descending — processes cars in the wrong order.',
    'Pushing when time >= stack top instead of strictly greater — merging incorrectly.',
    'Not pairing positions and speeds before sorting.',
  ],
};
