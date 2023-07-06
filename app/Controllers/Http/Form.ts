import axios from 'axios'

export default class Form {
  async submit({ request, response }) {
    try {
      // Fazendo uma solicitação POST usando o Axios
      const formData = request.body()
      const apiResponse = await axios.post('http://127.0.0.1:3333/enviar-formulario', formData);

      // Verificando a resposta da API
      if (apiResponse.status === 200) {
        return response.status(200).send('Formulário enviado com sucesso!');
      } else {
        return response.status(500).send('Erro ao enviar o formulário.');
      }
    } catch (error) {
      return response.status(500).send('Erro ao enviar o formulário.');
    }
  }
}
