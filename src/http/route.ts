import { FastifyInstance } from 'fastify'
import { register } from './contrrollers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
