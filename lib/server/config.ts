interface ServerConfiguration {
  database: {
    type: 'postgres'
    host: string
    name: string
    password: string

    port: number
    username: string
  }
  server: {
    port: number
  }
}

function fetchVar(key: string, defaultValue?: string): string {
  const value = process.env[key]

  if (!value) {
    if (defaultValue !== undefined) return defaultValue

    throw new Error(`process.env.${key} is missing`)
  }

  return value
}

const config: ServerConfiguration = {
  database: {
    type: 'postgres',
    host: fetchVar('DB_HOST'),
    name: fetchVar('DB_NAME'),
    password: fetchVar('DB_PASSWORD', ''),
    port: Number(fetchVar('DB_PORT', '5432')),
    username: fetchVar('DB_USERNAME'),
  },
  server: {
    port: Number(fetchVar('SERVER_PORT', '8130')),
  },
}

export default config
