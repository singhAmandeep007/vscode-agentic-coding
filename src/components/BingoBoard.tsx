import type { BingoSquareData } from "../types";
import { BingoSquare } from "./BingoSquare";

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="w-full max-w-md rounded-[2rem] border border-[rgb(163_111_76_/_0.44)] bg-[linear-gradient(165deg,#fff8ef_0%,#f8e6d1_48%,#f2dcc6_100%)] p-3 shadow-[0_18px_32px_rgb(108_65_38_/_0.19)] sm:p-4">
      <div className="grid aspect-square w-full grid-cols-5 gap-1.5 rounded-2xl border border-[rgb(188_137_102_/_0.38)] bg-[rgb(255_251_244_/_0.82)] p-2 shadow-[inset_0_2px_6px_rgb(174_122_90_/_0.14)] sm:gap-2">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
