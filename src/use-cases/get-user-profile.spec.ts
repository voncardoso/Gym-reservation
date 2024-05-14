import { InMemoryUsersRepository } from '@/reepositories/in-memory/in-memory-users-repository'

import { beforeEach, describe, expect, it } from 'vitest'
import { GetUserProfileUseCase } from './get-user-ptofile'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './erros/invalid-credentils-error'
import { ResourceNotFoundError } from './erros/resource-not-found-error'

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get user profile use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUSer = await usersRepository.create({
      name: 'John Doe',
      email: 'I7V9A@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUSer.id,
    })

    expect(user.name).toEqual('John Doe')
  })

  it('should not be able to get user profile with wrong id', async () => {
    expect(() =>
      sut.execute({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
