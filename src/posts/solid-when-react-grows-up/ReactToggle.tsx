import { createSignal } from 'solid-js'

export function ReactToggle() {
  const [on, setOn] = createSignal(false)
  return (
    <button
      onclick={() => setOn((state) => !state)}
      class={`rounded-full px-8 py-1 font-bold ${
        on() ? 'bg-green-600 text-white' : 'bg-neutral-200'
      }`}
    >
      {on() ? 'on' : 'off'}
    </button>
  )
}
