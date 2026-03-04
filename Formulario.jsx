import './Formulario.css'
import CaixaDeTexto from './CaixaDeTexto'
import Senha from './Senha'
import Botao from './Botao'

function Formulario() {

  function enviar() {
    alert("Dados enviados!")
  }

  function cancelar() {
    alert("Envio cancelado!")
  }

  return (
    <div className="formulario">
      <h2>Formulário</h2>

      <CaixaDeTexto placeholder="Nome" />
      <CaixaDeTexto placeholder="Sobrenome" />
      <CaixaDeTexto placeholder="E-mail" />
      <Senha />

      <div className="botoes">
        <Botao texto="Enviar" onClick={enviar} />
        <Botao texto="Cancelar" onClick={cancelar} />
      </div>
    </div>
  )
}

export default Formulario