import {
  Accessor,
  createEffect,
  createSignal,
  JSXElement,
  Setter,
} from 'solid-js'

const Button = ({
  on,
  setOn,
}: {
  on: Accessor<boolean | undefined>
  setOn: Setter<boolean>
}) => (
  <button
    onclick={() => setOn((state) => !state)}
    class={`rounded-full px-8 py-1 font-bold ${
      on() ? 'bg-green-600 text-white' : 'bg-neutral-200'
    }`}
  >
    {on() ? 'on' : 'off'}
  </button>
)

export function ReactToggle() {
  const [on, setOn] = createSignal(false)
  return <Button on={on} setOn={setOn} />
}

const [rerender, setRerender] = createSignal()

const Component = ({
  name,
  children,
}: {
  name: string
  children: JSXElement
}) => {
  createEffect(() => {
    if (rerender()) {
      setTimeout(() => {
        setRerender(false)
      }, 250)
    }
  })

  return (
    <div
      class={`overflow-hidden rounded-md bg-gray-200 text-center ${
        rerender() ? 'ring-1 ring-red-600' : ''
      }`}
    >
      <p class="bg-gray-100 px-2 text-[0.75rem]">&lt;{name} &#47;&gt;</p>
      {children}
    </div>
  )
}

const HeavyComputation = () => (
  <Component name="HeavyComputation">
    <p class="py-8 font-black">800kg of steel</p>
  </Component>
)

const DeeplyNestedTree = ({ depth = 2 }: { depth?: number }) => (
  <Component name={['Tree', 'NestedTree', 'DeeplyNestedTree'][depth]}>
    <div class="p-1">
      {depth > 0 ? (
        <div style={{ filter: `brightness(${depth * 0.7})` }}>
          <DeeplyNestedTree depth={depth - 1} />
        </div>
      ) : (
        <p>🌲</p>
      )}
    </div>
  </Component>
)

export function ReactToggleReRender() {
  const [on, setOn] = createSignal<boolean>()

  createEffect(() => {
    if (on() === undefined) return
    setRerender(true)
  })

  return (
    <>
      <Button on={on} setOn={setOn} />
      <div class="mt-6 flex flex-wrap gap-x-6">
        <HeavyComputation />
        <DeeplyNestedTree />
      </div>
    </>
  )
}

export function SolidToggleReRender() {
  const [on, setOn] = createSignal(false)

  return (
    <>
      <Button on={on} setOn={setOn} />
      <div class="mt-6 flex flex-wrap gap-x-6">
        <HeavyComputation />
        <DeeplyNestedTree />
      </div>
    </>
  )
}
