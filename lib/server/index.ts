import 'dotenv/config'

import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/*', async ctx => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(process.env.SERVER_PORT || 3000)

console.log('Server running on port: ', process.env.SERVER_PORT || '3000')
