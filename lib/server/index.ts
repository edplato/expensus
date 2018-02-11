import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import favicon from 'koa-favicon'
import logger from 'koa-logger'
import Router from 'koa-router'
import path from 'path'

import 'dotenv/config'

const app = new Koa()
const router = new Router()
const port = process.env.SERVER_PORT || 3000

app.use(logger())
app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')))
app.use(bodyparser())

router.get('/*', async ctx => {
  ctx.body = 'Hello world'
})

app.use(router.routes())

app.listen(port)

console.log('Server running on port: ', port)
