import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { userEmail, userPassword } = request.only(['userEmail', 'userPassword'])

    try {
      const user = await User.findByOrFail('user_email', userEmail)

      if (!(await Hash.verify(user.userPassword, userPassword))) {
        return response.badRequest({ error: 'Invalid credentials' })
      }

      return auth.use('api').generate(user)
    } catch (error) {
      return response.badRequest('Invalid credentials')
    }
  }
}
