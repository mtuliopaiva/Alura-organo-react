import './ListaSuspensa.css'


const ListaSuspensa = (props) =>{
   


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>

                {/* Arrow function aqui - Para cada item mapeado ele vai retornar uma option com item no meio 
                 map - percorre a lista e devolve alguma coisa (diferente do forEach que percorre e faz algo)*/}
                {props.itens.map(item => {

                    // Necessário adicionar uma propriedade key. O React precisa dessa propriedade
                    // para controla a renderização
                    return  <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa
