import './CaixaDeTexto.css'

function CaixaDeTexto({ placeholder }) {
  return (
    <input 
      className="caixa"
      type="text"
      placeholder={placeholder}
    />
  )
}

export default CaixaDeTexto