import { hash } from 'bcryptjs'
import { PrismaUserRepository } from '@/reepositories/prisma-users-repository'
interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUserCaseRequest) {
  const password_hash = await hash(password, 6)

  const prismaUserRepository = new PrismaUserRepository()

  // verificvar se existe um usur com msm email
  const userWhithSameEmail = await prismaUserRepository.findByEmail(email)

  if (userWhithSameEmail) {
    throw new Error('User already exists')
  }

  await prismaUserRepository.create({
    name,
    email,
    password_hash,
  })
}
