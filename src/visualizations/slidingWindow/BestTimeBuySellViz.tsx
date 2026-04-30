import React from 'react';

interface Props { data: { [key: string]: any } }

const BestTimeBuySellViz: React.FC<Props> = ({ data }) => {
  const prices: number[] = data?.prices ?? [7, 1, 5, 3, 6, 4];
  const maxPrice = Math.max(...prices);
  const barMaxH = 120;

  const buyDay = 1;  // index of price=1
  const sellDay = 4; // index of price=6
  const profit = prices[sellDay] - prices[buyDay];

  return (
    <div className="flex flex-col items-center gap-4 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">Price Chart — Buy Low, Sell High</h3>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-36 relative">
        {prices.map((price, i) => {
          const barH = Math.round((price / maxPrice) * barMaxH);
          const isBuy = i === buyDay;
          const isSell = i === sellDay;
          const barColor = isBuy
            ? 'bg-green-500'
            : isSell
            ? 'bg-blue-500'
            : 'bg-purple-700';

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              {/* Label above bar */}
              {isBuy && (
                <span className="text-green-400 text-xs font-bold animate-pulse">▼ BUY</span>
              )}
              {isSell && (
                <span className="text-blue-400 text-xs font-bold animate-pulse">▼ SELL</span>
              )}
              {!isBuy && !isSell && <span className="text-xs invisible">·</span>}

              {/* Bar */}
              <div
                className={`w-10 rounded-t-md ${barColor} flex items-end justify-center pb-1 transition-all`}
                style={{ height: `${barH}px` }}
              >
                <span className="text-white text-xs font-bold">{price}</span>
              </div>

              {/* Day label */}
              <span className="text-gray-400 text-xs">D{i + 1}</span>
            </div>
          );
        })}
      </div>

      {/* Profit badge */}
      <div className="flex items-center gap-3 mt-1">
        <div className="flex items-center gap-2 bg-green-900/40 border border-green-500/40 rounded-lg px-4 py-2">
          <span className="text-green-400 text-sm">Buy @ </span>
          <span className="text-green-300 font-bold">${prices[buyDay]}</span>
          <span className="text-gray-400 mx-1">→</span>
          <span className="text-blue-400 text-sm">Sell @ </span>
          <span className="text-blue-300 font-bold">${prices[sellDay]}</span>
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/40 rounded-lg px-4 py-2">
          <span className="text-yellow-300 font-bold text-lg">Profit = {profit}</span>
        </div>
      </div>

      {/* Algorithm state */}
      <div className="flex gap-4 text-xs text-gray-400">
        <span className="bg-gray-800 rounded px-2 py-1">minPrice = <span className="text-green-400 font-mono">1</span></span>
        <span className="bg-gray-800 rounded px-2 py-1">maxProfit = <span className="text-yellow-400 font-mono">5</span></span>
      </div>
    </div>
  );
};

export default BestTimeBuySellViz;
