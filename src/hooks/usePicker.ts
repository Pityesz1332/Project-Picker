import { useCallback, useEffect, useRef, useState } from 'react'

function pickRandom<T>(items: readonly T[], exclude?: T): T {
  if (items.length === 1) return items[0]
  let next: T
  do {
    next = items[Math.floor(Math.random() * items.length)]
  } while (next === exclude)
  return next
}

const ROLL_MIN_TICKS = 9
const ROLL_MAX_TICKS = 13
const ROLL_BASE_DELAY = 45
const ROLL_DELAY_STEP = 16

export function usePicker<T>(items: readonly T[]) {
  const [value, setValue] = useState<T>(() => pickRandom(items))
  const [locked, setLocked] = useState(false)
  const [rolling, setRolling] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const reroll = useCallback(() => {
    if (locked || timeoutRef.current) return

    setRolling(true)
    const totalTicks =
      ROLL_MIN_TICKS + Math.floor(Math.random() * (ROLL_MAX_TICKS - ROLL_MIN_TICKS + 1))

    let tick = 0
    const step = () => {
      setValue((current) => pickRandom(items, current))
      tick += 1
      if (tick < totalTicks) {
        timeoutRef.current = setTimeout(step, ROLL_BASE_DELAY + tick * ROLL_DELAY_STEP)
      } else {
        timeoutRef.current = null
        setRolling(false)
      }
    }
    step()
  }, [items, locked])

  const toggleLock = useCallback(() => setLocked((l) => !l), [])

  return { value, locked, rolling, reroll, toggleLock }
}
