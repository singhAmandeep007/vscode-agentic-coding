interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
      <div className="pointer-events-none absolute inset-0 cafe-grain opacity-60" />
      <div className="pointer-events-none absolute -top-20 -left-14 h-52 w-52 rounded-full bg-[rgb(255_219_179_/_0.62)] blur-2xl" />
      <div className="pointer-events-none absolute -right-16 bottom-4 h-64 w-64 rounded-full bg-[rgb(255_181_110_/_0.35)] blur-3xl" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-[rgb(151_101_70_/_0.32)] bg-[rgb(255_249_240_/_0.95)] p-7 text-center shadow-[0_18px_45px_rgb(109_66_37_/_0.18)] backdrop-blur-sm animate-[rise-soft_400ms_ease-out] sm:p-8">
        <h1 className="mb-2 font-display text-5xl leading-tight text-[rgb(88_50_32)]">Bingo Mixer</h1>
        <p className="mb-8 text-lg font-semibold text-[rgb(136_83_52)]">Find your people!</p>

        <div className="mb-8 rounded-2xl border border-[rgb(180_129_95_/_0.35)] bg-[rgb(255_255_255_/_0.72)] p-5 text-left shadow-[inset_0_1px_0_rgb(255_255_255_/_0.85)]">
          <h2 className="mb-3 font-display text-2xl text-[rgb(101_56_35)]">How to play</h2>
          <ul className="space-y-2 text-sm font-semibold text-[rgb(115_67_42)] sm:text-[0.95rem]">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-2xl border border-[rgb(124_72_47_/_0.55)] bg-[linear-gradient(120deg,#9b5b35_0%,#b86f46_58%,#cc8859_100%)] px-8 py-4 text-lg font-extrabold tracking-[0.01em] text-[rgb(255_249_241)] shadow-[0_12px_22px_rgb(140_87_53_/_0.36)] transition duration-200 ease-out hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:brightness-95"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
