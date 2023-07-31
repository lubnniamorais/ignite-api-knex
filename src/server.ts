import { app } from './app'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

app.register(transactionsRoutes, {
  prefix: 'transactions'
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
