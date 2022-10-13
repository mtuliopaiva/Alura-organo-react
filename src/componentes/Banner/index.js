import './Banner.css'

function Banner() {
    /*JSX - Parece HTML mas não é. O React entenderá o que 
    é e realizara o Append no DOM*/
    return(
        // Atribuindo classes no header criado
        <header className='banner'> 
        <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner