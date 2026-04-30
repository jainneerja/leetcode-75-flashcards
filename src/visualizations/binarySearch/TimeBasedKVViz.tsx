import React from 'react';

interface Props { data: { [key: string]: any } }

const TimeBasedKVViz: React.FC<Props> = ({ data }) => {
  const ops = data?.ops ?? [['set','foo','bar',1],['set','foo','bar2',4],['get','foo',4],['get','foo',5]];

  const entries = [
    { ts: 1, val: 'bar' },
    { ts: 4, val: 'bar2' },
  ];
  const queryTs5 = 5;
  const queryTs4 = 4;

  return (
    <div className="p-4 space-y-5 font-mono text-sm">

      {/* Key label */}
      <div className="text-center">
        <span className="bg-purple-600/30 border border-purple-500/40 rounded px-3 py-1 text-purple-300 text-xs font-bold">
          key = "foo"
        </span>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <div className="text-blue-400 text-xs font-semibold">Timeline (stored values per timestamp)</div>
        <div className="relative pt-6 pb-2">
          {/* Axis */}
          <div className="h-0.5 bg-slate-600 mx-4" />
          {/* Tick marks */}
          {[0, 1, 2, 3, 4, 5, 6].map(t => (
            <div key={t} className="absolute top-5" style={{ left: `${t * 14 + 3}%` }}>
              <div className="w-0.5 h-2 bg-slate-600 mx-auto" />
              <div className="text-[9px] text-slate-500 text-center mt-0.5">{t}</div>
            </div>
          ))}
          {/* Entries */}
          {entries.map((e, i) => (
            <div key={i} className="absolute -top-1" style={{ left: `${e.ts * 14 + 2}%` }}>
              <div className="bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded whitespace-nowrap font-bold">
                "{e.val}"
              </div>
              <div className="w-0.5 h-6 bg-indigo-500 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Operations trace */}
      <div className="space-y-2">
        <div className="text-purple-400 text-xs font-semibold">Operations</div>
        <div className="space-y-1">
          {ops.map((op: any[], i: number) => {
            const isSet = op[0] === 'set';
            return (
              <div key={i} className={`flex items-center gap-2 rounded px-2 py-1.5 text-xs
                ${isSet ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-purple-500/10 border border-purple-500/20'}`}>
                <span className={`font-bold ${isSet ? 'text-blue-400' : 'text-purple-400'}`}>
                  {isSet ? 'set' : 'get'}
                </span>
                <span className="text-slate-300">("{op[1]}"</span>
                {isSet
                  ? <><span className="text-yellow-300">, "{op[2]}"</span><span className="text-slate-300">, t={op[3]})</span></>
                  : <><span className="text-slate-300">, t={op[2]})</span></>
                }
                {!isSet && (
                  <span className="ml-auto text-green-400 font-bold">
                    → "{op[2] <= 1 ? 'bar' : 'bar2'}"
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Binary search callout for get("foo", 5) */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3 text-xs space-y-2">
        <div className="text-indigo-300 font-semibold">get("foo", 5) — Binary Search on timestamps [1, 4]</div>
        <div className="flex gap-2 justify-center items-center">
          {entries.map((e, i) => (
            <div key={i} className={`border rounded-lg px-3 py-2 text-center
              ${e.ts <= queryTs5 ? 'bg-green-500/20 border-green-500/40' : 'bg-slate-700 border-slate-600'}`}>
              <div className="text-slate-400 text-[9px]">ts={e.ts}</div>
              <div className={`font-bold ${e.ts <= queryTs5 ? 'text-green-300' : 'text-slate-400'}`}>"{e.val}"</div>
            </div>
          ))}
          <div className="text-slate-500 text-lg">→</div>
          <div className="bg-green-500/20 border border-green-500/40 rounded-lg px-3 py-2 text-center">
            <div className="text-slate-400 text-[9px]">largest ts ≤ 5</div>
            <div className="text-green-400 font-bold">"bar2"</div>
          </div>
        </div>
        <div className="text-slate-400 text-[10px] text-center">ts=4 ≤ 5 ✓  →  rightmost valid = "bar2"</div>
      </div>
    </div>
  );
};

export default TimeBasedKVViz;
