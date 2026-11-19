import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <h1>Singla Example</h1>
      <div id='root'></div>
    </>
  )
})

export default app
