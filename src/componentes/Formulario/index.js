import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {



    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    // Foi criada a função aoSalvar() que preveni o comportamento de default do SUBMIT
    const aoSalvar =(evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                {/* Coloca no campo texto em alguns itens a propriedade obrigatorio */}
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens ={props.times}
                valor={time}
                aoAlterado={valor =>setTime(valor)}
                />
                {/* Era possivel utilizar dessa forma, porém se fossemos passar outros parametros como imagens
                seria um problema. Nesse caso criaremos as childrens
                <Botao texto="Criar Card" /> */}
                 <Botao>
                    Criar Card
                 </Botao>
            </form>
        </section>
    )


}

export default Formulario