import { usersRepository } from '@/reepositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './erros/user-already-exists-error'
import { User } from '@prisma/client'
interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

//  D - Dependency Inversion Principle (Principio da inversão de dependencia)

interface RegisterUSeCaseRequest {
  user: User
}
export class RegisterUserCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private usersRepository: usersRepository) {}

  async executeRegister({
    name,
    email,
    password,
  }: RegisterUserCaseRequest): Promise<RegisterUSeCaseRequest> {
    const password_hash = await hash(password, 6)

    // verificvar se existe um usur com msm email
    const userWhithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWhithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return {
      user,
    }
  }
}
