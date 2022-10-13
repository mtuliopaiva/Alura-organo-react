import './Time.css'

const Time =(props) => {
    const estilo ={backgroundColor:props.corSecundaria}

    return (
        // Estamos colocando estilo inline pois é uma variavel
        // Estamos abrindo duas chaves pois é uma variavel
        <section className='time' style={estilo}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        </section>

    )

}
export default Time