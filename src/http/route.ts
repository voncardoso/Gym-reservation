import { FastifyInstance } from 'fastify'
import { register } from './contrrollers/register'
import { authenticate } from './contrrollers/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
}
