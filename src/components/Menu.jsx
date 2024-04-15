import logo from '../assets/logo.png'
function Menu() {
    return (
        <>
            <div className="pix">PAGANDO COM PIX VOCÊ GANHA 5% OFF</div>
            <div className="menu">
                <img src={logo} alt="" className="logo" />
                <ul className="nav">
                    <li><a href="#">Atendimento</a></li>
                    <li><a href="#">Rastrear Produto</a></li>
                    <li><a href="#">Minha Conta</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>


            <div className="pages">
                <li><a href="#" className='home'>Home</a></li>
                <li><a href="#" className='categoria'>Categoria</a></li>
                <li><a href="#" className='promocao'>Promoção</a></li>
                <li><a href="#" className='contacto'>Fale Conosco</a></li>
            </div>
        </>
    )
}

export default Menu
