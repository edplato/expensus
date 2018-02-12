import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

import config from '../config'

const { database } = config

export default function createConnectionOptions(): ConnectionOptions {
  return {
    type: database.type,
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
    database: database.name,
    entities: [join(__dirname, './entities/{*.ts,*.js}')],
    extra: { max: 1, idleTimeoutMillis: 1 },
    synchronize: true,
  }
}
