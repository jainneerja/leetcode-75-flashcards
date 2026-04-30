import React from 'react';

const ValidSudokuViz: React.FC<{ data?: any }> = () => {
  const board: (string | null)[][] = [
    ['5','3',null,null,'7',null,null,null,null],
    ['6',null,null,'1','9','5',null,null,null],
    [null,'9','8',null,null,null,null,'6',null],
    ['8',null,null,null,'6',null,null,null,'3'],
    ['4',null,null,'8',null,'3',null,null,'1'],
    ['7',null,null,null,'2',null,null,null,'6'],
    [null,'6',null,null,null,null,'2','8',null],
    [null,null,null,'4','1','9',null,null,'5'],
    [null,null,null,null,'8',null,null,'7','9'],
  ];
  const highlightRow = 0;
  const highlightCol = 0;
  const highlightBox = 0;

  const getCellStyle = (r: number, c: number): string => {
    const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
    const inRow = r === highlightRow;
    const inCol = c === highlightCol;
    const inBox = boxIdx === highlightBox;

    if (inRow && inCol) return 'bg-yellow-800/60 border-yellow-400 text-yellow-300';
    if (inRow) return 'bg-blue-900/40 border-blue-400 text-blue-200';
    if (inCol) return 'bg-purple-900/40 border-purple-400 text-purple-200';
    if (inBox) return 'bg-green-900/40 border-green-500 text-green-200';
    return 'bg-slate-800 border-slate-600 text-slate-400';
  };

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: 'repeat(9, 1fr)' }}>
        {board.map((row, r) =>
          row.map((cell, c) => {
            const borderRight = c === 2 || c === 5 ? 'border-r-2 border-r-slate-400 mr-1' : '';
            const borderBottom = r === 2 || r === 5 ? 'border-b-2 border-b-slate-400 mb-1' : '';
            return (
              <div
                key={`${r}-${c}`}
                className={`w-7 h-7 flex items-center justify-center text-xs font-bold border rounded ${getCellStyle(r, c)} ${borderRight} ${borderBottom}`}
              >
                {cell ?? ''}
              </div>
            );
          })
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs w-full">
        <div className="flex items-center gap-2 bg-blue-900/30 border border-blue-500 rounded px-2 py-1.5">
          <span className="w-3 h-3 rounded bg-blue-700 border border-blue-400 flex-shrink-0" />
          <span className="text-blue-300">Row {highlightRow} — no dups ✓</span>
        </div>
        <div className="flex items-center gap-2 bg-purple-900/30 border border-purple-500 rounded px-2 py-1.5">
          <span className="w-3 h-3 rounded bg-purple-700 border border-purple-400 flex-shrink-0" />
          <span className="text-purple-300">Col {highlightCol} — no dups ✓</span>
        </div>
        <div className="flex items-center gap-2 bg-green-900/30 border border-green-500 rounded px-2 py-1.5">
          <span className="w-3 h-3 rounded bg-green-700 border border-green-500 flex-shrink-0" />
          <span className="text-green-300">Box {highlightBox} — no dups ✓</span>
        </div>
      </div>

      <div className="bg-slate-800 border border-indigo-500 rounded-lg px-3 py-2 text-xs text-slate-300 text-center">
        <span className="text-indigo-400 font-semibold">Single pass: </span>
        check each filled cell against its row set, col set, and box set
      </div>
    </div>
  );
};

export default ValidSudokuViz;
