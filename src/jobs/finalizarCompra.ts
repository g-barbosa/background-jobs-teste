export default {
  key: 'finalizarCompra',
  async handle({ data }) {
    setTimeout(() => console.log(`compra de código: ${data.codigo}, finalizada com sucesso`), 3000)
  }
}
