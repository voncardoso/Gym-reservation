import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterUserCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/reepositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './erros/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUserCase

describe('Register use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUserCase(usersRepository)
  })
  it('should be able to register', async () => {
    const { user } = await sut.executeRegister({
      name: 'teste13',
      email: 'teste13@teste6.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const { user } = await sut.executeRegister({
      name: 'teste13',
      email: 'teste13@teste6.com',
      password: '123456',
    })

    const isPassawordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPassawordCorrectlyHashed).toBe(true)
  })

  it('should not to be able register with same email twice', async () => {
    const email = 'teste13@teste6.com'

    await sut.executeRegister({
      name: 'teste13',
      email,
      password: '123456',
    })

    expect(
      sut.executeRegister({
        name: 'teste13',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
