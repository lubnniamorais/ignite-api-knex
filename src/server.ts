import { app } from './app'
import { knex } from './database'
import { env } from './env'

app.get('/hello', async () => {
  const transaction = await knex('transactions').where('amount', 1000).select('*')

  return transaction
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
