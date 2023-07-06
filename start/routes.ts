
import Route from '@ioc:Adonis/Core/Route'


Route.get('/form', async ({ view }) => {
  return view.render('home')
})

Route.post('/enviar-formulario', 'Form.submit')
