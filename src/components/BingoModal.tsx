interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(61_36_22_/_0.48)] p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-xs rounded-[1.7rem] border border-[rgb(191_136_95_/_0.55)] bg-[linear-gradient(170deg,#fffaf2_0%,#f7e8d5_55%,#f3dfc8_100%)] p-6 text-center shadow-[0_22px_40px_rgb(69_40_23_/_0.35)] animate-[steam-in_260ms_ease-out]">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="mb-2 font-display text-4xl font-bold text-[rgb(123_72_43)]">BINGO!</h2>
        <p className="mb-6 font-semibold text-[rgb(123_76_50)]">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full rounded-xl border border-[rgb(132_79_53_/_0.5)] bg-[linear-gradient(120deg,#905030_0%,#b76d43_68%,#ca8658_100%)] px-6 py-3 font-extrabold text-[rgb(255_248_238)] shadow-[0_10px_18px_rgb(138_87_57_/_0.35)] transition duration-200 hover:brightness-105 active:scale-[0.99]"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
