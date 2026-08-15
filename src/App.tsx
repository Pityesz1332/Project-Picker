import { useCallback } from 'react'
import { Picker } from './components/Picker'
import { AUDIENCES } from './data/audiences'
import { THINGS } from './data/things'
import { useDarkMode } from './hooks/useDarkMode'
import { usePicker } from './hooks/usePicker'

function App() {
  const thing = usePicker(THINGS)
  const audience = usePicker(AUDIENCES)
  const { dark, toggle } = useDarkMode()

  const surpriseMe = useCallback(() => {
    thing.reroll()
    audience.reroll()
  }, [thing, audience])

  const anyRolling = thing.rolling || audience.rolling

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-center">
        <div className="flex w-full items-center justify-end">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-full border border-neutral-200 p-2 text-lg hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Project Picker</h1>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Turn "I want to build something" into a concrete idea.
          </p>
        </div>

        <p className="text-xl font-medium text-neutral-400 sm:text-2xl dark:text-neutral-500">
          Build a(n)...
        </p>

        <div className="flex w-full flex-col items-center gap-6 xl:flex-row xl:justify-center">
          <Picker
            label="Thing"
            value={thing.value}
            locked={thing.locked}
            rolling={thing.rolling}
            onReroll={thing.reroll}
            onToggleLock={thing.toggleLock}
          />
          <span className="text-lg font-semibold text-neutral-400 dark:text-neutral-500">
            for
          </span>
          <Picker
            label="Audience / Purpose"
            value={audience.value}
            locked={audience.locked}
            rolling={audience.rolling}
            onReroll={audience.reroll}
            onToggleLock={audience.toggleLock}
          />
        </div>

        <button
          type="button"
          onClick={surpriseMe}
          disabled={anyRolling}
          className="rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-neutral-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 dark:bg-violet-600 dark:hover:bg-violet-500"
        >
          {anyRolling ? '🎰 Rolling...' : '✨ Surprise Me'}
        </button>

        <p className="max-w-2xl rounded-xl border border-dashed border-neutral-300 px-6 py-4 text-lg text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          Build a{' '}
          <span className="font-semibold text-neutral-900 dark:text-neutral-50">
            {thing.value}
          </span>{' '}
          for{' '}
          <span className="font-semibold text-neutral-900 dark:text-neutral-50">
            {audience.value}
          </span>
        </p>
      </div>
    </div>
  )
}

export default App
