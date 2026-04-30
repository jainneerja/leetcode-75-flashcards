import React from 'react';

const TwoSumViz: React.FC<{ data?: any }> = () => {
  const budget = 26;
  const items = [
    { emoji: '🎸', name: 'Guitar', price: 11 },
    { emoji: '🖼', name: 'Painting', price: 15 },
    { emoji: '📚', name: 'Book', price: 5 },
    { emoji: '🎮', name: 'Game', price: 8 },
    { emoji: '🕶', name: 'Glasses', price: 20 },
    { emoji: '👕', name: 'Shirt', price: 3 },
  ];
  const answerIndices: [number, number] = [0, 1];

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="bg-purple-600 text-white font-bold text-lg px-6 py-2 rounded-full shadow">
        Budget: ${budget}
      </div>

      <div className="grid grid-cols-3 gap-3 w-full">
        {items.map((item, i) => {
          const isAnswer = answerIndices.includes(i as never);
          return (
            <div
              key={i}
              className={`flex flex-col items-center p-3 rounded-xl border-2 shadow ${
                isAnswer
                  ? 'border-green-400 bg-green-900/40 scale-105'
                  : 'border-slate-600 bg-slate-800/60'
              }`}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs text-slate-300 mt-1">{item.name}</span>
              <span className={`font-bold text-sm mt-1 ${isAnswer ? 'text-green-400' : 'text-blue-300'}`}>
                ${item.price}
              </span>
              {isAnswer && (
                <span className="text-green-400 text-xs mt-1 font-semibold">✓</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 bg-slate-800 border border-green-400 rounded-lg px-4 py-2 text-sm">
        <span className="text-slate-300">Guitar</span>
        <span className="text-green-400 font-bold">$11</span>
        <span className="text-slate-400">+</span>
        <span className="text-slate-300">Painting</span>
        <span className="text-green-400 font-bold">$15</span>
        <span className="text-slate-400">=</span>
        <span className="text-yellow-400 font-bold">$26 = Budget ✓</span>
      </div>

      <div className="bg-slate-800 border border-purple-500 rounded-lg px-4 py-2 text-xs text-slate-300 w-full text-center">
        <span className="text-purple-400 font-semibold">Hash Map: </span>
        Saw Guitar($11) → stored. Next: need $26-$15=$11 →
        <span className="text-green-400"> found!</span>
      </div>
    </div>
  );
};

export default TwoSumViz;
