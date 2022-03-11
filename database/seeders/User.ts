import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'userEmail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        userEmail: 'virk@adonisjs.com',
        userPassword: 'secret',
      },
      {
        userEmail: 'romain@adonisjs.com',
        userPassword: 'supersecret',
      },
    ])
  }
}
