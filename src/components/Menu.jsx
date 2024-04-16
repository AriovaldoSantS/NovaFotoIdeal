import logo from '../assets/icon/400ppi/Ativo 1.png'

function Menu() {
    return (
        <>
            <div className="pix">PAGANDO COM PIX VOCÊ GANHA 5% OFF</div>
            <div className="menu">
                <a href="/"><img src={logo} alt="" className="logo" /></a>
                <ul className="nav">
                    <li><a href="/atendimento">Atendimento</a></li>
                    <li><a href="/rastrear">Rastrear Produto</a></li>
                    <li><a href="/conta">Minha Conta</a></li>
                    <li><a href="/carrinho">Cart</a></li>
                </ul>
            </div>


            <div className="pages">
                <li><a href="/" className='home'>Home</a></li>
                <li><a href="/categoria" className='categoria'>Categoria</a></li>
                <li><a href="/promocao" className='promocao'>Promoção</a></li>
                <li><a href="fale" className='contacto'>Fale Conosco</a></li>
            </div>
        </>
    )
}

export default Menu
