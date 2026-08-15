type PickerProps = {
  label: string
  value: string
  locked: boolean
  rolling: boolean
  onReroll: () => void
  onToggleLock: () => void
}

export function Picker({ label, value, locked, rolling, onReroll, onToggleLock }: PickerProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-6 rounded-3xl border border-neutral-200 bg-white px-6 py-10 shadow-sm transition-shadow sm:w-[34rem] dark:border-neutral-800 dark:bg-neutral-900 ${
        rolling ? 'animate-roll-glow' : ''
      }`}
    >
      <span className="text-sm font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
        {label}
      </span>
      <span className="flex min-h-24 w-full items-center justify-center overflow-hidden">
        <span
          key={`${value}-${rolling}`}
          className={`whitespace-normal text-3xl font-bold sm:text-4xl sm:whitespace-nowrap ${
            rolling
              ? 'animate-roll-tick text-violet-500 dark:text-violet-400'
              : 'animate-roll-settle text-neutral-900 dark:text-neutral-50'
          }`}
        >
          {value}
        </span>
      </span>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onReroll}
          disabled={locked || rolling}
          className="rounded-full bg-violet-600 px-5 py-2.5 text-base font-medium text-white transition hover:bg-violet-500 active:scale-95 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:hover:bg-neutral-300 dark:disabled:bg-neutral-700 dark:disabled:hover:bg-neutral-700"
        >
          <span className={rolling ? 'inline-block animate-spin' : 'inline-block'}>🎲</span> Reroll
        </button>
        <button
          type="button"
          onClick={onToggleLock}
          disabled={rolling}
          aria-pressed={locked}
          className={`rounded-full px-5 py-2.5 text-base font-medium transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
            locked
              ? 'bg-amber-400 text-amber-950 hover:bg-amber-300'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
          }`}
        >
          {locked ? '🔒 Locked' : '🔓 Lock'}
        </button>
      </div>
    </div>
  )
}
