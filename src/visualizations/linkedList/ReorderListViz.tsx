import React from 'react';

function NodeBox({ val, color }: { val: number; color: string }) {
  return (
    <div className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold text-sm ${color}`}>
      {val}
    </div>
  );
}

export default function ReorderListViz() {
  return (
    <div className="space-y-3 text-sm">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 w-5 text-xs font-bold">1.</span>
          <span className="text-gray-300 text-xs">Original:</span>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((n,i) => (
              <React.Fragment key={i}>
                <NodeBox val={n} color="border-purple-400 bg-purple-500/20 text-purple-200" />
                {i<4 && <span className="text-gray-500 text-xs">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400 w-5 text-xs font-bold">2.</span>
          <span className="text-gray-300 text-xs">Split + reverse 2nd half:</span>
          <div className="flex items-center gap-1">
            {[1,2,3].map((n,i) => (
              <React.Fragment key={i}>
                <NodeBox val={n} color="border-blue-400 bg-blue-500/20 text-blue-200" />
                {i<2 && <span className="text-gray-500 text-xs">→</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-500 mx-1">|</span>
            {[5,4].map((n,i) => (
              <React.Fragment key={i}>
                <NodeBox val={n} color="border-green-400 bg-green-500/20 text-green-200" />
                {i<1 && <span className="text-gray-500 text-xs">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-400 w-5 text-xs font-bold">3.</span>
          <span className="text-gray-300 text-xs">Merge alternately:</span>
          <div className="flex items-center gap-1 flex-wrap">
            {[1,5,2,4,3].map((n,i) => {
              const isOdd = i % 2 === 0;
              return (
                <React.Fragment key={i}>
                  <NodeBox val={n} color={isOdd ? 'border-blue-400 bg-blue-500/20 text-blue-200' : 'border-green-400 bg-green-500/20 text-green-200'} />
                  {i<4 && <span className="text-gray-500 text-xs">→</span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
