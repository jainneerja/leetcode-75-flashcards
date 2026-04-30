import React from 'react';

export default function CoinChangeViz() {
  const coins = [1, 5, 10, 25];
  const amount = 30;
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i && dp[i - c] + 1 < dp[i]) dp[i] = dp[i - c] + 1;
    }
  }

  const highlights = [0, 1, 5, 10, 25, 30];

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Make $0.30 with fewest coins: [1¢, 5¢, 10¢, 25¢]</p>
      <div className="flex justify-center gap-2">
        {coins.map(c => (
          <div key={c} className="w-12 h-12 rounded-full border-2 border-yellow-400 bg-yellow-500/20 flex items-center justify-center font-bold text-yellow-300 text-sm">
            {c}¢
          </div>
        ))}
      </div>
      <div className="flex gap-1 flex-wrap justify-center">
        {highlights.map(i => (
          <div key={i} className={`text-center ${i === amount ? 'ring-2 ring-yellow-400 rounded' : ''}`}>
            <div className={`w-9 h-9 rounded border flex items-center justify-center text-xs font-bold ${dp[i] === Infinity ? 'border-red-500 bg-red-500/20 text-red-300' : 'border-purple-500 bg-purple-500/20 text-purple-200'}`}>
              {dp[i] === Infinity ? '∞' : dp[i]}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{i}¢</div>
          </div>
        ))}
      </div>
      <div className="text-center bg-yellow-500/20 rounded-lg py-2 border border-yellow-500/30">
        <span className="text-yellow-400 font-bold">dp[30] = 2 coins</span>
        <span className="text-gray-400 text-xs ml-2">(25¢ + 5¢)</span>
      </div>
    </div>
  );
}
