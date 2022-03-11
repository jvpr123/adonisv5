import Database from '@ioc:Adonis/Lucid/Database'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return Database.from('users').select('*')
})
