import req from 'supertest'
import server from './server'

describe('Server', () => {
  it('[GET] /', async () => {
    const res = await req(server).get('/')
    expect(res.text).toBe('Hello!')
  })
})