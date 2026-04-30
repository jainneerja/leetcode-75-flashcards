import React from 'react';

const ProductExceptSelfViz: React.FC<{ data?: any }> = () => {
  const nums = [1, 2, 3, 4];
  const n = nums.length;

  const prefix = new Array(n).fill(1);
  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] * nums[i - 1];

  const suffix = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1];

  const result = nums.map((_, i) => prefix[i] * suffix[i]);

  const Row = ({ label, values, color }: { label: string; values: number[]; color: string }) => (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-semibold w-20 text-right ${color}`}>{label}</span>
      <div className="flex gap-1">
        {values.map((v, i) => (
          <div key={i} className={`w-10 h-9 flex items-center justify-center rounded border font-bold text-sm ${color === 'text-blue-400' ? 'border-blue-500 bg-blue-900/30 text-blue-300' : color === 'text-purple-400' ? 'border-purple-500 bg-purple-900/30 text-purple-300' : 'border-green-500 bg-green-900/40 text-green-300'}`}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3 p-2">
      <Row label="nums" values={nums} color="text-slate-400" />

      <div className="w-full border-t border-slate-700 my-1" />

      <Row label="prefix →" values={prefix} color="text-blue-400" />
      <p className="text-slate-500 text-xs">prefix[i] = product of all elements to the LEFT of i</p>

      <Row label="← suffix" values={suffix} color="text-purple-400" />
      <p className="text-slate-500 text-xs">suffix[i] = product of all elements to the RIGHT of i</p>

      <div className="w-full border-t border-slate-700 my-1" />

      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold w-20 text-right text-green-400">result ✓</span>
        <div className="flex gap-1">
          {result.map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="text-[10px] text-slate-500">{prefix[i]}×{suffix[i]}</div>
              <div className="w-10 h-9 flex items-center justify-center rounded border-2 border-green-400 bg-green-900/40 text-green-300 font-bold text-sm">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-slate-400 text-xs text-center">result[i] = prefix[i] × suffix[i] — no division needed</p>
    </div>
  );
};

export default ProductExceptSelfViz;
