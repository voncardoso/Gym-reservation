import { PrismaUserRepository } from '@/reepositories/prisma-users-repository'
import { RegisterUserCase } from '../register'

export function makeRegisterUseCase() {
  const userRepository = new PrismaUserRepository()
  const registerUseCase = new RegisterUserCase(userRepository)

  return registerUseCase
}
