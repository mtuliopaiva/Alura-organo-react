
import './CampoTexto.css'
/*Dessa vez criaremos uma constante que é uma arrow function
traz o mesmo resultado da forma em que foi criada banner.js*/
// - Importante criar variaveis com letra maiuscula no React

// Aqui iremos passar parametros para puxar em label e inputs
const CampoTexto = (props) => {


    const aoDigitado = (evento) => {
        // setValor(evento.target.value);
        // console.log(valor);

        props.aoAlterado(evento.target.value);
    }

    // Utilizamos o parenteses para retornar diversas informações
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            {/* Seta a propriedade required quando exister props.obrigatorio */}
            <input value={props.valor} onChange={aoDigitado} required ={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>

    )
}

export default CampoTexto