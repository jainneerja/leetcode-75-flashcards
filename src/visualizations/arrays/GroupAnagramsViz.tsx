import React from 'react';

const BUCKET_STYLES = [
  { border: 'border-green-500', bg: 'bg-green-900/30', text: 'text-green-300', key: 'text-green-400' },
  { border: 'border-blue-500', bg: 'bg-blue-900/30', text: 'text-blue-300', key: 'text-blue-400' },
  { border: 'border-yellow-500', bg: 'bg-yellow-900/30', text: 'text-yellow-300', key: 'text-yellow-400' },
  { border: 'border-purple-500', bg: 'bg-purple-900/30', text: 'text-purple-300', key: 'text-purple-400' },
];

const GroupAnagramsViz: React.FC<{ data?: any }> = () => {
  const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

  const groupMap = new Map<string, string[]>();
  for (const word of words) {
    const key = word.split('').sort().join('');
    if (!groupMap.has(key)) groupMap.set(key, []);
    groupMap.get(key)!.push(word);
  }

  const groups = [...groupMap.entries()];

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <p className="text-slate-400 text-xs">Each word → sort letters → canonical key → group</p>

      <div className="flex gap-2 flex-wrap justify-center mb-1">
        {words.map((w, i) => (
          <div key={i} className="bg-slate-700 border border-slate-500 text-slate-200 px-3 py-1 rounded-lg text-sm font-mono">
            {w}
          </div>
        ))}
      </div>

      <div className="text-slate-500 text-lg">↓ sort each word's letters</div>

      <div className="flex flex-col gap-3 w-full">
        {groups.map(([key, members], gi) => {
          const style = BUCKET_STYLES[gi % BUCKET_STYLES.length];
          return (
            <div key={key} className={`border-2 ${style.border} ${style.bg} rounded-xl p-3`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-xs">Key:</span>
                <span className={`font-mono font-bold text-sm ${style.key}`}>"{key}"</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {members.map((w, i) => (
                  <span key={i} className={`${style.bg} border ${style.border} ${style.text} px-3 py-1 rounded-lg text-sm font-semibold`}>
                    {w}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupAnagramsViz;
