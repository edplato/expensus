import 'dotenv/config'

import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import favicon from 'koa-favicon'
import path from 'path'

const app = new Koa()
const router = new Router()

app.use(logger())
app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')))

router.get('/*', async ctx => {
  ctx.body = 'Hello world'
})

app.use(router.routes())

app.listen(process.env.SERVER_PORT || 3000)

console.log('Server running on port: ', process.env.SERVER_PORT || '3000')
