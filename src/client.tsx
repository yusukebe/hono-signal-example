/// <reference lib="dom" />
import { render } from 'hono/jsx/dom'
import { signal, computed, effect } from 'hono/jsx/signal'

const Counter = () => {
  const count = signal(0)
  const double = computed(() => count.value * 2)

  effect(() => {
    console.log('count:', count.value)
  })

  return (
    <div>
      <p>
        {count} * 2 = {double}
      </p>
      <button onClick={() => count.value++}>+1</button>
    </div>
  )
}

render(<Counter />, document.getElementById('root')!)
