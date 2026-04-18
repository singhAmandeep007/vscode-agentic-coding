import type { BingoSquareData } from "../types";

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    "relative flex min-h-[62px] items-center justify-center rounded-xl border p-1 text-center text-xs leading-tight shadow-[0_3px_8px_rgb(126_81_49_/_0.12)] transition duration-150 select-none sm:min-h-[66px]";

  const stateClasses = square.isMarked
    ? isWinning
      ? "border-[rgb(185_124_45)] bg-[linear-gradient(145deg,#f6dcab_0%,#efc479_100%)] text-[rgb(93_56_28)]"
      : "border-[rgb(191_131_92)] bg-[linear-gradient(150deg,#f9e6d2_0%,#f0d2b6_100%)] text-[rgb(108_62_39)]"
    : "border-[rgb(190_145_111_/_0.55)] bg-[linear-gradient(180deg,#fffdf8_0%,#fff3e6_100%)] text-[rgb(114_71_47)] active:brightness-[0.97]";

  const freeSpaceClasses = square.isFreeSpace
    ? "font-script text-base font-bold tracking-[0.01em] text-[rgb(125_73_45)] shadow-[inset_0_2px_5px_rgb(170_114_82_/_0.24)]"
    : "font-ui font-bold";

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} ${
        square.isFreeSpace ? "cursor-default" : "hover:-translate-y-0.5 active:translate-y-0"
      }`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? "Free space" : square.text}
    >
      <span className="break-words hyphens-auto px-0.5">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 text-[0.72rem] text-[rgb(124_74_44)]">✓</span>
      )}
    </button>
  );
}
