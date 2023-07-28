import { app } from './app'
import { knex } from './database'
import { env } from './env'

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app.listen(
  {
    host: '0.0.0.0',
    port: env.PORT,
  },
  () => {
    console.log('🚀 Server is listening')
  },
)
