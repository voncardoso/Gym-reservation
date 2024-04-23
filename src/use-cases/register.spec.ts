import { describe, expect, it } from 'vitest'
import { RegisterUserCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/reepositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './erros/user-already-exists-error'

describe('Register use case', () => {
  it('should be able to register', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUserCase = new RegisterUserCase(usersRepository)

    const { user } = await resgisterUserCase.executeRegister({
      name: 'teste13',
      email: 'teste13@teste6.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUserCase = new RegisterUserCase(usersRepository)

    const { user } = await resgisterUserCase.executeRegister({
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
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUserCase = new RegisterUserCase(usersRepository)

    const email = 'teste13@teste6.com'

    await resgisterUserCase.executeRegister({
      name: 'teste13',
      email,
      password: '123456',
    })

    expect(
      resgisterUserCase.executeRegister({
        name: 'teste13',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
