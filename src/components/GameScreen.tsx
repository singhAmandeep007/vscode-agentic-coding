import type { BingoSquareData } from "../types";
import { BingoBoard } from "./BingoBoard";

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({ board, winningSquareIds, hasBingo, onSquareClick, onReset }: GameScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden px-3 py-3 sm:px-5 sm:py-4">
      <div className="pointer-events-none absolute inset-0 cafe-grain opacity-45" />
      <div className="pointer-events-none absolute left-1/3 top-0 h-48 w-48 rounded-full bg-[rgb(255_205_147_/_0.33)] blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-3xl items-center justify-between rounded-2xl border border-[rgb(169_115_79_/_0.34)] bg-[rgb(255_249_239_/_0.86)] px-3 py-2.5 shadow-[0_10px_22px_rgb(120_76_50_/_0.14)] backdrop-blur-sm sm:px-4">
        <button
          onClick={onReset}
          className="rounded-xl border border-[rgb(172_122_85_/_0.4)] bg-[rgb(255_255_255_/_0.75)] px-3 py-1.5 text-sm font-bold text-[rgb(116_70_45)] transition duration-150 hover:bg-[rgb(255_245_231)] active:scale-[0.98]"
        >
          ← Back
        </button>
        <h1 className="font-display text-2xl font-bold text-[rgb(90_53_34)]">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <div className="relative z-10 mx-auto mt-3 w-full max-w-3xl rounded-xl border border-[rgb(198_149_111_/_0.34)] bg-[rgb(255_252_247_/_0.78)] px-4 py-2 text-center text-sm font-semibold text-[rgb(120_74_49)] shadow-[0_6px_14px_rgb(128_79_52_/_0.11)]">
        Tap a square when you find someone who matches it.
      </div>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="relative z-10 mx-auto mt-3 w-full max-w-3xl rounded-xl border border-[rgb(179_122_48_/_0.44)] bg-[linear-gradient(90deg,#f7e0b2_0%,#efca84_50%,#f2dcaa_100%)] py-2 text-center text-sm font-extrabold tracking-[0.01em] text-[rgb(113_67_34)] shadow-[0_8px_16px_rgb(151_95_39_/_0.16)] animate-[steam-in_280ms_ease-out]">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="relative z-10 flex flex-1 items-center justify-center py-4 sm:py-6">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
